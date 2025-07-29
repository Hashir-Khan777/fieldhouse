import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus, Settings, Search, Heart, Video, DollarSign, Shield } from "lucide-react"

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Getting Started with Fieldhouse Stadium</h1>
            <p className="text-xl text-cream/80">
              Everything you need to know to start watching and creating content on our platform
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 text-neon-green">For Viewers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <UserPlus className="h-5 w-5 text-neon-green" />
                      Creating an Account
                    </CardTitle>
                    <CardDescription className="text-cream/70">Learn how to sign up and get started</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Get started with your Fieldhouse Stadium journey by creating your account.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/getting-started/creating-account">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <Settings className="h-5 w-5 text-neon-green" />
                      Setting Up Your Profile
                    </CardTitle>
                    <CardDescription className="text-cream/70">Customize your profile and preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">Make your profile unique and set your viewing preferences.</p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/getting-started/profile-setup">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <Search className="h-5 w-5 text-neon-green" />
                      Finding Content
                    </CardTitle>
                    <CardDescription className="text-cream/70">Discover streams and videos you'll love</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Learn how to find and discover amazing content on our platform.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/getting-started/finding-content">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <Heart className="h-5 w-5 text-neon-green" />
                      Following Channels
                    </CardTitle>
                    <CardDescription className="text-cream/70">
                      Stay connected with your favorite creators
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream/80 mb-4">
                      Learn how to follow channels and never miss your favorite content.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/getting-started/following-channels">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-neon-green">For Creators</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <Video className="h-5 w-5 text-neon-green" />
                      Creator Resources
                    </CardTitle>
                    <CardDescription className="text-cream/70">Essential tools and guides for creators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/creator-resources">Explore</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <Settings className="h-5 w-5 text-neon-green" />
                      Streaming Setup
                    </CardTitle>
                    <CardDescription className="text-cream/70">Technical setup and streaming guide</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/creator-resources/streaming-setup">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <DollarSign className="h-5 w-5 text-neon-green" />
                      Monetization
                    </CardTitle>
                    <CardDescription className="text-cream/70">Ways to earn from your content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/creator-resources/monetization">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-neon-green">Account & Security</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <Settings className="h-5 w-5 text-neon-green" />
                      Account Settings
                    </CardTitle>
                    <CardDescription className="text-cream/70">Manage your account preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/account/settings">Manage</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <Shield className="h-5 w-5 text-neon-green" />
                      Security Settings
                    </CardTitle>
                    <CardDescription className="text-cream/70">Password and security options</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/account/security">Secure Account</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-cream">
                      <Shield className="h-5 w-5 text-neon-green" />
                      Privacy Settings
                    </CardTitle>
                    <CardDescription className="text-cream/70">Control your privacy preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/account/privacy">Manage Privacy</Link>
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
