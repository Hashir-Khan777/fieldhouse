import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, Settings, DollarSign, BarChart, BookOpen, Users, Lightbulb, Shield } from "lucide-react"

export default function CreatorResourcesPage() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Creator Resources</h1>
            <p className="text-xl text-cream/80">
              Everything you need to start and grow your content creation journey on Fieldhouse Stadium
            </p>
          </div>

          <div className="grid gap-8">
            <section>
              <h2 className="text-2xl font-bold mb-6 text-neon-green">Getting Started</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <Video className="h-5 w-5 text-neon-green" />
                      Streaming Setup Guide
                    </CardTitle>
                    <CardDescription className="text-cream/70">Complete technical setup for streaming</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Learn how to set up your streaming software, hardware, and optimize your stream quality.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/creator-resources/streaming-setup">Setup Guide</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <Settings className="h-5 w-5 text-neon-green" />
                      Channel Optimization
                    </CardTitle>
                    <CardDescription className="text-cream/70">Make your channel stand out</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Tips for creating an attractive channel layout, writing compelling descriptions, and more.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/creator-resources/channel-optimization">Optimize Channel</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <BookOpen className="h-5 w-5 text-neon-green" />
                      Content Creation Tips
                    </CardTitle>
                    <CardDescription className="text-cream/70">
                      Create engaging content that viewers love
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Learn best practices for creating entertaining and engaging content for your audience.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/creator-resources/content-tips">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-neon-green">Growing Your Channel</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <BarChart className="h-5 w-5 text-neon-green" />
                      Analytics and Growth
                    </CardTitle>
                    <CardDescription className="text-cream/70">
                      Understand your audience and grow your channel
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Learn how to use analytics to understand your audience and make data-driven decisions for growth.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/creator-resources/analytics">View Analytics Guide</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <Users className="h-5 w-5 text-neon-green" />
                      Community Building
                    </CardTitle>
                    <CardDescription className="text-cream/70">Build and engage with your community</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Strategies for building a loyal community and engaging with your viewers effectively.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/creator-resources/community-building">Build Community</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-neon-green">Monetization</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <DollarSign className="h-5 w-5 text-neon-green" />
                      Monetization Options
                    </CardTitle>
                    <CardDescription className="text-cream/70">Ways to earn from your content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Explore different ways to monetize your content including subscriptions, donations, and
                      sponsorships.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/creator-resources/monetization">Explore Options</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <Lightbulb className="h-5 w-5 text-neon-green" />
                      Sponsorship Guide
                    </CardTitle>
                    <CardDescription className="text-cream/70">Work with brands and sponsors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Learn how to find, negotiate, and work with sponsors while maintaining authenticity.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/creator-resources/sponsorships">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <BarChart className="h-5 w-5 text-neon-green" />
                      Revenue Analytics
                    </CardTitle>
                    <CardDescription className="text-cream/70">
                      Track your earnings and optimize revenue
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Understand your revenue streams and optimize your monetization strategy.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/creator-resources/revenue-analytics">View Analytics</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-neon-green">Policies and Guidelines</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <Shield className="h-5 w-5 text-neon-green" />
                      Community Guidelines
                    </CardTitle>
                    <CardDescription className="text-cream/70">Rules and best practices for creators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Understand our community guidelines and content policies to keep your channel in good standing.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/community-guidelines">Read Guidelines</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <Shield className="h-5 w-5 text-neon-green" />
                      Copyright and DMCA
                    </CardTitle>
                    <CardDescription className="text-cream/70">
                      Protect yourself and respect others' content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Learn about copyright laws, fair use, and how to handle DMCA claims properly.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/dmca">DMCA Info</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-neon-green">Support and Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-cream">Creator Support</CardTitle>
                    <CardDescription className="text-cream/70">Get help when you need it</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Access our dedicated creator support team for technical issues and questions.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/support">Get Support</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-cream">Creator Community</CardTitle>
                    <CardDescription className="text-cream/70">Connect with other creators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Join our creator community to share tips, collaborate, and support each other.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/creators">Join Community</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-cream">Creator Newsletter</CardTitle>
                    <CardDescription className="text-cream/70">Stay updated with platform changes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Subscribe to our creator newsletter for updates, tips, and new feature announcements.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/contact">Subscribe</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
