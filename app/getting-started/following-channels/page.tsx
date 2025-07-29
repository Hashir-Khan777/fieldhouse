import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Bell, Users, Calendar, Star, Settings } from "lucide-react"

export default function FollowingChannelsPage() {
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
            <h1 className="text-4xl font-bold mb-4">Following Channels</h1>
            <p className="text-xl text-cream/80">
              Stay connected with your favorite creators and never miss their content
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Heart className="h-5 w-5" />
                  How to Follow Channels
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Simple steps to follow your favorite creators
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-neon-green text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream mb-2">Visit a Creator's Channel</h4>
                    <p className="text-cream/80">
                      Navigate to any creator's channel page by clicking on their name or profile picture.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-neon-green text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream mb-2">Click the Follow Button</h4>
                    <p className="text-cream/80">
                      Look for the "Follow" button on their channel page and click it. The button will change to
                      "Following" to confirm.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-neon-green text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream mb-2">Enable Notifications (Optional)</h4>
                    <p className="text-cream/80">
                      Click the bell icon next to the follow button to get notified when they go live or upload new
                      content.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Bell className="h-5 w-5" />
                  Notification Options
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Choose how you want to be notified about followed channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Live Stream Notifications</h4>
                  <p className="text-cream/80">
                    Get notified immediately when a followed creator starts streaming live.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">New Video Notifications</h4>
                  <p className="text-cream/80">
                    Receive alerts when followed creators upload new videos or highlights.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Scheduled Stream Reminders</h4>
                  <p className="text-cream/80">
                    Get reminded about upcoming scheduled streams from your followed channels.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Notification Settings</h4>
                  <p className="text-cream/80 mb-3">
                    Customize your notification preferences for each channel individually or set global preferences.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                  >
                    <Link href="/settings">Manage Notifications</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Users className="h-5 w-5" />
                  Managing Your Followed Channels
                </CardTitle>
                <CardDescription className="text-cream/70">Keep track of all your followed creators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Following Page</h4>
                  <p className="text-cream/80 mb-3">
                    Visit your Following page to see all channels you follow and their recent activity.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                  >
                    <Link href="/following">View Following</Link>
                  </Button>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Unfollow Channels</h4>
                  <p className="text-cream/80">
                    To unfollow a channel, visit their page and click the "Following" button, then select "Unfollow".
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Follow Limits</h4>
                  <p className="text-cream/80">
                    You can follow up to 2,000 channels. If you reach this limit, you'll need to unfollow some channels
                    before following new ones.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Calendar className="h-5 w-5" />
                  Following Feed and Updates
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Stay updated with content from followed channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Homepage Feed</h4>
                  <p className="text-cream/80">
                    Your homepage prioritizes content from channels you follow, showing their latest streams and videos.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Live Following</h4>
                  <p className="text-cream/80">
                    See which of your followed channels are currently live in a dedicated section on your homepage.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Activity Feed</h4>
                  <p className="text-cream/80">
                    Get updates about your followed channels' activities, including new uploads, achievements, and
                    announcements.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Star className="h-5 w-5" />
                  Benefits of Following Channels
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Why following channels enhances your experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Never Miss Content</h4>
                  <p className="text-cream/80">
                    Stay updated with your favorite creators' latest streams, videos, and announcements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Personalized Experience</h4>
                  <p className="text-cream/80">
                    Your homepage and recommendations improve based on the channels you follow.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Community Connection</h4>
                  <p className="text-cream/80">Show support for creators and become part of their community.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Priority Access</h4>
                  <p className="text-cream/80">Some creators offer special perks or early access to followers.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Settings className="h-5 w-5" />
                  Advanced Following Features
                </CardTitle>
                <CardDescription className="text-cream/70">Make the most of your following experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Follow Categories</h4>
                  <p className="text-cream/80">
                    Organize your followed channels into custom categories for easier management.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Priority Following</h4>
                  <p className="text-cream/80">
                    Mark certain channels as priority to see their content first in your feed.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Following Analytics</h4>
                  <p className="text-cream/80">
                    Track your following habits and discover patterns in your viewing preferences.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-cream mb-4">Ready to start creating?</h3>
              <p className="text-cream/80 mb-6">
                Learn about creator resources and how to start your own streaming journey.
              </p>
              <Button asChild className="bg-neon-green text-black hover:bg-neon-green/90">
                <Link href="/creator-resources">Explore Creator Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
