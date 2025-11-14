import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Settings, Search, Heart, Video, DollarSign, BarChart3, Shield, Eye, Smartphone } from "lucide-react"

export default function GettingStartedPage() {
  return (
    <div className="container px-4 py-6 md:px-6 space-y-8">
      <div className="text-center space-y-4 max-w-3xl mx-auto py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-fhsb-cream">Getting Started</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to know to get the most out of Green Dragon Den
        </p>
      </div>

      {/* For Viewers */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-fhsb-cream">For Viewers</h2>
          <p className="text-muted-foreground">Start watching and engaging with sports content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader className="text-center">
              <UserPlus className="h-12 w-12 text-fhsb-green mx-auto mb-2" />
              <CardTitle className="text-fhsb-cream">Creating an Account</CardTitle>
              <CardDescription>Get started with your Green Dragon Den account</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/getting-started/creating-account">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Learn More</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader className="text-center">
              <Settings className="h-12 w-12 text-fhsb-green mx-auto mb-2" />
              <CardTitle className="text-fhsb-cream">Setting Up Your Profile</CardTitle>
              <CardDescription>Customize your profile and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/getting-started/profile-setup">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Learn More</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader className="text-center">
              <Search className="h-12 w-12 text-fhsb-green mx-auto mb-2" />
              <CardTitle className="text-fhsb-cream">Finding Content</CardTitle>
              <CardDescription>Discover streams and videos you'll love</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/getting-started/finding-content">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Learn More</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader className="text-center">
              <Heart className="h-12 w-12 text-fhsb-green mx-auto mb-2" />
              <CardTitle className="text-fhsb-cream">Following Channels</CardTitle>
              <CardDescription>Stay updated with your favorite creators</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/getting-started/following-channels">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* For Creators */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-fhsb-cream">For Creators</h2>
          <p className="text-muted-foreground">Build your audience and grow your channel</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader className="text-center">
              <Video className="h-12 w-12 text-fhsb-green mx-auto mb-2" />
              <CardTitle className="text-fhsb-cream">Creator Resources</CardTitle>
              <CardDescription>Everything you need to start creating</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/creator-resources">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Explore</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader className="text-center">
              <Settings className="h-12 w-12 text-fhsb-green mx-auto mb-2" />
              <CardTitle className="text-fhsb-cream">Streaming Setup</CardTitle>
              <CardDescription>Configure your streaming software and hardware</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/creator-resources/streaming-setup">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Learn More</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader className="text-center">
              <DollarSign className="h-12 w-12 text-fhsb-green mx-auto mb-2" />
              <CardTitle className="text-fhsb-cream">Monetization</CardTitle>
              <CardDescription>Turn your passion into income</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/creator-resources/monetization">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Learn More</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader className="text-center">
              <BarChart3 className="h-12 w-12 text-fhsb-green mx-auto mb-2" />
              <CardTitle className="text-fhsb-cream">Analytics & Growth</CardTitle>
              <CardDescription>Understand your audience and grow</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/creator-resources/analytics">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Account & Security */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-fhsb-cream">Account & Security</h2>
          <p className="text-muted-foreground">Manage your account and keep it secure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader className="text-center">
              <Settings className="h-12 w-12 text-fhsb-green mx-auto mb-2" />
              <CardTitle className="text-fhsb-cream">Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/account/settings">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Manage</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-fhsb-green mx-auto mb-2" />
              <CardTitle className="text-fhsb-cream">Security</CardTitle>
              <CardDescription>Password and two-factor authentication</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/account/security">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Secure</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader className="text-center">
              <Eye className="h-12 w-12 text-fhsb-green mx-auto mb-2" />
              <CardTitle className="text-fhsb-cream">Privacy Settings</CardTitle>
              <CardDescription>Control your privacy and data</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/account/privacy">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Configure</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader className="text-center">
              <Smartphone className="h-12 w-12 text-fhsb-green mx-auto mb-2" />
              <CardTitle className="text-fhsb-cream">Mobile App</CardTitle>
              <CardDescription>Download our mobile apps</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Coming Soon</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gradient-to-r from-black to-fhsb-darkgreen rounded-xl border border-fhsb-green/30 p-6 md:p-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-fhsb-cream">Need More Help?</h2>
          <p className="text-muted-foreground md:text-lg">
            Can't find what you're looking for? Check out our help center or contact support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/help">
              <Button className="w-full sm:w-auto bg-fhsb-green text-black hover:bg-fhsb-green/90">Help Center</Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-fhsb-green/50 text-fhsb-cream hover:bg-fhsb-green hover:text-black bg-transparent"
              >
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
