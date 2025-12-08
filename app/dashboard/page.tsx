"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  LineChart,
  Users,
  Eye,
  Clock,
  Upload,
  Edit,
  Trash2,
} from "lucide-react";
import { useAuth } from "@/components/auth-provider";
import { useToast } from "@/hooks/use-toast";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ImageActions, StreamActions, Auth } from "@/store/actions";

export default function DashboardPage() {
  const router = useRouter();
  const dispatch: any = useDispatch();

  const { user } = useSelector((x: any) => x.AuthReducer);
  const { image } = useSelector((x: any) => x.ImageReducer);
  const { stream, joinStream } = useSelector((x: any) => x.StreamReducer);

  const [streamThubnail, setStreamThumbnail] = useState("");
  const [banner, setBanner] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [imageType, setImageType] = useState("");
  const [streamTitle, setStreamTitle] = useState("");
  const [userProfile, setUserProfile] = useState<any>({});
  const [streamId, setStreamId] = useState("");
  const [streamCategory, setStreamCategory] = useState("");
  const [streamDescription, setStreamDescription] = useState("");
  // const [isPublic, setIsPublic] = useState(true)

  // Mock analytics data
  const analyticsData = {
    viewers: {
      current: 1250,
      previous: 980,
      change: 27.6,
    },
    followers: {
      current: 15420,
      previous: 14850,
      change: 3.8,
    },
    watchTime: {
      current: 45600,
      previous: 42300,
      change: 7.8,
    },
    subscribers: {
      current: 520,
      previous: 480,
      change: 8.3,
    },
  };

  // Mock past streams data
  const pastStreams = [
    {
      id: "stream-1",
      title: "Championship Finals - Team Alpha vs Team Omega",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      date: "2 days ago",
      duration: "2:45:30",
      views: 12500,
      category: "Basketball",
    },
    {
      id: "stream-2",
      title: "Semifinals - Team Alpha vs Team Beta",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      date: "1 week ago",
      duration: "2:15:30",
      views: 8300,
      category: "Basketball",
    },
    {
      id: "stream-3",
      title: "Quarterfinals - Team Alpha vs Team Gamma",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      date: "2 weeks ago",
      duration: "1:45:12",
      views: 6700,
      category: "Basketball",
    },
  ];

  // Mock scheduled streams data
  const scheduledStreams = [
    {
      id: "schedule-1",
      title: "Semifinals Recap",
      date: "Tomorrow at 7:00 PM",
      description:
        "Breaking down the semifinals and looking ahead to the championship.",
      category: "Talk Show",
    },
    {
      id: "schedule-2",
      title: "Coach Interview",
      date: "Friday at 6:30 PM",
      description:
        "Exclusive interview with the head coach discussing strategy for the finals.",
      category: "Interview",
    },
    {
      id: "schedule-3",
      title: "Season Preview",
      date: "Next Monday at 8:00 PM",
      description:
        "Looking ahead to the upcoming season and previewing the top teams.",
      category: "Analysis",
    },
  ];

  const handleUpload: any = async (e: any, folder: any, imageType: any) => {
    setImageType(imageType);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      dispatch(
        ImageActions.uploadImage({ image: reader.result, folder: folder })
      );
    };
  };

  const handleStartStream = (e: React.FormEvent) => {
    e.preventDefault();

    if (!streamTitle || !streamCategory || !streamThubnail) {
      toast.error("Please fill in all required fields");
      return;
    }
    dispatch(
      StreamActions.addStream({
        streamer: user?._id,
        title: streamTitle,
        category: streamCategory,
        thumbnail: streamThubnail,
        description: streamDescription,
      })
    );
  };

  const handleJoinStream = (e: React.FormEvent) => {
    e?.preventDefault();
    if (!streamId) {
      toast.error("Please fill in all required fields");
      return;
    }
    dispatch(StreamActions.updateStream({ joinee: user?._id, id: streamId }));
  };

  const handleScheduleStream = (e: React.FormEvent) => {
    e.preventDefault();

    if (!streamTitle || !streamCategory) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.error("Your stream has been scheduled");

    setStreamTitle("");
    setStreamCategory("");
    setStreamDescription("");
  };

  const updateUser = (e: any) => {
    e.preventDefault();
    dispatch(Auth.updateUser({ ...userProfile, banner, profilePic }));
  };

  useEffect(() => {
    if (image) {
      if (imageType === "banner") {
        setBanner(image?.secure_url);
      }
      if (imageType === "thumbnail") {
        setStreamThumbnail(image?.secure_url);
      }
      if (imageType === "profile") {
        setProfilePic(image?.secure_url);
      }
    }
  }, [image]);

  useEffect(() => {
    if (stream?._id) {
      router.push(`/stream/${user?._id}/${stream?._id}`);
    }
  }, [stream]);

  useEffect(() => {
    if (user) {
      setBanner(user?.banner);
      setProfilePic(user?.profilePic);
      setUserProfile({ ...user });
    }
  }, [user]);

  useEffect(() => {
    if (joinStream?._id) {
      router.push(`/stream/${joinStream?.streamer?._id}/${joinStream?._id}`);
    }
  }, [joinStream]);

  if (!user || !user?.verified) {
    return (
      <div className="container px-4 py-12 md:px-6 flex flex-col items-center justify-center min-h-[calc(100vh-300px)]">
        <h1 className="text-2xl font-bold text-fhsb-cream mb-4">
          Creator Dashboard
        </h1>
        <p className="text-muted-foreground text-center max-w-md mb-8">
          Please sign in to access your creator dashboard.
        </p>
        <div className="flex gap-4">
          <Link href="/login">
            <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">
              Sign In
            </Button>
          </Link>
          <Link href="/register">
            <Button
              variant="outline"
              className="border-fhsb-green/30 text-fhsb-cream hover:bg-fhsb-green hover:text-black"
            >
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-6 md:px-6 space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-fhsb-cream">
            Creator Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your streams, content, and channel settings
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">
            Go Live
          </Button>
          <Link href={`/channel/${user.username}`}>
            <Button
              variant="outline"
              className="border-fhsb-green/30 text-fhsb-cream hover:bg-fhsb-green hover:text-black"
            >
              View Channel
            </Button>
          </Link>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card border-fhsb-green/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-fhsb-cream">
              Total Viewers
            </CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-fhsb-cream">
              {analyticsData.viewers.current.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              <span
                className={
                  analyticsData.viewers.change >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {analyticsData.viewers.change >= 0 ? "+" : ""}
                {analyticsData.viewers.change}%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-fhsb-green/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-fhsb-cream">
              Followers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-fhsb-cream">
              {analyticsData.followers.current.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              <span
                className={
                  analyticsData.followers.change >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {analyticsData.followers.change >= 0 ? "+" : ""}
                {analyticsData.followers.change}%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-fhsb-green/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-fhsb-cream">
              Watch Time (hours)
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-fhsb-cream">
              {Math.floor(
                analyticsData.watchTime.current / 60
              ).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              <span
                className={
                  analyticsData.watchTime.change >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {analyticsData.watchTime.change >= 0 ? "+" : ""}
                {analyticsData.watchTime.change}%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-fhsb-green/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-fhsb-cream">
              Subscribers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-fhsb-cream">
              {analyticsData.subscribers.current.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              <span
                className={
                  analyticsData.subscribers.change >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {analyticsData.subscribers.change >= 0 ? "+" : ""}
                {analyticsData.subscribers.change}%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Dashboard Tabs */}
      <Tabs defaultValue="stream">
        <TabsList className="bg-muted/10 border border-fhsb-green/20">
          <TabsTrigger
            value="stream"
            className="data-[state=active]:bg-fhsb-green data-[state=active]:text-black"
          >
            Stream
          </TabsTrigger>
          <TabsTrigger
            value="content"
            className="data-[state=active]:bg-fhsb-green data-[state=active]:text-black"
          >
            Content
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-fhsb-green data-[state=active]:text-black"
          >
            Analytics
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="data-[state=active]:bg-fhsb-green data-[state=active]:text-black"
          >
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="stream" className="mt-6 space-y-6">
          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <CardTitle className="text-fhsb-cream">Join a Stream</CardTitle>
              <CardDescription>Stream with your freinds</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleJoinStream} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="schedule-title">Stream Id</Label>
                  <Input
                    id="schedule-title"
                    placeholder="Enter stream id"
                    value={streamId}
                    onChange={(e) => setStreamId(e.target.value)}
                    required
                    className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-fhsb-green text-black hover:bg-fhsb-green/90"
                >
                  Join Stream
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <CardTitle className="text-fhsb-cream">Start Streaming</CardTitle>
              <CardDescription>
                Configure your stream settings and go live
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleStartStream} className="space-y-4">
                <div className="relative aspect-video overflow-hidden">
                  {streamThubnail ? (
                    <Image
                      src={streamThubnail}
                      alt={"title"}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <Image
                        src={"/placeholder.svg"}
                        alt={"title"}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 cursor-pointer"
                      />
                      <input
                        type="file"
                        onChange={(e) =>
                          handleUpload(e, "thumbnails", "thumbnail")
                        }
                        className="absolute cursor-pointer"
                        style={{ width: "100%", height: "100%", opacity: 0 }}
                      />
                    </>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stream-title">Stream Title</Label>
                  <Input
                    id="stream-title"
                    placeholder="Enter your stream title"
                    value={streamTitle}
                    onChange={(e) => setStreamTitle(e.target.value)}
                    required
                    className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stream-category">Category</Label>
                  <Select
                    value={streamCategory}
                    onValueChange={setStreamCategory}
                    required
                  >
                    <SelectTrigger className="bg-muted/10 border-fhsb-green/30 focus:ring-fhsb-green/50">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-fhsb-green/30">
                      <SelectItem value="basketball">Basketball</SelectItem>
                      <SelectItem value="football">Football</SelectItem>
                      <SelectItem value="baseball">Baseball</SelectItem>
                      <SelectItem value="soccer">Soccer</SelectItem>
                      <SelectItem value="hockey">Hockey</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stream-description">
                    Description (Optional)
                  </Label>
                  <Textarea
                    id="stream-description"
                    placeholder="Enter a description for your stream"
                    value={streamDescription}
                    onChange={(e) => setStreamDescription(e.target.value)}
                    className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                  />
                </div>

                {/* <div className="flex items-center space-x-2">
                  <Switch
                    id="public"
                    checked={isPublic}
                    onCheckedChange={setIsPublic}
                    className="data-[state=checked]:bg-fhsb-green"
                  />
                  <Label htmlFor="public">Public Stream</Label>
                </div> */}

                <Button
                  type="submit"
                  className="bg-fhsb-green text-black hover:bg-fhsb-green/90"
                >
                  Start Streaming
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <CardTitle className="text-fhsb-cream">
                Schedule a Stream
              </CardTitle>
              <CardDescription>Plan your upcoming streams</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleScheduleStream} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="schedule-title">Stream Title</Label>
                  <Input
                    id="schedule-title"
                    placeholder="Enter your stream title"
                    value={streamTitle}
                    onChange={(e) => setStreamTitle(e.target.value)}
                    required
                    className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="schedule-date">Date</Label>
                    <Input
                      id="schedule-date"
                      type="date"
                      required
                      className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="schedule-time">Time</Label>
                    <Input
                      id="schedule-time"
                      type="time"
                      required
                      className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schedule-category">Category</Label>
                  <Select
                    value={streamCategory}
                    onValueChange={setStreamCategory}
                    required
                  >
                    <SelectTrigger className="bg-muted/10 border-fhsb-green/30 focus:ring-fhsb-green/50">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-fhsb-green/30">
                      <SelectItem value="basketball">Basketball</SelectItem>
                      <SelectItem value="football">Football</SelectItem>
                      <SelectItem value="baseball">Baseball</SelectItem>
                      <SelectItem value="soccer">Soccer</SelectItem>
                      <SelectItem value="hockey">Hockey</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schedule-description">
                    Description (Optional)
                  </Label>
                  <Textarea
                    id="schedule-description"
                    placeholder="Enter a description for your stream"
                    value={streamDescription}
                    onChange={(e) => setStreamDescription(e.target.value)}
                    className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-fhsb-green text-black hover:bg-fhsb-green/90"
                >
                  Schedule Stream
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <CardTitle className="text-fhsb-cream">
                Scheduled Streams
              </CardTitle>
              <CardDescription>Your upcoming scheduled streams</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledStreams.map((stream) => (
                  <div
                    key={stream.id}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-fhsb-green/20 bg-card/50"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-fhsb-cream">
                        {stream.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {stream.date}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stream.category}
                      </p>
                      <p className="text-sm text-fhsb-cream mt-2">
                        {stream.description}
                      </p>
                    </div>
                    <div className="flex sm:flex-col gap-2 sm:justify-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-fhsb-green/30 text-fhsb-cream hover:bg-transparent"
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-red-500/30 text-red-500 hover:bg-red-500/10"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="mt-6 space-y-6">
          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <CardTitle className="text-fhsb-cream">Past Streams</CardTitle>
              <CardDescription>
                Manage your previous streams and videos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pastStreams.map((stream) => (
                  <div
                    key={stream.id}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-fhsb-green/20 bg-card/50"
                  >
                    <div className="relative aspect-video w-full sm:w-40 flex-shrink-0 overflow-hidden rounded">
                      <Image
                        src={stream.thumbnail || "/placeholder.svg"}
                        alt={stream.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
                        {stream.duration}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-fhsb-cream">
                        {stream.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {stream.date}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stream.category}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stream.views.toLocaleString()} views
                      </p>
                    </div>
                    <div className="flex sm:flex-col gap-2 sm:justify-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-fhsb-green/30 text-fhsb-cream hover:bg-transparent"
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-red-500/30 text-red-500 hover:bg-red-500/10"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <CardTitle className="text-fhsb-cream">Upload Video</CardTitle>
              <CardDescription>
                Upload pre-recorded videos to your channel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="border-2 border-dashed border-fhsb-green/30 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Drag and drop your video file here, or click to browse
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-fhsb-green/30 text-fhsb-cream hover:bg-fhsb-green hover:text-black"
                  >
                    Select File
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="video-title">Video Title</Label>
                  <Input
                    id="video-title"
                    placeholder="Enter your video title"
                    className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="video-category">Category</Label>
                  <Select>
                    <SelectTrigger className="bg-muted/10 border-fhsb-green/30 focus:ring-fhsb-green/50">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-fhsb-green/30">
                      <SelectItem value="basketball">Basketball</SelectItem>
                      <SelectItem value="football">Football</SelectItem>
                      <SelectItem value="baseball">Baseball</SelectItem>
                      <SelectItem value="soccer">Soccer</SelectItem>
                      <SelectItem value="hockey">Hockey</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="video-description">
                    Description (Optional)
                  </Label>
                  <Textarea
                    id="video-description"
                    placeholder="Enter a description for your video"
                    className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-fhsb-green text-black hover:bg-fhsb-green/90"
                >
                  Upload Video
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6 space-y-6">
          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <CardTitle className="text-fhsb-cream">
                Viewer Analytics
              </CardTitle>
              <CardDescription>
                Track your audience growth and engagement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border border-fhsb-green/20 rounded-lg p-6">
                <LineChart className="h-16 w-16 text-muted-foreground" />
                <p className="ml-4 text-muted-foreground">
                  Viewer analytics chart would appear here
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <CardTitle className="text-fhsb-cream">
                Content Performance
              </CardTitle>
              <CardDescription>
                See how your streams and videos are performing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border border-fhsb-green/20 rounded-lg p-6">
                <BarChart className="h-16 w-16 text-muted-foreground" />
                <p className="ml-4 text-muted-foreground">
                  Content performance chart would appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="mt-6 space-y-6">
          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <CardTitle className="text-fhsb-cream">
                Profile Settings
              </CardTitle>
              <CardDescription>Update your profile information</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="relative aspect-video overflow-hidden">
                  {banner ? (
                    <Image
                      src={banner}
                      alt={"title"}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <Image
                        src={"/placeholder.svg"}
                        alt={"title"}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 cursor-pointer"
                      />
                      <input
                        type="file"
                        onChange={(e) => handleUpload(e, "banners", "banner")}
                        className="absolute cursor-pointer"
                        style={{ width: "100%", height: "100%", opacity: 0 }}
                      />
                    </>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  {profilePic ? (
                    <Avatar className="h-20 w-20 border-2 border-fhsb-green/30">
                      <AvatarImage src={profilePic} alt={user.username} />
                      <AvatarFallback className="bg-muted text-fhsb-cream text-xl">
                        {user.username.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="relative">
                      <Avatar className="h-20 w-20 border-2 border-fhsb-green/30">
                        <AvatarImage src={profilePic} alt={user.username} />
                        <AvatarFallback className="bg-muted text-fhsb-cream text-xl">
                          {user.username.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <input
                        type="file"
                        onChange={(e) =>
                          handleUpload(e, "profilePics", "profile")
                        }
                        className="absolute cursor-pointer"
                        style={{
                          width: "100%",
                          height: "100%",
                          opacity: 0,
                          top: 0,
                        }}
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload a new profile picture
                    </p>
                    <div className="flex gap-2">
                      {/* <Button
                        variant="outline"
                        className="border-fhsb-green/30 text-fhsb-cream hover:bg-fhsb-green hover:text-black"
                      >
                        Upload
                      </Button> */}
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          setProfilePic("");
                        }}
                        variant="outline"
                        className="border-red-500/30 text-red-500 hover:bg-red-500/10"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="display-name">Display Name</Label>
                  <Input
                    id="display-name"
                    onChange={(e) =>
                      setUserProfile({
                        ...userProfile,
                        username: e.target.value,
                      })
                    }
                    defaultValue={userProfile.username}
                    className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    onChange={(e) =>
                      setUserProfile({ ...userProfile, email: e.target.value })
                    }
                    defaultValue={userProfile.email}
                    className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                  />
                </div>

                {user?.documentVerified ? (
                  <div className="space-y-2">
                    <Label htmlFor="display-name">Adult Content</Label>
                    <br />
                    <Switch
                      id="display-name"
                      onCheckedChange={(e) =>
                        setUserProfile({
                          ...userProfile,
                          adultContent: e,
                        })
                      }
                      checked={userProfile.adultContent}
                      className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                    />
                  </div>
                ) : null}

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    onChange={(e) =>
                      setUserProfile({ ...userProfile, bio: e.target.value })
                    }
                    defaultValue={userProfile.bio}
                    placeholder="Tell viewers about yourself"
                    className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                  />
                </div>

                <Button
                  onClick={updateUser}
                  type="submit"
                  className="bg-fhsb-green text-black hover:bg-fhsb-green/90"
                >
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <CardTitle className="text-fhsb-cream">Stream Settings</CardTitle>
              <CardDescription>
                Configure your streaming preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="stream-key">Stream Key</Label>
                  <div className="flex">
                    <Input
                      id="stream-key"
                      type="password"
                      value="••••••••••••••••••••••"
                      readOnly
                      className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                    />
                    <Button
                      variant="outline"
                      className="ml-2 border-fhsb-green/30 text-fhsb-cream hover:bg-fhsb-green hover:text-black"
                    >
                      Show
                    </Button>
                    <Button
                      variant="outline"
                      className="ml-2 border-fhsb-green/30 text-fhsb-cream hover:bg-fhsb-green hover:text-black"
                    >
                      Reset
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your stream key is sensitive information. Do not share it
                    with anyone.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="server-url">Server URL</Label>
                  <Input
                    id="server-url"
                    value="rtmp://stream.fieldhousestadium.beta/live"
                    readOnly
                    className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                  />
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-sm font-medium text-fhsb-cream">
                    Stream Quality
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="video-quality">Video Quality</Label>
                    <Select defaultValue="1080p">
                      <SelectTrigger className="bg-muted/10 border-fhsb-green/30 focus:ring-fhsb-green/50">
                        <SelectValue placeholder="Select quality" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-fhsb-green/30">
                        <SelectItem value="1080p">1080p (Full HD)</SelectItem>
                        <SelectItem value="720p">720p (HD)</SelectItem>
                        <SelectItem value="480p">480p (SD)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bitrate">Bitrate (kbps)</Label>
                    <Input
                      id="bitrate"
                      type="number"
                      defaultValue="4000"
                      className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-sm font-medium text-fhsb-cream">
                    Privacy Settings
                  </h3>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="auto-record"
                      defaultChecked
                      className="data-[state=checked]:bg-fhsb-green"
                    />
                    <Label htmlFor="auto-record">
                      Automatically record streams
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="chat-delay"
                      className="data-[state=checked]:bg-fhsb-green"
                    />
                    <Label htmlFor="chat-delay">
                      Enable chat delay (5 seconds)
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="subscribers-only"
                      className="data-[state=checked]:bg-fhsb-green"
                    />
                    <Label htmlFor="subscribers-only">
                      Subscribers-only chat
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="bg-fhsb-green text-black hover:bg-fhsb-green/90"
                >
                  Save Settings
                </Button>
              </form>
            </CardContent>
          </Card> */}

          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <CardTitle className="text-fhsb-cream">
                Account Security
              </CardTitle>
              <CardDescription>
                Manage your account security settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="bg-fhsb-green text-black hover:bg-fhsb-green/90"
                  >
                    Change Password
                  </Button>
                </div>

                {/* <div className="pt-4 border-t border-fhsb-green/20">
                  <h3 className="text-sm font-medium text-fhsb-cream mb-4">
                    Two-Factor Authentication
                  </h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-fhsb-cream">
                        Two-factor authentication is disabled
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-fhsb-green/30 text-fhsb-cream hover:bg-fhsb-green hover:text-black"
                    >
                      Enable
                    </Button>
                  </div>
                </div> */}
              </form>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <CardTitle className="text-fhsb-cream">Logout</CardTitle>
              <CardDescription>
                Logout from your account on this device
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => {
                  dispatch(Auth.logout());
                  router.replace("/login");
                }}
                type="submit"
                className="bg-fhsb-green text-black hover:bg-fhsb-green/90"
              >
                Logout
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
