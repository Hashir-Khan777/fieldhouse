import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, Bell, Users, Star, Settings, Zap, Gift, MessageSquare, Lightbulb } from "lucide-react"

export default function FollowingChannelsPage() {
  return (
    <div className="container px-4 py-6 md:px-6 space-y-8">
      <div className="text-center space-y-4 max-w-3xl mx-auto py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-fhsb-cream">Following Channels</h1>
        <p className="text-xl text-muted-foreground">Stay connected with your favorite creators on Green Dragon Den</p>
      </div>

      {/* Quick Start */}
      <Alert className="border-fhsb-green/30 bg-fhsb-green/10">
        <Heart className="h-4 w-4 text-fhsb-green" />
        <AlertDescription className="text-fhsb-cream">
          <strong>Quick Start:</strong> Found a creator you like? Click the "Follow" button on their profile or stream
          page to get started!
        </AlertDescription>
      </Alert>

      {/* How to Follow */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">How to Follow Channels</CardTitle>
          </div>
          <CardDescription>Simple steps to follow your favorite creators</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-fhsb-green text-black flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div className="space-y-1">
                <h4 className="font-medium text-fhsb-cream">Find a Creator</h4>
                <p className="text-sm text-muted-foreground">
                  Browse streams, search for specific creators, or check out our trending and featured sections.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-fhsb-green text-black flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div className="space-y-1">
                <h4 className="font-medium text-fhsb-cream">Visit Their Profile or Stream</h4>
                <p className="text-sm text-muted-foreground">
                  Click on their username or stream thumbnail to go to their profile or live stream page.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-fhsb-green text-black flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div className="space-y-1">
                <h4 className="font-medium text-fhsb-cream">Click Follow</h4>
                <p className="text-sm text-muted-foreground">
                  Look for the "Follow" button (usually near their name) and click it. The button will change to
                  "Following" to confirm.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-fhsb-green text-black flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div className="space-y-1">
                <h4 className="font-medium text-fhsb-cream">Get Notifications</h4>
                <p className="text-sm text-muted-foreground">
                  You'll now receive notifications when they go live (if enabled in your settings).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification Options */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Bell className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Notification Options</CardTitle>
          </div>
          <CardDescription>Control how you're notified about followed channels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Live Stream Alerts</h4>
              <p className="text-sm text-muted-foreground">
                Get notified immediately when followed creators start streaming. Available via email, push
                notifications, or both.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Custom Notification Settings</h4>
              <p className="text-sm text-muted-foreground">
                Set different notification preferences for each creator you follow. Some you might want instant alerts
                for, others just weekly summaries.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Notification Timing</h4>
              <p className="text-sm text-muted-foreground">
                Choose to be notified when streams start, or get a reminder 15 minutes before scheduled streams.
              </p>
            </div>
          </div>
          <Link href="/settings">
            <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">Configure Notifications</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Benefits of Following */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Star className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Benefits of Following</CardTitle>
          </div>
          <CardDescription>What you get when you follow creators</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <Bell className="h-5 w-5 text-fhsb-green mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-medium text-fhsb-cream">Never Miss a Stream</h4>
                <p className="text-sm text-muted-foreground">
                  Get notified when your favorite creators go live so you never miss the action.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-fhsb-green mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-medium text-fhsb-cream">Following Feed</h4>
                <p className="text-sm text-muted-foreground">
                  Access a dedicated feed showing only content from creators you follow.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-fhsb-green mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-medium text-fhsb-cream">Priority in Chat</h4>
                <p className="text-sm text-muted-foreground">
                  Some creators give followers special recognition or priority in chat interactions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Gift className="h-5 w-5 text-fhsb-green mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-medium text-fhsb-cream">Exclusive Content</h4>
                <p className="text-sm text-muted-foreground">
                  Access to follower-only streams, behind-the-scenes content, and special events.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-fhsb-green mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-medium text-fhsb-cream">Community Access</h4>
                <p className="text-sm text-muted-foreground">
                  Join the creator's community, participate in discussions, and connect with other fans.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Managing Your Follows */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Settings className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Managing Your Follows</CardTitle>
          </div>
          <CardDescription>Keep your following list organized</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Following Page</h4>
              <p className="text-sm text-muted-foreground">
                Visit your Following page to see all creators you follow, their recent activity, and who's currently
                live.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Unfollow Creators</h4>
              <p className="text-sm text-muted-foreground">
                Click the "Following" button on any creator's profile to unfollow them. You can always follow them again
                later.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Organize by Categories</h4>
              <p className="text-sm text-muted-foreground">
                Sort your followed creators by sport, content type, or activity level to find what you want to watch
                quickly.
              </p>
            </div>
          </div>
          <Link href="/following">
            <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">View Following Page</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Advanced Features */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Advanced Following Features</CardTitle>
          </div>
          <CardDescription>Get more from your follows</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Follow Notifications by Creator</h4>
              <p className="text-sm text-muted-foreground">
                Set custom notification preferences for each creator. Get instant alerts for your favorites, daily
                summaries for others.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Follow Lists</h4>
              <p className="text-sm text-muted-foreground">
                Create custom lists to organize your follows (e.g., "Basketball Coaches", "FIFA Players", "Fitness
                Trainers").
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Auto-Follow Similar Creators</h4>
              <p className="text-sm text-muted-foreground">
                Enable suggestions to automatically discover and follow creators similar to ones you already follow.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Alert className="border-blue-500/30 bg-blue-500/10">
        <Lightbulb className="h-4 w-4 text-blue-400" />
        <AlertDescription className="text-fhsb-cream">
          <strong>Pro Tips:</strong>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Start by following 5-10 creators in different sports you enjoy</li>
            <li>• Check your Following page regularly to see who's live</li>
            <li>• Engage with creators' content to build community connections</li>
            <li>• Use notification settings to avoid being overwhelmed</li>
            <li>• Don't be afraid to unfollow if your interests change</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-black to-fhsb-darkgreen rounded-xl border border-fhsb-green/30 p-6 md:p-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-fhsb-cream">Start Following Today!</h2>
          <p className="text-muted-foreground md:text-lg">
            Ready to build your personalized Green Dragon Den experience? Start following creators and never miss great
            content again.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <Link href="/browse">
              <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Find Creators</Button>
            </Link>
            <Link href="/creators">
              <Button
                variant="outline"
                className="w-full border-fhsb-green/50 text-fhsb-cream hover:bg-fhsb-green hover:text-black bg-transparent"
              >
                Creator Directory
              </Button>
            </Link>
            <Link href="/following">
              <Button
                variant="outline"
                className="w-full border-fhsb-green/50 text-fhsb-cream hover:bg-fhsb-green hover:text-black bg-transparent"
              >
                My Following
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
