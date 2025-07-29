import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Live() {
  const liveStreams = [
    {
      id: 1,
      title: "Epic Gaming Marathon - 12 Hours!",
      streamer: "GameMaster2024",
      category: "Gaming",
      viewers: 3420,
      thumbnail: "/placeholder.svg?height=200&width=300",
      avatar: "/placeholder-user.jpg",
      startTime: "2 hours ago",
    },
    {
      id: 2,
      title: "Chill Music & Chat Session",
      streamer: "MelodyMaker",
      category: "Music",
      viewers: 1890,
      thumbnail: "/placeholder.svg?height=200&width=300",
      avatar: "/placeholder-user.jpg",
      startTime: "45 minutes ago",
    },
    {
      id: 3,
      title: "Digital Art Commission Work",
      streamer: "PixelArtist",
      category: "Art",
      viewers: 756,
      thumbnail: "/placeholder.svg?height=200&width=300",
      avatar: "/placeholder-user.jpg",
      startTime: "1 hour ago",
    },
    {
      id: 4,
      title: "Tech Talk: Latest Gadgets Review",
      streamer: "TechGuru",
      category: "Technology",
      viewers: 2100,
      thumbnail: "/placeholder.svg?height=200&width=300",
      avatar: "/placeholder-user.jpg",
      startTime: "30 minutes ago",
    },
    {
      id: 5,
      title: "Cooking Stream: Italian Cuisine",
      streamer: "ChefMaster",
      category: "Cooking",
      viewers: 1250,
      thumbnail: "/placeholder.svg?height=200&width=300",
      avatar: "/placeholder-user.jpg",
      startTime: "1.5 hours ago",
    },
    {
      id: 6,
      title: "Fitness Workout Session",
      streamer: "FitnessPro",
      category: "Fitness",
      viewers: 890,
      thumbnail: "/placeholder.svg?height=200&width=300",
      avatar: "/placeholder-user.jpg",
      startTime: "20 minutes ago",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-neon-green mb-2">Live Streams</h1>
              <p className="text-gray-300">Discover amazing live content happening right now</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-500 font-semibold">{liveStreams.length} streams live</span>
            </div>
          </div>

          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardContent className="pt-6">
              <div className="flex gap-4 items-center">
                <Input placeholder="Search live streams..." className="bg-gray-800 border-gray-700 text-cream flex-1" />
                <Select>
                  <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-cream">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="art">Art</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="cooking">Cooking</SelectItem>
                    <SelectItem value="fitness">Fitness</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-cream">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="viewers">Most Viewers</SelectItem>
                    <SelectItem value="recent">Recently Started</SelectItem>
                    <SelectItem value="duration">Longest Running</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveStreams.map((stream) => (
              <Card
                key={stream.id}
                className="bg-gray-900 border-gray-800 hover:border-neon-green/50 transition-colors"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={stream.thumbnail || "/placeholder.svg"}
                      alt={stream.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      LIVE
                    </div>
                    <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {stream.viewers.toLocaleString()}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {stream.startTime}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-cream mb-2 line-clamp-2">{stream.title}</h3>

                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={stream.avatar || "/placeholder.svg"}
                        alt={stream.streamer}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-gray-400 text-sm">{stream.streamer}</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="bg-neon-green/10 text-neon-green border-neon-green">
                        {stream.category}
                      </Badge>
                      <span className="text-gray-400 text-sm">{stream.viewers.toLocaleString()} viewers</span>
                    </div>

                    <Button className="w-full bg-neon-green text-black hover:bg-neon-green/90">Watch Stream</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="bg-black text-cream border-neon-green hover:bg-neon-green hover:text-black"
            >
              Load More Streams
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
