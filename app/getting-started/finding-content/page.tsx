import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Search, TrendingUp, Users, Tag, Filter, Star, Clock, Eye, Heart, Lightbulb } from "lucide-react"

export default function FindingContentPage() {
  return (
    <div className="container px-4 py-6 md:px-6 space-y-8">
      <div className="text-center space-y-4 max-w-3xl mx-auto py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-fhsb-cream">Finding Content to Watch</h1>
        <p className="text-xl text-muted-foreground">Discover amazing sports content and streams on Green Dragon Den</p>
      </div>

      {/* Quick Start */}
      <Alert className="border-fhsb-green/30 bg-fhsb-green/10">
        <Lightbulb className="h-4 w-4 text-fhsb-green" />
        <AlertDescription className="text-fhsb-cream">
          <strong>New to the platform?</strong> Start with our{" "}
          <Link href="/trending" className="text-fhsb-green hover:underline">
            trending page
          </Link>{" "}
          to see what's popular right now!
        </AlertDescription>
      </Alert>

      {/* Search and Discovery */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Search className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Search and Discovery</CardTitle>
          </div>
          <CardDescription>Multiple ways to find exactly what you're looking for</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Search Bar</h4>
              <p className="text-sm text-muted-foreground">
                Use the search bar in the header to find specific streamers, games, or topics. Try searching for:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <span className="bg-fhsb-green/20 text-fhsb-green px-2 py-1 rounded">Basketball</span>
                <span className="bg-fhsb-green/20 text-fhsb-green px-2 py-1 rounded">FIFA</span>
                <span className="bg-fhsb-green/20 text-fhsb-green px-2 py-1 rounded">Coaching</span>
                <span className="bg-fhsb-green/20 text-fhsb-green px-2 py-1 rounded">Analysis</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Advanced Search</h4>
              <p className="text-sm text-muted-foreground">
                Use filters to narrow down results by category, language, viewer count, and more.
              </p>
            </div>
          </div>
          <Link href="/search">
            <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">Try Advanced Search</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Trending Content */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Trending Content</CardTitle>
          </div>
          <CardDescription>See what's popular and gaining momentum</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Trending Streams</h4>
              <p className="text-sm text-muted-foreground">
                Live streams that are currently popular, sorted by viewer count and engagement.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Rising Creators</h4>
              <p className="text-sm text-muted-foreground">
                New and upcoming streamers who are gaining followers quickly.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Popular Categories</h4>
              <p className="text-sm text-muted-foreground">
                Sports and game categories with the most active streams and viewers.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href="/trending">
              <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">View Trending</Button>
            </Link>
            <Link href="/live">
              <Button
                variant="outline"
                className="border-fhsb-green/50 text-fhsb-cream hover:bg-fhsb-green hover:text-black bg-transparent"
              >
                Browse Live Streams
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Creator Directory */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Creator Directory</CardTitle>
          </div>
          <CardDescription>Browse and discover content creators</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Featured Creators</h4>
              <p className="text-sm text-muted-foreground">
                Highlighted creators who produce exceptional content and have strong communities.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Browse by Sport</h4>
              <p className="text-sm text-muted-foreground">
                Find creators who specialize in specific sports or activities you're interested in.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Creator Profiles</h4>
              <p className="text-sm text-muted-foreground">
                Each creator has a detailed profile showing their content, schedule, and community stats.
              </p>
            </div>
          </div>
          <Link href="/creators">
            <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">Browse Creators</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Categories and Tags */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Tag className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Categories and Tags</CardTitle>
          </div>
          <CardDescription>Organize content by topics and interests</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Main Categories</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                <Link href="/categories/basketball" className="text-fhsb-green hover:underline">
                  Basketball
                </Link>
                <Link href="/categories/football" className="text-fhsb-green hover:underline">
                  Football
                </Link>
                <Link href="/categories/soccer" className="text-fhsb-green hover:underline">
                  Soccer
                </Link>
                <Link href="/categories/esports" className="text-fhsb-green hover:underline">
                  Esports
                </Link>
                <Link href="/categories/fitness" className="text-fhsb-green hover:underline">
                  Fitness
                </Link>
                <Link href="/categories/coaching" className="text-fhsb-green hover:underline">
                  Coaching
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Popular Tags</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-fhsb-green/20 text-fhsb-green px-2 py-1 rounded text-xs">#live</span>
                <span className="bg-fhsb-green/20 text-fhsb-green px-2 py-1 rounded text-xs">#tutorial</span>
                <span className="bg-fhsb-green/20 text-fhsb-green px-2 py-1 rounded text-xs">#highlights</span>
                <span className="bg-fhsb-green/20 text-fhsb-green px-2 py-1 rounded text-xs">#analysis</span>
                <span className="bg-fhsb-green/20 text-fhsb-green px-2 py-1 rounded text-xs">#beginner</span>
                <span className="bg-fhsb-green/20 text-fhsb-green px-2 py-1 rounded text-xs">#pro</span>
              </div>
            </div>
          </div>
          <Link href="/categories">
            <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">Explore Categories</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Filtering and Sorting */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Filter className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Filtering and Sorting</CardTitle>
          </div>
          <CardDescription>Refine your content discovery</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Filter Options</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-fhsb-green" />
                  <span>Viewer count range</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-fhsb-green" />
                  <span>Stream duration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-fhsb-green" />
                  <span>Language preference</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-fhsb-green" />
                  <span>Content rating</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Sort Options</h4>
              <div className="text-sm text-muted-foreground">
                Sort by viewer count, most recent, highest rated, or longest running streams.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personalized Recommendations */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Personalized Recommendations</CardTitle>
          </div>
          <CardDescription>Content tailored to your interests</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Based on Your Activity</h4>
              <p className="text-sm text-muted-foreground">
                We recommend content based on streams you've watched, creators you follow, and categories you engage
                with.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Similar to What You Like</h4>
              <p className="text-sm text-muted-foreground">Find new creators and content similar to your favorites.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Recommended for You</h4>
              <p className="text-sm text-muted-foreground">
                A personalized feed appears on your homepage once you start following creators and watching content.
              </p>
            </div>
          </div>
          <Alert className="border-blue-500/30 bg-blue-500/10">
            <Lightbulb className="h-4 w-4 text-blue-400" />
            <AlertDescription className="text-fhsb-cream text-sm">
              <strong>Tip:</strong> The more you interact with content (watching, following, liking), the better our
              recommendations become!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-black to-fhsb-darkgreen rounded-xl border border-fhsb-green/30 p-6 md:p-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-fhsb-cream">Ready to Explore?</h2>
          <p className="text-muted-foreground md:text-lg">
            Now that you know how to find content, start exploring and discover your new favorite creators!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <Link href="/browse">
              <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Start Browsing</Button>
            </Link>
            <Link href="/trending">
              <Button
                variant="outline"
                className="w-full border-fhsb-green/50 text-fhsb-cream hover:bg-fhsb-green hover:text-black bg-transparent"
              >
                View Trending
              </Button>
            </Link>
            <Link href="/getting-started/following-channels">
              <Button
                variant="outline"
                className="w-full border-fhsb-green/50 text-fhsb-cream hover:bg-fhsb-green hover:text-black bg-transparent"
              >
                Learn to Follow
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
