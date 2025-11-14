"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import StreamCard from "@/components/stream-card";
import CategoryCard from "@/components/category-card";
import { useSocket } from "@/hooks/use-socket";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const { socket, connected } = useSocket();
  const [streams, setStreams] = useState<any>([]);
  const [watchers, setWatchers] = useState<any>({});

  const { user } = useSelector((x: any) => x.AuthReducer);

  const categories = [
    { name: "Esports", count: 1250, icon: "🎮" },
    { name: "Sports", count: 890, icon: "⚽" },
    { name: "Gaming", count: 2100, icon: "🕹️" },
    { name: "Entertainment", count: 650, icon: "🎭" },
  ];

  // // Mock featured stream data
  // const featuredStream = {
  //   id: "featured-1",
  //   title: "Championship Finals - Team Alpha vs Team Omega",
  //   thumbnail: "/placeholder.svg?height=720&width=1280",
  //   streamer: {
  //     username: "OfficialFHSB",
  //     avatar: "/placeholder.svg?height=200&width=200",
  //   },
  //   category: "Basketball",
  //   viewerCount: 15420,
  //   isLive: true,
  // }

  // // Mock live streams data
  // const liveStreams = [
  //   {
  //     id: "stream-1",
  //     title: "Regional Qualifiers - East Division",
  //     thumbnail: "/placeholder.svg?height=720&width=1280",
  //     streamer: {
  //       username: "SportsCenter",
  //       avatar: "/placeholder.svg?height=200&width=200",
  //     },
  //     category: "Basketball",
  //     viewerCount: 8754,
  //     isLive: true,
  //   },
  //   {
  //     id: "stream-2",
  //     title: "Weekly Tournament Series - Round 4",
  //     thumbnail: "/placeholder.svg?height=720&width=1280",
  //     streamer: {
  //       username: "GameDay",
  //       avatar: "/placeholder.svg?height=200&width=200",
  //     },
  //     category: "Football",
  //     viewerCount: 6231,
  //     isLive: true,
  //   },
  //   {
  //     id: "stream-3",
  //     title: "College Showcase - Top Prospects",
  //     thumbnail: "/placeholder.svg?height=720&width=1280",
  //     streamer: {
  //       username: "RecruitingLive",
  //       avatar: "/placeholder.svg?height=200&width=200",
  //     },
  //     category: "Baseball",
  //     viewerCount: 4102,
  //     isLive: true,
  //   },
  //   {
  //     id: "stream-4",
  //     title: "Pro Analysis - Breaking Down the Playoffs",
  //     thumbnail: "/placeholder.svg?height=720&width=1280",
  //     streamer: {
  //       username: "AnalyticsHub",
  //       avatar: "/placeholder.svg?height=200&width=200",
  //     },
  //     category: "Analysis",
  //     viewerCount: 3578,
  //     isLive: true,
  //   },
  // ]

  // // Mock recommended streams data
  // const recommendedStreams = [
  //   {
  //     id: "rec-1",
  //     title: "Training Camp Day 3 - Behind the Scenes",
  //     thumbnail: "/placeholder.svg?height=720&width=1280",
  //     streamer: {
  //       username: "InsiderAccess",
  //       avatar: "/placeholder.svg?height=200&width=200",
  //     },
  //     category: "Football",
  //     viewerCount: 2145,
  //     isLive: true,
  //   },
  //   {
  //     id: "rec-2",
  //     title: "Draft Day Special - Live Reactions",
  //     thumbnail: "/placeholder.svg?height=720&width=1280",
  //     streamer: {
  //       username: "DraftCentral",
  //       avatar: "/placeholder.svg?height=200&width=200",
  //     },
  //     category: "Basketball",
  //     viewerCount: 1876,
  //     isLive: true,
  //   },
  //   {
  //     id: "rec-3",
  //     title: "Coaching Clinic - Advanced Strategies",
  //     thumbnail: "/placeholder.svg?height=720&width=1280",
  //     streamer: {
  //       username: "CoachCorner",
  //       avatar: "/placeholder.svg?height=200&width=200",
  //     },
  //     category: "Education",
  //     viewerCount: 1543,
  //     isLive: true,
  //   },
  //   {
  //     id: "rec-4",
  //     title: "Fitness for Athletes - Strength Training",
  //     thumbnail: "/placeholder.svg?height=720&width=1280",
  //     streamer: {
  //       username: "AthleteFit",
  //       avatar: "/placeholder.svg?height=200&width=200",
  //     },
  //     category: "Fitness",
  //     viewerCount: 1298,
  //     isLive: true,
  //   },
  // ]

  // // Mock popular categories data
  // const popularCategories = [
  //   {
  //     id: "cat-1",
  //     name: "Basketball",
  //     image: "/placeholder.svg?height=300&width=240",
  //     viewerCount: 45230,
  //   },
  //   {
  //     id: "cat-2",
  //     name: "Football",
  //     image: "/placeholder.svg?height=300&width=240",
  //     viewerCount: 38750,
  //   },
  //   {
  //     id: "cat-3",
  //     name: "Baseball",
  //     image: "/placeholder.svg?height=300&width=240",
  //     viewerCount: 21540,
  //   },
  //   {
  //     id: "cat-4",
  //     name: "Soccer",
  //     image: "/placeholder.svg?height=300&width=240",
  //     viewerCount: 19870,
  //   },
  //   {
  //     id: "cat-5",
  //     name: "Volleyball",
  //     image: "/placeholder.svg?height=300&width=240",
  //     viewerCount: 12450,
  //   },
  //   {
  //     id: "cat-6",
  //     name: "Hockey",
  //     image: "/placeholder.svg?height=300&width=240",
  //     viewerCount: 9870,
  //   },
  // ]

  useEffect(() => {
    if (connected) {
      socket.emit("client-ready");
      socket.on("streams", (updated: any) => {
        setStreams(updated);
      });
    }
  }, [connected]);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black via-black to-gray-900 py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Welcome to the{" "}
                <span className="text-primary">Dragon's Den</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Experience the ultimate live streaming platform for sports,
                gaming, and entertainment. Join thousands of viewers and
                creators in the most exciting streaming community.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/browse">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold"
                >
                  Start Watching
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
                >
                  Join the Den
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Banner */}
      {/* <section className="relative overflow-hidden rounded-xl border border-fhsb-green/30">
        <div className="relative aspect-[21/9] md:aspect-[21/7] w-full">
          <Image
            src={featuredStream.thumbnail || "/placeholder.svg"}
            alt={featuredStream.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs font-medium text-white">LIVE</span>
              <span className="text-xs text-white/80">{featuredStream.viewerCount.toLocaleString()} viewers</span>
            </div>
            <h1 className="text-xl md:text-3xl font-bold text-white mb-2">{featuredStream.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={featuredStream.streamer.avatar || "/placeholder.svg"}
                alt={featuredStream.streamer.username}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm text-white">{featuredStream.streamer.username}</span>
              <span className="text-sm text-white/70">• {featuredStream.category}</span>
            </div>
            <Link href={`/stream/${featuredStream.id}`}>
              <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">Watch Now</Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Live Streams */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Live Streams</h2>
            <Link href="/browse">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
              >
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {streams.map((stream: any) => (
              <StreamCard
                key={stream.id}
                {...{ ...stream, id: stream._id }}
                viewerCount={watchers[stream.streamer._id]?.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Browse Categories</h2>
            <Link href="/categories">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
              >
                View All Categories
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase()}`}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-primary transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {category.count.toLocaleString()} streams
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join the Growing Community
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Green Dragon Den is home to thousands of creators and millions of
              viewers worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-300">Active Streamers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2M+</div>
              <div className="text-gray-300">Monthly Viewers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-300">Live Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-white">
              Ready to Enter the Den?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Whether you're here to watch or create, Green Dragon Den has
              everything you need to be part of the most exciting streaming
              community.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold"
                >
                  Create Account
                </Button>
              </Link>
              <Link href="/getting-started">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      {/* <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-fhsb-cream">Popular Categories</h2>
          <Link href="/categories" className="text-sm text-fhsb-green hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularCategories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </section> */}

      {/* Recommended Streams */}
      {/* <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-fhsb-cream">Recommended For You</h2>
          <Link href="/browse" className="text-sm text-fhsb-green hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedStreams.map((stream) => (
            <StreamCard key={stream.id} {...stream} />
          ))}
        </div>
      </section> */}

      {/* CTA Banner */}
      {/* {!user?.verified ? (
        <section className="rounded-xl border border-fhsb-green/30 overflow-hidden">
          <div className="bg-gradient-to-r from-black to-fhsb-darkgreen p-6 md:p-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-fhsb-cream">
                Ready to Start Streaming?
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Join Green Dragon Den today and share your content with
                fans around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link href="/register">
                  <Button className="w-full sm:w-auto bg-fhsb-green text-black hover:bg-fhsb-green/90">
                    Create Account
                  </Button>
                </Link>
                <Link href="/creators">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-fhsb-green/50 text-fhsb-cream hover:bg-fhsb-green hover:text-black"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null} */}
    </div>
  );
}
