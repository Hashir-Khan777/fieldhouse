import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BarChart, Users, Eye, Clock, TrendingUp, Target } from "lucide-react"

export default function AnalyticsPage() {
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
              <Link href="/creator-resources" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Creator Resources
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4">Analytics and Growth</h1>
            <p className="text-xl text-cream/80">
              Use data to understand your audience and grow your channel strategically
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <BarChart className="h-5 w-5" />
                  Understanding Your Analytics Dashboard
                </CardTitle>
                <CardDescription className="text-cream/70">Key metrics every creator should track</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Overview Metrics</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-cream mb-1">Total Views</h5>
                      <p className="text-cream/80 text-sm">Total number of views across all your content</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream mb-1">Watch Time</h5>
                      <p className="text-cream/80 text-sm">Total minutes watched by all viewers</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream mb-1">Subscribers</h5>
                      <p className="text-cream/80 text-sm">Total number of channel subscribers</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream mb-1">Revenue</h5>
                      <p className="text-cream/80 text-sm">Total earnings from all monetization sources</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Accessing Your Analytics</h4>
                  <p className="text-cream/80 mb-3">
                    Your analytics dashboard is available in your creator dashboard with real-time and historical data.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                  >
                    <Link href="/dashboard">View Dashboard</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Users className="h-5 w-5" />
                  Audience Analytics
                </CardTitle>
                <CardDescription className="text-cream/70">Learn about your viewers and their behavior</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Demographics</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• Age distribution of your viewers</li>
                    <li>• Geographic location data</li>
                    <li>• Gender breakdown</li>
                    <li>• Device and platform usage</li>
                    <li>• Language preferences</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Viewing Patterns</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• Peak viewing hours and days</li>
                    <li>• Average session duration</li>
                    <li>• Return viewer percentage</li>
                    <li>• Content discovery sources</li>
                    <li>• Drop-off points in videos</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Using Audience Data</h4>
                  <p className="text-cream/80">
                    Use demographic and behavioral data to tailor your content schedule, topics, and style to better
                    serve your audience.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Eye className="h-5 w-5" />
                  Content Performance
                </CardTitle>
                <CardDescription className="text-cream/70">Analyze which content performs best</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Video Analytics</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-cream/80 space-y-1">
                      <li>• View count and growth rate</li>
                      <li>• Average view duration</li>
                      <li>• Audience retention graphs</li>
                      <li>• Click-through rates</li>
                    </ul>
                    <ul className="text-cream/80 space-y-1">
                      <li>• Engagement metrics (likes, comments)</li>
                      <li>• Share and save rates</li>
                      <li>• Subscriber conversion rate</li>
                      <li>• Revenue per video</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Live Stream Analytics</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• Peak concurrent viewers</li>
                    <li>• Average viewership throughout stream</li>
                    <li>• Chat engagement rate</li>
                    <li>• New followers gained during stream</li>
                    <li>• Super chat and donation metrics</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Clock className="h-5 w-5" />
                  Growth Tracking
                </CardTitle>
                <CardDescription className="text-cream/70">Monitor your channel's growth over time</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Growth Metrics</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-cream">Subscriber Growth Rate</h5>
                      <p className="text-cream/80 text-sm">Track how quickly you're gaining new subscribers</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream">View Growth Trends</h5>
                      <p className="text-cream/80 text-sm">Monitor changes in your average view counts</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream">Engagement Rate Changes</h5>
                      <p className="text-cream/80 text-sm">See how audience engagement evolves over time</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Milestone Tracking</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• Set subscriber count goals</li>
                    <li>• Track revenue milestones</li>
                    <li>• Monitor watch time achievements</li>
                    <li>• Celebrate growth victories</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <TrendingUp className="h-5 w-5" />
                  Data-Driven Growth Strategies
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Turn insights into actionable growth tactics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Content Optimization</h4>
                  <ul className="text-cream/80 space-y-2">
                    <li>
                      • <strong>Timing:</strong> Post when your audience is most active
                    </li>
                    <li>
                      • <strong>Length:</strong> Match video length to audience retention patterns
                    </li>
                    <li>
                      • <strong>Topics:</strong> Focus on content that generates high engagement
                    </li>
                    <li>
                      • <strong>Thumbnails:</strong> A/B test different thumbnail styles
                    </li>
                    <li>
                      • <strong>Titles:</strong> Use data to craft compelling titles
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Audience Development</h4>
                  <ul className="text-cream/80 space-y-2">
                    <li>
                      • <strong>Retention:</strong> Identify and fix content drop-off points
                    </li>
                    <li>
                      • <strong>Discovery:</strong> Optimize for your top traffic sources
                    </li>
                    <li>
                      • <strong>Engagement:</strong> Encourage interaction based on successful patterns
                    </li>
                    <li>
                      • <strong>Community:</strong> Build on your most engaged audience segments
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Target className="h-5 w-5" />
                  Setting and Tracking Goals
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Create measurable objectives for your channel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">SMART Goals Framework</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-cream">Specific</h5>
                      <p className="text-cream/80 text-sm">
                        Define exactly what you want to achieve (e.g., "Gain 1,000 subscribers")
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream">Measurable</h5>
                      <p className="text-cream/80 text-sm">Use analytics to track progress with concrete numbers</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream">Achievable</h5>
                      <p className="text-cream/80 text-sm">Set realistic goals based on your current growth rate</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream">Relevant</h5>
                      <p className="text-cream/80 text-sm">Align goals with your overall channel strategy</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream">Time-bound</h5>
                      <p className="text-cream/80 text-sm">Set deadlines to create urgency and focus</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Example Goals</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• Increase average view duration by 20% in 3 months</li>
                    <li>• Gain 500 new subscribers by end of quarter</li>
                    <li>• Achieve $1,000 monthly revenue within 6 months</li>
                    <li>• Improve engagement rate to 5% within 2 months</li>
                    <li>• Reach 10,000 total watch hours this year</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-cream mb-4">Ready to build your community?</h3>
              <p className="text-cream/80 mb-6">
                Learn strategies for building and engaging with your audience community.
              </p>
              <Button asChild className="bg-neon-green text-black hover:bg-neon-green/90">
                <Link href="/creator-resources/community-building">Community Building</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
