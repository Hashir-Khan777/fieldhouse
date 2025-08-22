const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
require("dotenv").config();

const activeStreams = [];
const broadcasters = [];
const watchers = {};

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("WebSocket Server is running");
});

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", async (socket) => {
  await mongoose.connect(process.env.MONGODB_URI);
  const User =
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
        },
        { strict: false, timestamps: true }
      ),
      "users"
    );
  const Stream =
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
  socket.on("client-ready", () => {
    socket.emit("new-streams", activeStreams);
    socket.emit("new-watchers", watchers);
  });

  socket.on("broadcaster", async (streamerId) => {
    console.log("broadcaster stream", streamerId);
    const details = await Stream.findOne({
      streamer: streamerId,
    }).populate("streamer");
    console.log("broadcaster details", details);
    broadcasters.push({ ...details?._doc, socket: socket.id });
    activeStreams.push({ ...details?._doc, socket: socket.id });
    socket.join(streamerId);
    io.to(socket.id).emit("broadcasting-details", details);
    io.emit("active-streams", activeStreams);
  });

  socket.on("watcher", async (streamId) => {
    const details = await Stream.findOne({
      streamer: streamId,
    }).populate("streamer");
    console.log("stream", details);
    const broadcaster = broadcasters.find((x) => x.streamer?._id == streamId);
    console.log(broadcaster, "broadcaster");
    console.log(streamId, "streamId");
    if (watchers[streamId] && watchers[streamId]?.length >= 0) {
      watchers[streamId] = [...watchers[streamId], socket.id];
    } else {
      watchers[streamId] = [socket.id];
    }
    if (broadcaster?._id) {
      console.log(broadcaster?._id, "broadcasterId");
      console.log(broadcaster?.socket, "broadcaster Socket");
      socket.streamId = streamId;
      socket.join(streamId);
      io.to(broadcaster?.socket).emit("watcher", socket.id);
      io.to(socket.id).emit("broadcasting-details", details);
    }
    console.log(watchers, "watchers in add");
    io.emit("active-watchers", watchers);
  });

  socket.on("offer", (id, message, streamId) => {
    io.to(id).emit("offer", socket.id, message, streamId);
  });

  socket.on("answer", (id, message, streamId) => {
    io.to(id).emit("answer", socket.id, message, streamId);
  });

  socket.on("candidate", (targetId, candidate) => {
    console.log("🔁 Relaying ICE candidate to", targetId);
    io.to(targetId).emit("candidate", socket.id, candidate);
  });

  socket.on("disconnect", () => {
    const streamId = socket.streamId;
    const index = broadcasters.findIndex((b) => b.socket === socket.id);
    if (streamId && watchers[streamId]) {
      console.log(streamId, watchers[streamId], "dissconnect watcher");
      watchers[streamId] = watchers[streamId].filter((id) => id !== socket.id);
      io.emit("active-watchers", watchers);
    }
    if (index !== -1) {
      console.log("🛑 Broadcaster disconnected:", socket.id);
      broadcasters.splice(index, 1);
      activeStreams.splice(index, 1);
      io.emit("active-streams", activeStreams);
    }
    console.log("client dissconected");
  });
});

server.listen(4000, () => {
  console.log("Socket server running at http://localhost:4000");
});
