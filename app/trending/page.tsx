import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Trending() {
  const trendingStreams = [
    {
      id: 1,
      title: "Championship Finals - Epic Showdown!",
      streamer: "ProGamer123",
      category: "Gaming",
      viewers: 15420,
      thumbnail: "/placeholder.svg?height=200&width=300",
      tags: ["Tournament", "Live", "Championship"],
    },
    {
      id: 2,
      title: "24 Hour Music Marathon",
      streamer: "MusicMaster",
      category: "Music",
      viewers: 8930,
      thumbnail: "/placeholder.svg?height=200&width=300",
      tags: ["Marathon", "Live Music", "Requests"],
    },
    {
      id: 3,
      title: "Digital Art Speed Painting",
      streamer: "ArtistPro",
      category: "Art",
      viewers: 5670,
      thumbnail: "/placeholder.svg?height=200&width=300",
      tags: ["Speed Art", "Digital", "Tutorial"],
    },
  ];

  const trendingCategories = [
    { name: "Gaming", viewers: 125000, growth: "+15%" },
    { name: "Music", viewers: 89000, growth: "+8%" },
    { name: "Art", viewers: 45000, growth: "+22%" },
    { name: "Talk Shows", viewers: 32000, growth: "+5%" },
    { name: "Sports", viewers: 28000, growth: "+12%" },
  ];

  const trendingCreators = [
    {
      id: 1,
      username: "StreamKing",
      displayName: "The Stream King",
      followers: 250000,
      category: "Gaming",
      avatar: "/placeholder-user.jpg",
      growth: "+2.5K",
    },
    {
      id: 2,
      username: "MusicQueen",
      displayName: "Music Queen",
      followers: 180000,
      category: "Music",
      avatar: "/placeholder-user.jpg",
      growth: "+1.8K",
    },
    {
      id: 3,
      username: "ArtMaster",
      displayName: "Digital Art Master",
      followers: 95000,
      category: "Art",
      avatar: "/placeholder-user.jpg",
      growth: "+3.2K",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-neon-green">
              Trending Now
            </h1>
            <p className="text-xl text-gray-300">
              Discover what's hot on Green Dragon Den
            </p>
          </div>

          <Tabs defaultValue="streams" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900 mb-8">
              <TabsTrigger
                value="streams"
                className="data-[state=active]:bg-neon-green data-[state=active]:text-black"
              >
                Trending Streams
              </TabsTrigger>
              <TabsTrigger
                value="categories"
                className="data-[state=active]:bg-neon-green data-[state=active]:text-black"
              >
                Hot Categories
              </TabsTrigger>
              <TabsTrigger
                value="creators"
                className="data-[state=active]:bg-neon-green data-[state=active]:text-black"
              >
                Rising Creators
              </TabsTrigger>
            </TabsList>

            <TabsContent value="streams" className="space-y-6">
              <div className="grid gap-6">
                {trendingStreams.map((stream, index) => (
                  <Card key={stream.id} className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="relative">
                          <img
                            src={stream.thumbnail || "/placeholder.svg"}
                            alt={stream.title}
                            className="w-64 h-40 object-cover rounded-lg"
                          />
                          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                            LIVE
                          </div>
                          <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                            #{index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-cream mb-2">
                            {stream.title}
                          </h3>
                          <p className="text-gray-400 mb-3">
                            by {stream.streamer}
                          </p>
                          <div className="flex items-center gap-4 mb-4">
                            <Badge
                              variant="outline"
                              className="bg-neon-green/10 text-neon-green border-neon-green"
                            >
                              {stream.category}
                            </Badge>
                            <span className="text-neon-green font-semibold">
                              {stream.viewers.toLocaleString()} viewers
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {stream.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="secondary"
                                className="bg-gray-800 text-gray-300"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button className="bg-neon-green text-black hover:bg-neon-green/90">
                            Watch Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="categories" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingCategories.map((category, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-800">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-neon-green">
                          #{index + 1} {category.name}
                        </CardTitle>
                        <Badge
                          variant="outline"
                          className="bg-green-900/20 text-green-400 border-green-400"
                        >
                          {category.growth}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-cream mb-2">
                        {category.viewers.toLocaleString()}
                      </div>
                      <p className="text-gray-400 mb-4">Total viewers</p>
                      <Button
                        variant="outline"
                        className="w-full bg-black text-cream border-neon-green hover:bg-neon-green hover:text-black"
                      >
                        Explore Category
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="creators" className="space-y-6">
              <div className="grid gap-6">
                {trendingCreators.map((creator, index) => (
                  <Card
                    key={creator.id}
                    className="bg-gray-900 border-gray-800"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <div className="relative">
                          <img
                            src={creator.avatar || "/placeholder.svg"}
                            alt={creator.username}
                            className="w-20 h-20 rounded-full object-cover"
                          />
                          <div className="absolute -top-2 -right-2 bg-neon-green text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                            #{index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-cream">
                            {creator.displayName}
                          </h3>
                          <p className="text-gray-400 mb-2">
                            @{creator.username}
                          </p>
                          <div className="flex items-center gap-4 mb-3">
                            <Badge
                              variant="outline"
                              className="bg-neon-green/10 text-neon-green border-neon-green"
                            >
                              {creator.category}
                            </Badge>
                            <span className="text-gray-400">
                              {creator.followers.toLocaleString()} followers
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className="bg-green-900/20 text-green-400 border-green-400"
                            >
                              {creator.growth} this week
                            </Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            className="bg-black text-cream border-neon-green hover:bg-neon-green hover:text-black"
                          >
                            Follow
                          </Button>
                          <Button
                            variant="outline"
                            className="bg-black text-cream border-neon-green hover:bg-neon-green hover:text-black"
                          >
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="bg-gray-900 border-gray-800 mt-8">
            <CardHeader>
              <CardTitle className="text-neon-green">
                Trending Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-green mb-2">
                    2.5M+
                  </div>
                  <p className="text-gray-400">Total viewers online</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-green mb-2">
                    15K+
                  </div>
                  <p className="text-gray-400">Live streams</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-green mb-2">
                    +25%
                  </div>
                  <p className="text-gray-400">Growth this week</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
