import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, DollarSign, Users, Gift, Star, TrendingUp, Shield } from "lucide-react"

export default function MonetizationPage() {
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
            <h1 className="text-4xl font-bold mb-4">Monetization Options</h1>
            <p className="text-xl text-cream/80">Turn your passion into profit with multiple revenue streams</p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Users className="h-5 w-5" />
                  Subscriptions and Memberships
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Build recurring revenue with loyal subscribers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Channel Subscriptions</h4>
                  <p className="text-cream/80 mb-3">
                    Offer monthly subscriptions to your channel with exclusive perks for subscribers.
                  </p>
                  <ul className="text-cream/70 space-y-1">
                    <li>• Ad-free viewing experience</li>
                    <li>• Exclusive subscriber-only content</li>
                    <li>• Custom emotes and badges</li>
                    <li>• Priority in chat and Q&A sessions</li>
                    <li>• Early access to videos and streams</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Tier System</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium text-neon-green mb-2">Basic - $4.99/month</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• Ad-free viewing</li>
                        <li>• Basic emotes</li>
                        <li>• Subscriber badge</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium text-neon-green mb-2">Premium - $9.99/month</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• All Basic benefits</li>
                        <li>• Exclusive content</li>
                        <li>• Priority chat</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium text-neon-green mb-2">VIP - $24.99/month</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• All Premium benefits</li>
                        <li>• Monthly video calls</li>
                        <li>• Custom requests</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Gift className="h-5 w-5" />
                  Donations and Tips
                </CardTitle>
                <CardDescription className="text-cream/70">Receive direct support from your community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">One-Time Donations</h4>
                  <p className="text-cream/80 mb-3">Allow viewers to send one-time tips to support your content.</p>
                  <ul className="text-cream/70 space-y-1">
                    <li>• Custom donation amounts</li>
                    <li>• Personal messages with donations</li>
                    <li>• On-screen alerts and notifications</li>
                    <li>• Goal tracking for special projects</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Super Chat and Highlights</h4>
                  <p className="text-cream/80 mb-3">Paid messages that stand out in chat during live streams.</p>
                  <ul className="text-cream/70 space-y-1">
                    <li>• Highlighted messages in chat</li>
                    <li>• Longer message duration</li>
                    <li>• Different colors based on amount</li>
                    <li>• Audio notifications for large tips</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Star className="h-5 w-5" />
                  Sponsorships and Brand Deals
                </CardTitle>
                <CardDescription className="text-cream/70">Partner with brands for sponsored content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Types of Sponsorships</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-cream">Product Placements</h5>
                      <p className="text-cream/80 text-sm">Feature products naturally in your content</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream">Dedicated Segments</h5>
                      <p className="text-cream/80 text-sm">Create specific content sections for sponsors</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream">Stream Overlays</h5>
                      <p className="text-cream/80 text-sm">Display sponsor logos and information on screen</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Finding Sponsors</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• Build a media kit with your statistics</li>
                    <li>• Reach out to relevant brands in your niche</li>
                    <li>• Join influencer marketing platforms</li>
                    <li>• Network with other creators and agencies</li>
                    <li>• Maintain authenticity and audience trust</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <TrendingUp className="h-5 w-5" />
                  Merchandise and Products
                </CardTitle>
                <CardDescription className="text-cream/70">Sell branded merchandise to your fans</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Popular Merchandise</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-cream/80 space-y-1">
                      <li>• T-shirts and hoodies</li>
                      <li>• Mugs and water bottles</li>
                      <li>• Stickers and pins</li>
                      <li>• Phone cases and accessories</li>
                    </ul>
                    <ul className="text-cream/80 space-y-1">
                      <li>• Gaming peripherals</li>
                      <li>• Art prints and posters</li>
                      <li>• Custom keycaps</li>
                      <li>• Limited edition items</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Print-on-Demand Services</h4>
                  <p className="text-cream/80 mb-3">
                    Use print-on-demand services to sell merchandise without inventory management.
                  </p>
                  <ul className="text-cream/70 space-y-1">
                    <li>• Teespring/Spring</li>
                    <li>• Printful</li>
                    <li>• Redbubble</li>
                    <li>• Streamlabs Merch</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <DollarSign className="h-5 w-5" />
                  Revenue Sharing and Payouts
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Understand how earnings work on our platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Revenue Split</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium text-neon-green mb-2">Subscriptions</h5>
                      <p className="text-cream/80">70% to creator, 30% to platform</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium text-neon-green mb-2">Donations</h5>
                      <p className="text-cream/80">95% to creator, 5% processing fee</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Payout Information</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• Minimum payout threshold: $100</li>
                    <li>• Monthly payout schedule</li>
                    <li>• Multiple payment methods available</li>
                    <li>• Tax documentation provided</li>
                    <li>• Detailed earnings reports</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Shield className="h-5 w-5" />
                  Best Practices and Guidelines
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Monetize responsibly and maintain audience trust
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Transparency</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• Always disclose sponsored content</li>
                    <li>• Be honest about product experiences</li>
                    <li>• Maintain editorial independence</li>
                    <li>• Follow FTC guidelines for endorsements</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Audience First</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• Don't over-monetize your content</li>
                    <li>• Provide value before asking for support</li>
                    <li>• Listen to audience feedback</li>
                    <li>• Balance monetization with entertainment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-cream mb-4">Ready to grow your channel?</h3>
              <p className="text-cream/80 mb-6">
                Learn how to use analytics to understand your audience and optimize your growth.
              </p>
              <Button asChild className="bg-neon-green text-black hover:bg-neon-green/90">
                <Link href="/creator-resources/analytics">Analytics Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
