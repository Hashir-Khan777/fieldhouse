const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const mediasoup = require("mediasoup");
require("dotenv").config();

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("WebSocket Server is running");
});

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

let worker;
let router;
const streams = [];
const activeStreams = [];
let userModel;
let streamModel;

const createWorker = async () => {
  worker = await mediasoup.createWorker();
  console.log("Mediasoup worker started ✅");

  worker.on("died", () => {
    console.error("Mediasoup worker died, exiting...");
    process.exit(1);
  });

  router = await worker.createRouter({
    mediaCodecs: [
      {
        kind: "audio",
        mimeType: "audio/opus",
        clockRate: 48000,
        channels: 2,
      },
      {
        kind: "video",
        mimeType: "video/VP8",
        clockRate: 90000,
        parameters: { "x-google-start-bitrate": 1000 },
      },
    ],
  });

  console.log("Router created ✅");
};

const createWebRtcTransport = async () => {
  const transport = await router.createWebRtcTransport({
    listenIps: [{ ip: "0.0.0.0", announcedIp: process.env.ANNOUNCED_DOMAIN }],
    enableUdp: true,
    enableTcp: true,
    preferUdp: true,
  });

  return {
    transport,
    params: {
      id: transport.id,
      iceParameters: transport.iceParameters,
      iceCandidates: transport.iceCandidates,
      dtlsParameters: transport.dtlsParameters,
    },
  };
};

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  userModel =
    mongoose.models.User ||
    mongoose.model(
      "User",
      new mongoose.Schema(
        {
          username: { type: String, required: true },
          email: { type: String, required: true, unique: true },
          password: { type: String, required: true },
          verified: { type: Boolean, default: false },
          documentsverified: { type: Boolean, default: false },
          adultContent: { type: Boolean, default: false },
          profilePic: { type: String },
          banner: { type: String },
          bio: { type: String },
        },
        { strict: false, timestamps: true }
      ),
      "users"
    );
  streamModel =
    mongoose.models.Stream ||
    mongoose.model(
      "Stream",
      new mongoose.Schema(
        {
          streamer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          title: { type: String, required: true },
          category: { type: String, required: true },
          thumbnail: { type: String, default: false },
          description: { type: String, default: false },
          joinees: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
            default: [],
          },
        },
        { strict: false, timestamps: true }
      ),
      "streams"
    );
  console.log("mongo db connected");
};

const createStream = (streamId) => {
  const newStream = {
    id: streamId,
    transports: [],
    producers: [],
  };
  streams.push(newStream);
  return newStream;
};

createWorker();
connectDB();

io.on("connection", async (socket) => {
  console.log("✅ Client connected:", socket.id);

  socket.on("client-ready", () => {
    io.emit("streams", activeStreams);
  });

  socket.on("getRtpCapabilities", (callback) => {
    callback(router.rtpCapabilities);
  });

  socket.on("createTransport", async (streamId, callback) => {
    socket.join(streamId);
    const { transport, params } = await createWebRtcTransport();
    const stream = streams.find((x) => x.id === streamId);
    if (!stream) {
      createStream(streamId);
    }
    streams.find((x) => x.id === streamId).transports.push(transport);
    const streamExists = activeStreams.find((x) => x.id === streamId);
    if (!streamExists) {
      const streamById = await streamModel
        .findById(streamId)
        .populate("streamer");
      activeStreams.push(streamById);
    }
    callback(params);
    io.emit("streams", activeStreams);
  });

  socket.on(
    "connectTransport",
    async ({ transportId, dtlsParameters }, streamId, callback) => {
      let transport = streams
        .find((x) => x.id === streamId)
        ?.transports?.find((t) => t.id === transportId);
      await transport.connect({ dtlsParameters });
      callback();
    }
  );

  socket.on(
    "produce",
    async ({ transportId, kind, rtpParameters }, streamId, callback) => {
      const stream = streams.find((x) => x.id === streamId);
      const transport = stream?.transports?.find((t) => t.id === transportId);
      const producer = await transport.produce({ kind, rtpParameters });
      stream.producers.push(producer);
      console.log("🎥 Producer created:", producer.id);

      io.emit("newProducer", { producerId: producer.id, streamId });

      producer.on("transportclose", () => {
        producer.close();
        stream.producers = stream.producers.filter((p) => p.id !== producer.id);
      });

      producer.on("close", () => {
        console.log("❌ Producer closed:", producer.id);
        stream.producers = stream.producers.filter((p) => p.id !== producer.id);
      });

      callback({ id: producer.id });
    }
  );

  socket.on(
    "consume",
    async (
      { producerId, transportId, rtpCapabilities },
      streamId,
      callback
    ) => {
      try {
        const stream = streams.find((x) => x.id === streamId);
        const transport = stream.transports.find((t) => t.id === transportId);

        if (producerId) {
          if (!router.canConsume({ producerId: producerId, rtpCapabilities })) {
            throw new Error("Cannot consume");
          }

          const consumer = await transport.consume({
            producerId,
            rtpCapabilities,
            paused: false,
          });

          consumer.on("transportclose", () => consumer.close());
          consumer.on("producerclose", () => consumer.close());

          callback({
            id: consumer.id,
            producerId,
            kind: consumer.kind,
            rtpParameters: consumer.rtpParameters,
          });
        } else {
          const producers = streams.find((x) => x.id === streamId)?.producers;
          producers.forEach((producer) => {
            if (
              router.canConsume({ producerId: producer.id, rtpCapabilities })
            ) {
              socket.emit("newProducer", {
                producerId: producer.id,
                streamId,
              });
            }
          });
        }
      } catch (err) {
        console.error("Consume error:", err);
        callback({ error: err.message });
      }
    }
  );

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

server.listen(4000, () => {
  console.log("Socket server running at http://localhost:4000");
});
