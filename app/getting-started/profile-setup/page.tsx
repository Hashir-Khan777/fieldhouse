import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { User, Camera, Bell, Shield, Palette, Settings, Info } from "lucide-react"

export default function ProfileSetupPage() {
  return (
    <div className="container px-4 py-6 md:px-6 space-y-8">
      <div className="text-center space-y-4 max-w-3xl mx-auto py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-fhsb-cream">Setting Up Your Profile</h1>
        <p className="text-xl text-muted-foreground">
          Customize your Green Dragon Den profile to make it uniquely yours
        </p>
      </div>

      {/* Quick Access */}
      <Alert className="border-fhsb-green/30 bg-fhsb-green/10">
        <Settings className="h-4 w-4 text-fhsb-green" />
        <AlertDescription className="text-fhsb-cream">
          <strong>Quick Access:</strong> You can access your profile settings anytime from the{" "}
          <Link href="/settings" className="text-fhsb-green hover:underline">
            Settings page
          </Link>
          .
        </AlertDescription>
      </Alert>

      {/* Profile Information */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <User className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Profile Information</CardTitle>
          </div>
          <CardDescription>Basic information that appears on your profile</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Display Name</h4>
              <p className="text-sm text-muted-foreground">
                Your display name appears on your profile and in chat. It can be different from your username.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Bio</h4>
              <p className="text-sm text-muted-foreground">
                Tell viewers about yourself, your interests, and what kind of content you create or enjoy watching.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Location</h4>
              <p className="text-sm text-muted-foreground">
                Optional: Share your general location (city/country) to connect with local viewers.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Social Links</h4>
              <p className="text-sm text-muted-foreground">
                Add links to your other social media profiles, website, or YouTube channel.
              </p>
            </div>
          </div>
          <Link href="/settings">
            <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">Edit Profile Information</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Profile Picture */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Camera className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Profile Picture & Banner</CardTitle>
          </div>
          <CardDescription>Visual elements that represent you on the platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Profile Picture</h4>
              <p className="text-sm text-muted-foreground">
                Upload a square image (recommended: 400x400px) that represents you. This appears next to your name
                throughout the site.
              </p>
              <div className="text-xs text-muted-foreground">
                • Supported formats: JPG, PNG, GIF • Maximum size: 5MB • Recommended: 400x400px
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Profile Banner</h4>
              <p className="text-sm text-muted-foreground">
                Upload a banner image for your profile page (recommended: 1920x480px). This appears at the top of your
                profile.
              </p>
              <div className="text-xs text-muted-foreground">
                • Supported formats: JPG, PNG • Maximum size: 10MB • Recommended: 1920x480px
              </div>
            </div>
          </div>
          <Link href="/settings">
            <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">Upload Images</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Bell className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Notification Preferences</CardTitle>
          </div>
          <CardDescription>Control when and how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Email Notifications</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>• New followers</p>
                <p>• Stream going live (channels you follow)</p>
                <p>• Weekly digest of activity</p>
                <p>• Important account updates</p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Push Notifications</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>• Live stream alerts</p>
                <p>• Chat mentions</p>
                <p>• New followers</p>
                <p>• System announcements</p>
              </div>
            </div>
          </div>
          <Link href="/settings">
            <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">Configure Notifications</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Privacy Settings</CardTitle>
          </div>
          <CardDescription>Control who can see your information and interact with you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Profile Visibility</h4>
              <p className="text-sm text-muted-foreground">
                Choose whether your profile is public, visible to followers only, or private.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Activity Status</h4>
              <p className="text-sm text-muted-foreground">
                Control whether others can see when you're online or when you were last active.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Direct Messages</h4>
              <p className="text-sm text-muted-foreground">
                Choose who can send you direct messages: everyone, followers only, or no one.
              </p>
            </div>
          </div>
          <Link href="/account/privacy">
            <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">Manage Privacy</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Customization */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Palette className="h-6 w-6 text-fhsb-green" />
            <CardTitle className="text-fhsb-cream">Appearance & Customization</CardTitle>
          </div>
          <CardDescription>Personalize your Green Dragon Den experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Theme Preference</h4>
              <p className="text-sm text-muted-foreground">
                Choose between dark mode, light mode, or system default. Green Dragon Den looks great in dark mode!
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Language</h4>
              <p className="text-sm text-muted-foreground">Select your preferred language for the interface.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-fhsb-cream">Chat Settings</h4>
              <p className="text-sm text-muted-foreground">
                Customize chat appearance, font size, and behavior preferences.
              </p>
            </div>
          </div>
          <Link href="/settings">
            <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">Customize Appearance</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Tips */}
      <Alert className="border-blue-500/30 bg-blue-500/10">
        <Info className="h-4 w-4 text-blue-400" />
        <AlertDescription className="text-fhsb-cream">
          <strong>Pro Tips:</strong>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• A complete profile gets more followers and engagement</li>
            <li>• Use a clear, recognizable profile picture</li>
            <li>• Write a bio that shows your personality and interests</li>
            <li>• Keep your notification settings updated to stay engaged</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-black to-fhsb-darkgreen rounded-xl border border-fhsb-green/30 p-6 md:p-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-fhsb-cream">Profile Complete!</h2>
          <p className="text-muted-foreground md:text-lg">
            Now that your profile is set up, you're ready to explore and engage with the community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <Link href="/getting-started/finding-content">
              <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Find Content to Watch</Button>
            </Link>
            <Link href="/getting-started/following-channels">
              <Button
                variant="outline"
                className="w-full border-fhsb-green/50 text-fhsb-cream hover:bg-fhsb-green hover:text-black bg-transparent"
              >
                Follow Your First Channels
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
