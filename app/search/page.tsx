import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Search() {
  const searchResults = {
    streams: [
      {
        id: 1,
        title: "Epic Gaming Session - New Game Release!",
        streamer: "ProGamer123",
        category: "Gaming",
        viewers: 1250,
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 2,
        title: "Music Production Live",
        streamer: "BeatMaker",
        category: "Music",
        viewers: 890,
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
    ],
    users: [
      {
        id: 1,
        username: "ArtistCreator",
        displayName: "Digital Artist",
        followers: 15000,
        avatar: "/placeholder-user.jpg",
      },
      {
        id: 2,
        username: "TechReviewer",
        displayName: "Tech Reviews",
        followers: 8500,
        avatar: "/placeholder-user.jpg",
      },
    ],
    videos: [
      {
        id: 1,
        title: "Best Moments from Last Stream",
        creator: "HighlightMaster",
        views: 25000,
        duration: "15:30",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-neon-green">Search</h1>

          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardContent className="pt-6">
              <div className="flex gap-4 mb-4">
                <Input
                  placeholder="Search streams, creators, videos..."
                  className="bg-gray-800 border-gray-700 text-cream flex-1"
                />
                <Button className="bg-neon-green text-black hover:bg-neon-green/90">Search</Button>
              </div>

              <div className="flex gap-4 items-center">
                <Select>
                  <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-cream">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="art">Art</SelectItem>
                    <SelectItem value="talk">Talk Shows</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-cream">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="viewers">Most Viewers</SelectItem>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="streams" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-900">
              <TabsTrigger value="streams" className="data-[state=active]:bg-neon-green data-[state=active]:text-black">
                Streams ({searchResults.streams.length})
              </TabsTrigger>
              <TabsTrigger value="users" className="data-[state=active]:bg-neon-green data-[state=active]:text-black">
                Users ({searchResults.users.length})
              </TabsTrigger>
              <TabsTrigger value="videos" className="data-[state=active]:bg-neon-green data-[state=active]:text-black">
                Videos ({searchResults.videos.length})
              </TabsTrigger>
              <TabsTrigger value="all" className="data-[state=active]:bg-neon-green data-[state=active]:text-black">
                All Results
              </TabsTrigger>
            </TabsList>

            <TabsContent value="streams" className="space-y-4">
              {searchResults.streams.map((stream) => (
                <Card key={stream.id} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={stream.thumbnail || "/placeholder.svg"}
                        alt={stream.title}
                        className="w-48 h-32 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-cream mb-2">{stream.title}</h3>
                        <p className="text-gray-400 mb-2">by {stream.streamer}</p>
                        <div className="flex items-center gap-4 mb-2">
                          <Badge variant="outline" className="bg-neon-green/10 text-neon-green border-neon-green">
                            {stream.category}
                          </Badge>
                          <span className="text-gray-400">{stream.viewers.toLocaleString()} viewers</span>
                        </div>
                        <Button
                          variant="outline"
                          className="bg-black text-cream border-neon-green hover:bg-neon-green hover:text-black"
                        >
                          Watch Stream
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="users" className="space-y-4">
              {searchResults.users.map((user) => (
                <Card key={user.id} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.username}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-cream">{user.displayName}</h3>
                        <p className="text-gray-400">@{user.username}</p>
                        <p className="text-gray-400">{user.followers.toLocaleString()} followers</p>
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
            </TabsContent>

            <TabsContent value="videos" className="space-y-4">
              {searchResults.videos.map((video) => (
                <Card key={video.id} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-48 h-32 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                          {video.duration}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-cream mb-2">{video.title}</h3>
                        <p className="text-gray-400 mb-2">by {video.creator}</p>
                        <p className="text-gray-400 mb-4">{video.views.toLocaleString()} views</p>
                        <Button
                          variant="outline"
                          className="bg-black text-cream border-neon-green hover:bg-neon-green hover:text-black"
                        >
                          Watch Video
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="all" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-neon-green">Live Streams</h2>
                <div className="space-y-4">
                  {searchResults.streams.slice(0, 2).map((stream) => (
                    <Card key={stream.id} className="bg-gray-900 border-gray-800">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <img
                            src={stream.thumbnail || "/placeholder.svg"}
                            alt={stream.title}
                            className="w-32 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-cream">{stream.title}</h3>
                            <p className="text-gray-400 text-sm">by {stream.streamer}</p>
                            <p className="text-gray-400 text-sm">{stream.viewers.toLocaleString()} viewers</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-neon-green">Creators</h2>
                <div className="space-y-4">
                  {searchResults.users.slice(0, 2).map((user) => (
                    <Card key={user.id} className="bg-gray-900 border-gray-800">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={user.avatar || "/placeholder.svg"}
                            alt={user.username}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-cream">{user.displayName}</h3>
                            <p className="text-gray-400 text-sm">@{user.username}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
