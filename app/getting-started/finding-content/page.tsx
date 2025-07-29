import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search, TrendingUp, Users, Tag, Filter, Star } from "lucide-react"

export default function FindingContentPage() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button
              asChild
              variant="outline"
              className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black mb-4"
            >
              <Link href="/getting-started" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Getting Started
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4">Finding Content to Watch</h1>
            <p className="text-xl text-cream/80">
              Discover amazing streams, videos, and creators on Fieldhouse Stadium
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Search className="h-5 w-5" />
                  Search and Discovery
                </CardTitle>
                <CardDescription className="text-cream/70">Multiple ways to find content you'll love</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Search Bar</h4>
                  <p className="text-cream/80 mb-3">
                    Use the search bar at the top of any page to find specific streams, creators, or content.
                  </p>
                  <ul className="text-cream/70 space-y-1">
                    <li>• Search by creator name or username</li>
                    <li>• Look for specific game titles or topics</li>
                    <li>• Use keywords to find relevant content</li>
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black mt-3"
                  >
                    <Link href="/search">Try Search</Link>
                  </Button>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Browse by Category</h4>
                  <p className="text-cream/80 mb-3">Explore content organized by categories and topics.</p>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                  >
                    <Link href="/categories">Browse Categories</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <TrendingUp className="h-5 w-5" />
                  Trending and Popular Content
                </CardTitle>
                <CardDescription className="text-cream/70">Stay up-to-date with what's popular</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Trending Page</h4>
                  <p className="text-cream/80 mb-3">
                    See what's currently popular and gaining traction on the platform.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                  >
                    <Link href="/trending">View Trending</Link>
                  </Button>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Live Streams</h4>
                  <p className="text-cream/80 mb-3">Check out what's happening live right now.</p>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                  >
                    <Link href="/live">Browse Live</Link>
                  </Button>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Featured Content</h4>
                  <p className="text-cream/80">Discover hand-picked content recommended by our team on the homepage.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Users className="h-5 w-5" />
                  Finding Creators
                </CardTitle>
                <CardDescription className="text-cream/70">Discover amazing content creators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Creator Directory</h4>
                  <p className="text-cream/80 mb-3">
                    Browse our directory of creators organized by category and popularity.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                  >
                    <Link href="/creators">Browse Creators</Link>
                  </Button>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Recommended Creators</h4>
                  <p className="text-cream/80">
                    Based on your viewing history and preferences, we'll suggest creators you might enjoy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Creator Profiles</h4>
                  <p className="text-cream/80">
                    Visit creator profiles to see their content, schedule, and community information.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Tag className="h-5 w-5" />
                  Tags and Topics
                </CardTitle>
                <CardDescription className="text-cream/70">Use tags to find specific types of content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Popular Tags</h4>
                  <p className="text-cream/80 mb-3">
                    Content is tagged with relevant topics, games, and themes. Click on tags to find similar content.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm">#Gaming</span>
                    <span className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm">#Sports</span>
                    <span className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm">#Music</span>
                    <span className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm">#Art</span>
                    <span className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm">#Technology</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Tag Pages</h4>
                  <p className="text-cream/80">
                    Each tag has its own page showing all related content and top creators in that category.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Filter className="h-5 w-5" />
                  Filtering and Sorting
                </CardTitle>
                <CardDescription className="text-cream/70">Refine your search results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Sort Options</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• Most recent</li>
                    <li>• Most popular</li>
                    <li>• Highest rated</li>
                    <li>• Most viewed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Filter Options</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• Content type (live streams, videos, clips)</li>
                    <li>• Duration (short, medium, long)</li>
                    <li>• Language</li>
                    <li>• Upload date</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Star className="h-5 w-5" />
                  Personalized Recommendations
                </CardTitle>
                <CardDescription className="text-cream/70">Content tailored to your interests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Homepage Feed</h4>
                  <p className="text-cream/80">
                    Your homepage shows personalized recommendations based on your viewing history and preferences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Similar Content</h4>
                  <p className="text-cream/80">
                    When watching content, you'll see suggestions for similar streams and videos in the sidebar.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Improving Recommendations</h4>
                  <p className="text-cream/80">
                    The more you watch and interact with content, the better our recommendations become.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-cream mb-4">Found something you like?</h3>
              <p className="text-cream/80 mb-6">
                Learn how to follow channels to stay updated with your favorite creators.
              </p>
              <Button asChild className="bg-neon-green text-black hover:bg-neon-green/90">
                <Link href="/getting-started/following-channels">Next: Following Channels</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
