import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, User, ImageIcon, Bell, Shield, Palette } from "lucide-react"

export default function ProfileSetupPage() {
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
            <h1 className="text-4xl font-bold mb-4">Setting Up Your Profile</h1>
            <p className="text-xl text-cream/80">Customize your profile to make it uniquely yours</p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <User className="h-5 w-5" />
                  Basic Profile Information
                </CardTitle>
                <CardDescription className="text-cream/70">Set up your basic profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Display Name</h4>
                  <p className="text-cream/80">
                    Choose how your name appears to other users. This can be different from your username.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Bio</h4>
                  <p className="text-cream/80">
                    Write a short description about yourself. Tell viewers what kind of content you enjoy or create.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Location</h4>
                  <p className="text-cream/80">
                    Optionally share your location to connect with local viewers and creators.
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                >
                  <Link href="/settings">Edit Profile</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <ImageIcon className="h-5 w-5" />
                  Profile Picture & Banner
                </CardTitle>
                <CardDescription className="text-cream/70">Add visual elements to your profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Profile Picture</h4>
                  <p className="text-cream/80 mb-2">
                    Upload a profile picture that represents you. Recommended size: 400x400 pixels.
                  </p>
                  <ul className="text-sm text-cream/70 space-y-1">
                    <li>• Supported formats: JPG, PNG, GIF</li>
                    <li>• Maximum file size: 5MB</li>
                    <li>• Square images work best</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Profile Banner</h4>
                  <p className="text-cream/80 mb-2">
                    Add a banner image to make your profile stand out. Recommended size: 1920x480 pixels.
                  </p>
                  <ul className="text-sm text-cream/70 space-y-1">
                    <li>• Supported formats: JPG, PNG</li>
                    <li>• Maximum file size: 10MB</li>
                    <li>• Wide aspect ratio recommended</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Choose what notifications you want to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Email Notifications</h4>
                  <ul className="text-cream/80 space-y-2">
                    <li>• New followers</li>
                    <li>• Stream announcements from followed channels</li>
                    <li>• Platform updates and news</li>
                    <li>• Security alerts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Push Notifications</h4>
                  <ul className="text-cream/80 space-y-2">
                    <li>• Live stream alerts</li>
                    <li>• Chat mentions</li>
                    <li>• New video uploads</li>
                  </ul>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                >
                  <Link href="/settings">Manage Notifications</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Shield className="h-5 w-5" />
                  Privacy Settings
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Control who can see your information and activity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Profile Visibility</h4>
                  <p className="text-cream/80">
                    Choose whether your profile is public or private. Public profiles can be found by anyone.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Activity Visibility</h4>
                  <p className="text-cream/80">
                    Control whether others can see your viewing history, followed channels, and activity.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Direct Messages</h4>
                  <p className="text-cream/80">
                    Choose who can send you direct messages: everyone, followers only, or no one.
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                >
                  <Link href="/account/privacy">Privacy Settings</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Palette className="h-5 w-5" />
                  Customization Options
                </CardTitle>
                <CardDescription className="text-cream/70">Personalize your viewing experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Theme Preferences</h4>
                  <p className="text-cream/80">
                    Choose between dark mode, light mode, or automatic theme switching based on your system settings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Language Settings</h4>
                  <p className="text-cream/80">
                    Set your preferred language for the interface and content recommendations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Content Preferences</h4>
                  <p className="text-cream/80">
                    Select your favorite categories and content types to improve recommendations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-cream mb-4">Ready to explore?</h3>
              <p className="text-cream/80 mb-6">
                Your profile is set up! Now learn how to find amazing content to watch.
              </p>
              <Button asChild className="bg-neon-green text-black hover:bg-neon-green/90">
                <Link href="/getting-started/finding-content">Next: Finding Content</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
