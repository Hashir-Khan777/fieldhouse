import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Settings() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-neon-green">Settings</h1>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-gray-900">
              <TabsTrigger value="profile" className="data-[state=active]:bg-neon-green data-[state=active]:text-black">
                Profile
              </TabsTrigger>
              <TabsTrigger value="account" className="data-[state=active]:bg-neon-green data-[state=active]:text-black">
                Account
              </TabsTrigger>
              <TabsTrigger value="privacy" className="data-[state=active]:bg-neon-green data-[state=active]:text-black">
                Privacy
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="data-[state=active]:bg-neon-green data-[state=active]:text-black"
              >
                Notifications
              </TabsTrigger>
              <TabsTrigger
                value="streaming"
                className="data-[state=active]:bg-neon-green data-[state=active]:text-black"
              >
                Streaming
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-neon-green">Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="user123" className="bg-gray-800 border-gray-700 text-cream" />
                    </div>
                    <div>
                      <Label htmlFor="display-name">Display Name</Label>
                      <Input
                        id="display-name"
                        defaultValue="User 123"
                        className="bg-gray-800 border-gray-700 text-cream"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell viewers about yourself..."
                      className="bg-gray-800 border-gray-700 text-cream"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="City, Country"
                      className="bg-gray-800 border-gray-700 text-cream"
                    />
                  </div>

                  <Button className="bg-neon-green text-black hover:bg-neon-green/90">Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-neon-green">Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="user@example.com"
                      className="bg-gray-800 border-gray-700 text-cream"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="bg-gray-800 border-gray-700 text-cream"
                    />
                  </div>

                  <div>
                    <Label htmlFor="language">Language</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-cream">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="bg-neon-green text-black hover:bg-neon-green/90">Update Account</Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-neon-green">Change Password</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" className="bg-gray-800 border-gray-700 text-cream" />
                  </div>

                  <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" className="bg-gray-800 border-gray-700 text-cream" />
                  </div>

                  <div>
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" className="bg-gray-800 border-gray-700 text-cream" />
                  </div>

                  <Button className="bg-neon-green text-black hover:bg-neon-green/90">Change Password</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-neon-green">Privacy Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="profile-visibility">Public Profile</Label>
                      <p className="text-sm text-gray-400">Allow others to find and view your profile</p>
                    </div>
                    <Switch id="profile-visibility" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="show-followers">Show Follower Count</Label>
                      <p className="text-sm text-gray-400">Display your follower count publicly</p>
                    </div>
                    <Switch id="show-followers" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="allow-messages">Allow Direct Messages</Label>
                      <p className="text-sm text-gray-400">Let other users send you private messages</p>
                    </div>
                    <Switch id="allow-messages" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="show-activity">Show Activity Status</Label>
                      <p className="text-sm text-gray-400">Let others see when you're online</p>
                    </div>
                    <Switch id="show-activity" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-neon-green">Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-gray-400">Receive notifications via email</p>
                    </div>
                    <Switch id="email-notifications" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                      <p className="text-sm text-gray-400">Receive push notifications on your devices</p>
                    </div>
                    <Switch id="push-notifications" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="follower-notifications">New Followers</Label>
                      <p className="text-sm text-gray-400">Get notified when someone follows you</p>
                    </div>
                    <Switch id="follower-notifications" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="stream-notifications">Stream Notifications</Label>
                      <p className="text-sm text-gray-400">Get notified when followed streamers go live</p>
                    </div>
                    <Switch id="stream-notifications" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="comment-notifications">Comments & Mentions</Label>
                      <p className="text-sm text-gray-400">Get notified when someone comments or mentions you</p>
                    </div>
                    <Switch id="comment-notifications" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="streaming" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-neon-green">Streaming Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="stream-title">Default Stream Title</Label>
                    <Input
                      id="stream-title"
                      placeholder="Enter default stream title..."
                      className="bg-gray-800 border-gray-700 text-cream"
                    />
                  </div>

                  <div>
                    <Label htmlFor="stream-category">Default Category</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-cream">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="gaming">Gaming</SelectItem>
                        <SelectItem value="music">Music</SelectItem>
                        <SelectItem value="art">Art</SelectItem>
                        <SelectItem value="talk">Talk Shows</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="stream-quality">Stream Quality</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-cream">
                        <SelectValue placeholder="Select quality" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="1080p">1080p (Full HD)</SelectItem>
                        <SelectItem value="720p">720p (HD)</SelectItem>
                        <SelectItem value="480p">480p (SD)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="auto-record">Auto-Record Streams</Label>
                      <p className="text-sm text-gray-400">Automatically save recordings of your streams</p>
                    </div>
                    <Switch id="auto-record" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="chat-moderation">Enable Chat Moderation</Label>
                      <p className="text-sm text-gray-400">Automatically moderate chat messages</p>
                    </div>
                    <Switch id="chat-moderation" />
                  </div>

                  <Button className="bg-neon-green text-black hover:bg-neon-green/90">Save Streaming Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
