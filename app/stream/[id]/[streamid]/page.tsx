"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Share2, Flag } from "lucide-react";
import ChatInterface from "@/components/chat-interface";
import StreamCard from "@/components/stream-card";
import { useSocket } from "@/hooks/use-socket";
import { useSelector, useDispatch } from "react-redux";
import { StreamActions } from "@/store/actions";
import * as mediasoupClient from "mediasoup-client";

let interval: any;
let device: any;
export default function StreamPage() {
  const { id, streamid }: any = useParams();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);
  const [watchers, setWatchers] = useState<any>({});
  const [streams, setStreams] = useState<any>([]);
  const [currentStream, setCurrentStream] = useState<any>(0);
  const [time, setTime] = useState<any>();
  const { socket, connected } = useSocket();

  const dispatch: any = useDispatch();

  const { user } = useSelector((x: any) => x.AuthReducer);
  const { stream } = useSelector((x: any) => x.StreamReducer);

  const recommendedStreams = [
    {
      id: "rec-1",
      title: "Regional Qualifiers - East Division",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      streamer: {
        username: "SportsCenter",
        avatar: "/placeholder.svg?height=200&width=200",
      },
      category: "Basketball",
      viewerCount: 8754,
      isLive: true,
    },
    {
      id: "rec-2",
      title: "Weekly Tournament Series - Round 4",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      streamer: {
        username: "GameDay",
        avatar: "/placeholder.svg?height=200&width=200",
      },
      category: "Football",
      viewerCount: 6231,
      isLive: true,
    },
    {
      id: "rec-3",
      title: "College Showcase - Top Prospects",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      streamer: {
        username: "RecruitingLive",
        avatar: "/placeholder.svg?height=200&width=200",
      },
      category: "Baseball",
      viewerCount: 4102,
      isLive: true,
    },
  ];

  const toggleFollow = () => {
    setIsFollowing((prev) => !prev);
  };

  const toggleSubscribe = () => {
    setIsSubscribed((prev) => !prev);
  };

  const formatViewerCount = (count: number) => {
    return count.toLocaleString();
  };

  const formatStreamTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 60) {
      setTime(`${diffMins} min`);
    } else {
      const hours = Math.floor(diffMins / 60);
      const mins = diffMins % 60;
      setTime(`${hours}h ${mins}m`);
    }
  };

  async function initDevice(socket: any) {
    if (device && device.loaded) return;

    device = new mediasoupClient.Device();

    const rtpCapabilities = await new Promise((resolve) => {
      socket.emit("getRtpCapabilities", resolve);
    });

    await device.load({ routerRtpCapabilities: rtpCapabilities });
    console.log("Device loaded ✅");
  }

  const startStreaming = async () => {
    await initDevice(socket);

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    const sendTransportParams = await new Promise((resolve) => {
      socket.emit("createTransport", streamid, resolve);
    });

    const sendTransport = device.createSendTransport(sendTransportParams);

    sendTransport.on(
      "connect",
      ({ dtlsParameters }: any, callback: any, errback: any) => {
        socket.emit(
          "connectTransport",
          { transportId: sendTransport.id, dtlsParameters },
          streamid,
          callback
        );
      }
    );

    sendTransport.on(
      "produce",
      ({ kind, rtpParameters }: any, callback: any, errback: any) => {
        socket.emit(
          "produce",
          { transportId: sendTransport.id, kind, rtpParameters },
          streamid,
          ({ id }: any) => callback({ id })
        );
      }
    );

    stream.getTracks().forEach(async (track) => {
      await sendTransport.produce({ track });
    });

    setStreams((prev: any) => [...prev, { hostId: user?._id, stream }]);
  };

  const viewerStream = async (producerId: any) => {
    console.log("Viewing stream with producerId:", producerId);
    await initDevice(socket);

    const recvTransportParams = await new Promise((resolve) => {
      socket.emit("createTransport", streamid, resolve);
    });

    const recvTransport = device.createRecvTransport(recvTransportParams);

    recvTransport.on(
      "connect",
      ({ dtlsParameters }: any, callback: any, errback: any) => {
        socket.emit(
          "connectTransport",
          { transportId: recvTransport.id, dtlsParameters },
          streamid,
          callback
        );
      }
    );

    const consumerParams = await new Promise((resolve) => {
      socket.emit(
        "consume",
        {
          transportId: recvTransport.id,
          producerId,
          rtpCapabilities: device.rtpCapabilities,
        },
        streamid,
        resolve
      );
    });

    const consumer = await recvTransport.consume(consumerParams);

    if (consumer.track && consumer.track.readyState === "live") {
      setStreams((prev: any) => {
        const existing = prev.find((s: any) => s.hostId === user?._id);

        if (existing) {
          existing.stream.addTrack(consumer.track);
          return [...prev];
        } else {
          const newStream = new MediaStream([consumer.track]);
          return [...prev, { hostId: user?._id, stream: newStream }];
        }
      });
    }
  };

  useEffect(() => {
    if (connected) {
      socket.on("newProducer", ({ producerId, streamId }: any) => {
        if (streamId !== streamid) return;
        console.log("New producer with producerId:", producerId);
        viewerStream(producerId);
      });
    }
  }, [connected]);

  useEffect(() => {
    if (connected && user?.verified && id === user?._id) {
      startStreaming();
    } else if (connected) {
      viewerStream(null);
    }
  }, [connected, user]);

  useEffect(() => {
    if (stream?._id && user?._id && user?.verified) {
      if (stream.joinees.includes(user?._id)) {
        startStreaming();
      }
    }
  }, [stream, user]);

  useEffect(() => {
    if (stream?.createdAt) {
      interval = setInterval(() => {
        formatStreamTime(new Date(stream.createdAt));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [stream]);

  useEffect(() => {
    dispatch(StreamActions.getStream({ id: streamid }));
  }, [dispatch]);

  return (
    <div className="container px-4 py-6 md:px-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
        <div className="space-y-4">
          {/* Video Player */}
          {user?.verified && id === user?._id ? (
            <div className="mb-3">Join ID: {streamid}</div>
          ) : null}
          <div>
            <div className="video-player-container rounded-lg border border-fhsb-green/20 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-black">
                {streams.length <= 0 ? (
                  <Image
                    src={stream?.thumbnail || "/placeholder.svg"}
                    alt={stream?.title}
                    width={1280}
                    height={720}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <video
                    ref={(el: any) => {
                      if (el) el.srcObject = streams[currentStream]?.stream;
                    }}
                    autoPlay
                    playsInline
                    controls
                    width={1280}
                    height={720}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </div>
            <div className="flex gap-4 items-center mt-4">
              {streams
                .filter((_: any, index: any) => index !== currentStream)
                .map((stream: any, index: any) => (
                  <video
                    key={index}
                    ref={(el: any) => {
                      if (el) el.srcObject = stream?.stream;
                    }}
                    autoPlay
                    playsInline
                    controls
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                ))}
            </div>
          </div>

          {/* Stream Info */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge className="bg-red-600 hover:bg-red-700">LIVE</Badge>
                  <span className="text-sm text-muted-foreground">
                    {stream ? watchers[id]?.length : 0} viewers • Started{" "}
                    {console.log(
                      stream,
                      new Date(stream?.createdAt),
                      "stream.startedAt"
                    )}
                    {stream ? time : "0 min"} ago
                  </span>
                </div>
                <h1 className="text-xl font-bold text-fhsb-cream">
                  {stream?.title}
                </h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Link
                    href={`/categories/${stream?.category?.toLowerCase()}`}
                    className="hover:text-fhsb-green"
                  >
                    {stream?.category}
                  </Link>
                </div>
                <p className="text-md text-fhsb-cream">{stream?.description}</p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-fhsb-green/30 text-fhsb-cream hover:bg-transparent"
                >
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-fhsb-green/30 text-fhsb-cream hover:bg-transparent"
                >
                  <Flag className="h-4 w-4" />
                  <span className="sr-only">Report</span>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-fhsb-green/20">
              <div className="flex items-center gap-4">
                <Link href={`/channel/${stream?.streamer?.username}`}>
                  <Avatar className="h-12 w-12 border border-fhsb-green/30">
                    <AvatarImage
                      src={stream?.streamer?.avatar}
                      alt={stream?.streamer?.username}
                    />
                    <AvatarFallback className="bg-muted text-fhsb-cream">
                      {stream?.streamer?.username
                        ?.substring(0, 2)
                        ?.toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Link>
                <div>
                  <Link
                    href={`/channel/${stream?.streamer?.username}`}
                    className="font-medium text-fhsb-cream hover:text-fhsb-green"
                  >
                    {stream?.streamer?.username}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {stream?.streamer?.followers?.toLocaleString() || 0}{" "}
                    followers
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={isFollowing ? "default" : "outline"}
                  className={
                    isFollowing
                      ? "bg-fhsb-green text-black hover:bg-fhsb-green/90"
                      : "border-fhsb-green/30 text-fhsb-cream hover:bg-fhsb-green hover:text-black"
                  }
                  onClick={toggleFollow}
                >
                  {isFollowing ? "Following" : "Follow"}
                </Button>
                <Button
                  variant={isSubscribed ? "default" : "outline"}
                  className={
                    isSubscribed
                      ? "bg-fhsb-green text-black hover:bg-fhsb-green/90"
                      : "border-fhsb-green/30 text-fhsb-cream hover:bg-fhsb-green hover:text-black"
                  }
                  onClick={toggleSubscribe}
                >
                  {isSubscribed ? "Subscribed" : "Subscribe"}
                </Button>
              </div>
            </div>

            <Tabs defaultValue="about">
              <TabsList className="bg-muted/10 border border-fhsb-green/20">
                <TabsTrigger
                  value="about"
                  className="data-[state=active]:bg-fhsb-green data-[state=active]:text-black"
                >
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="schedule"
                  className="data-[state=active]:bg-fhsb-green data-[state=active]:text-black"
                >
                  Schedule
                </TabsTrigger>
                <TabsTrigger
                  value="videos"
                  className="data-[state=active]:bg-fhsb-green data-[state=active]:text-black"
                >
                  Videos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-4">
                <p className="text-fhsb-cream">{stream?.description}</p>
              </TabsContent>

              <TabsContent value="schedule" className="mt-4">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-fhsb-green/20 bg-card/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-fhsb-cream">
                          Upcoming: Semifinals Recap
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Tomorrow at 7:00 PM
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="border-fhsb-green/30 text-fhsb-cream hover:bg-fhsb-green hover:text-black"
                      >
                        Set Reminder
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-fhsb-green/20 bg-card/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-fhsb-cream">
                          Upcoming: Coach Interview
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Friday at 6:30 PM
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="border-fhsb-green/30 text-fhsb-cream hover:bg-fhsb-green hover:text-black"
                      >
                        Set Reminder
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-fhsb-green/20 bg-card/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-fhsb-cream">
                          Upcoming: Season Preview
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Next Monday at 8:00 PM
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="border-fhsb-green/30 text-fhsb-cream hover:bg-fhsb-green hover:text-black"
                      >
                        Set Reminder
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="videos" className="mt-4">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-fhsb-green/20 bg-card/50">
                    <div className="flex gap-4">
                      <div className="relative aspect-video w-40 flex-shrink-0 overflow-hidden rounded">
                        <Image
                          src="/placeholder.svg?height=720&width=1280"
                          alt="Video thumbnail"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
                          2:15:30
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-fhsb-cream">
                          Semifinals - Team Alpha vs Team Beta
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          2 days ago • 12.5K views
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-fhsb-green/20 bg-card/50">
                    <div className="flex gap-4">
                      <div className="relative aspect-video w-40 flex-shrink-0 overflow-hidden rounded">
                        <Image
                          src="/placeholder.svg?height=720&width=1280"
                          alt="Video thumbnail"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
                          1:45:12
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-fhsb-cream">
                          Quarterfinals - Team Alpha vs Team Gamma
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          1 week ago • 8.3K views
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-fhsb-green/20 bg-card/50">
                    <div className="flex gap-4">
                      <div className="relative aspect-video w-40 flex-shrink-0 overflow-hidden rounded">
                        <Image
                          src="/placeholder.svg?height=720&width=1280"
                          alt="Video thumbnail"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
                          2:05:45
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-fhsb-cream">
                          Round of 16 - Team Alpha vs Team Delta
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          2 weeks ago • 6.7K views
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Chat */}
        <div className="h-full">
          <ChatInterface streamId={id as string} />
        </div>
      </div>

      {/* Recommended Streams */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-fhsb-cream">
          Recommended Streams
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedStreams.map((stream) => (
            <StreamCard key={stream.id} {...stream} />
          ))}
        </div>
      </div>
    </div>
  );
}
