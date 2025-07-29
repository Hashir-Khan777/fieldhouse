import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, User, Bell, Shield, Palette, Globe } from "lucide-react"

export default function AccountSettingsPage() {
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
            <h1 className="text-4xl font-bold mb-4">Account Settings</h1>
            <p className="text-xl text-cream/80">Manage your account preferences and settings</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-gray-900">
              <TabsTrigger value="profile" className="data-[state=active]:bg-neon-green data-[state=active]:text-black">
                <User className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="data-[state=active]:bg-neon-green data-[state=active]:text-black"
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy" className="data-[state=active]:bg-neon-green data-[state=active]:text-black">
                <Shield className="h-4 w-4 mr-2" />
                Privacy
              </TabsTrigger>
              <TabsTrigger
                value="appearance"
                className="data-[state=active]:bg-neon-green data-[state=active]:text-black"
              >
                <Palette className="h-4 w-4 mr-2" />
                Appearance
              </TabsTrigger>
              <TabsTrigger
                value="language"
                className="data-[state=active]:bg-neon-green data-[state=active]:text-black"
              >
                <Globe className="h-4 w-4 mr-2" />
                Language
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-neon-green">Profile Information</CardTitle>
                  <CardDescription className="text-cream/70">Update your public profile information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-cream">
                        Username
                      </Label>
                      <Input
                        id="username"
                        placeholder="your_username"
                        className="bg-gray-800 border-gray-700 text-cream"
                      />
                      <p className="text-sm text-cream/60">Your unique identifier on the platform</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="display-name" className="text-cream">
                        Display Name
                      </Label>
                      <Input
                        id="display-name"
                        placeholder="Your Display Name"
                        className="bg-gray-800 border-gray-700 text-cream"
                      />
                      <p className="text-sm text-cream/60">How your name appears to others</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-cream">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-800 border-gray-700 text-cream"
                    />
                    <p className="text-sm text-cream/60">Used for account recovery and notifications</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-cream">
                      Bio
                    </Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell people about yourself..."
                      className="bg-gray-800 border-gray-700 text-cream min-h-[100px]"
                    />
                    <p className="text-sm text-cream/60">Describe yourself in 500 characters or less</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-cream">
                        Location
                      </Label>
                      <Input
                        id="location"
                        placeholder="City, Country"
                        className="bg-gray-800 border-gray-700 text-cream"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-cream">
                        Website
                      </Label>
                      <Input
                        id="website"
                        placeholder="https://yourwebsite.com"
                        className="bg-gray-800 border-gray-700 text-cream"
                      />
                    </div>
                  </div>

                  <Button className="bg-neon-green text-black hover:bg-neon-green/90">Save Profile Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-neon-green">Notification Preferences</CardTitle>
                  <CardDescription className="text-cream/70">
                    Choose what notifications you want to receive
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-cream mb-4">Email Notifications</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-cream">New Followers</Label>
                          <p className="text-sm text-cream/60">Get notified when someone follows your channel</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-cream">Stream Announcements</Label>
                          <p className="text-sm text-cream/60">Notifications about followed channels going live</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-cream">Platform Updates</Label>
                          <p className="text-sm text-cream/60">Important platform news and feature updates</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cream mb-4">Push Notifications</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-cream">Live Stream Alerts</Label>
                          <p className="text-sm text-cream/60">Instant notifications when followed channels go live</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-cream">Chat Mentions</Label>
                          <p className="text-sm text-cream/60">When someone mentions you in chat</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-cream">New Video Uploads</Label>
                          <p className="text-sm text-cream/60">When followed channels upload new videos</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  <Button className="bg-neon-green text-black hover:bg-neon-green/90">
                    Save Notification Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-neon-green">Privacy Settings</CardTitle>
                  <CardDescription className="text-cream/70">
                    Control your privacy and data sharing preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-cream mb-4">Profile Visibility</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-cream">Public Profile</Label>
                          <p className="text-sm text-cream/60">Allow your profile to be found by anyone</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-cream">Show Following List</Label>
                          <p className="text-sm text-cream/60">Let others see who you follow</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-cream">Show Followers List</Label>
                          <p className="text-sm text-cream/60">Let others see your followers</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cream mb-4">Activity Privacy</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-cream">Show Viewing History</Label>
                          <p className="text-sm text-cream/60">Display your recently watched content</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-cream">Online Status</Label>
                          <p className="text-sm text-cream/60">Show when you're online to others</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cream mb-4">Direct Messages</h4>
                    <div className="space-y-2">
                      <Label className="text-cream">Who can message you</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-cream">
                          <SelectValue placeholder="Select who can message you" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="everyone">Everyone</SelectItem>
                          <SelectItem value="followers">Followers only</SelectItem>
                          <SelectItem value="none">No one</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button className="bg-neon-green text-black hover:bg-neon-green/90">Save Privacy Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appearance">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-neon-green">Appearance Settings</CardTitle>
                  <CardDescription className="text-cream/70">Customize how the platform looks for you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-cream mb-4">Theme</h4>
                    <div className="space-y-2">
                      <Label className="text-cream">Color Theme</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-cream">
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="dark">Dark (Current)</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="auto">Auto (System)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cream mb-4">Display Options</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-cream">Compact Mode</Label>
                          <p className="text-sm text-cream/60">Show more content in less space</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-cream">Auto-play Videos</Label>
                          <p className="text-sm text-cream/60">Automatically play videos when browsing</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-cream">Show Thumbnails</Label>
                          <p className="text-sm text-cream/60">Display video thumbnails in lists</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Button className="bg-neon-green text-black hover:bg-neon-green/90">Save Appearance Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="language">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-neon-green">Language & Region</CardTitle>
                  <CardDescription className="text-cream/70">
                    Set your language and regional preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-cream">Interface Language</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-cream">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                          <SelectItem value="ja">日本語</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-cream">Content Language</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-cream">
                          <SelectValue placeholder="Select content language" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="all">All Languages</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-cream">Time Zone</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-cream">
                          <SelectValue placeholder="Select time zone" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="utc">UTC</SelectItem>
                          <SelectItem value="est">Eastern Time</SelectItem>
                          <SelectItem value="pst">Pacific Time</SelectItem>
                          <SelectItem value="cet">Central European Time</SelectItem>
                          <SelectItem value="jst">Japan Standard Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-cream">Date Format</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-cream">
                          <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button className="bg-neon-green text-black hover:bg-neon-green/90">Save Language Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
