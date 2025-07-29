import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Eye, Users, MessageCircle, BarChart, Download } from "lucide-react"

export default function PrivacyPage() {
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
            <h1 className="text-4xl font-bold mb-4">Privacy Settings</h1>
            <p className="text-xl text-cream/80">Control your privacy and data sharing preferences</p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Eye className="h-5 w-5" />
                  Profile Visibility
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Control who can see your profile and information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-cream">Public Profile</Label>
                      <p className="text-sm text-cream/60">Allow your profile to be discoverable by anyone</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-cream">Show Real Name</Label>
                      <p className="text-sm text-cream/60">Display your real name on your profile</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-cream">Show Email Address</Label>
                      <p className="text-sm text-cream/60">Make your email visible to other users</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-cream">Show Location</Label>
                      <p className="text-sm text-cream/60">Display your location on your profile</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-cream">Show Join Date</Label>
                      <p className="text-sm text-cream/60">Display when you joined the platform</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Users className="h-5 w-5" />
                  Social Privacy
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Manage your social connections and activity visibility
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
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

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-cream">Show Viewing History</Label>
                      <p className="text-sm text-cream/60">Display your recently watched content</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-cream">Show Online Status</Label>
                      <p className="text-sm text-cream/60">Let others see when you're online</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-cream">Show Activity Feed</Label>
                      <p className="text-sm text-cream/60">Display your recent platform activity</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <MessageCircle className="h-5 w-5" />
                  Communication Privacy
                </CardTitle>
                <CardDescription className="text-cream/70">Control who can contact you and how</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-cream">Who can send you direct messages</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-cream">
                        <SelectValue placeholder="Select who can message you" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="everyone">Everyone</SelectItem>
                        <SelectItem value="followers">Followers only</SelectItem>
                        <SelectItem value="mutual">Mutual followers only</SelectItem>
                        <SelectItem value="none">No one</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-cream">Who can mention you in chat</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-cream">
                        <SelectValue placeholder="Select mention permissions" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="everyone">Everyone</SelectItem>
                        <SelectItem value="followers">Followers only</SelectItem>
                        <SelectItem value="none">No one</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-cream">Read Receipts</Label>
                      <p className="text-sm text-cream/60">Show when you've read messages</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-cream">Message Requests</Label>
                      <p className="text-sm text-cream/60">Receive message requests from non-followers</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <BarChart className="h-5 w-5" />
                  Data and Analytics
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Control how your data is used for analytics and recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-cream">Personalized Recommendations</Label>
                      <p className="text-sm text-cream/60">Use your activity to improve content recommendations</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-cream">Analytics Tracking</Label>
                      <p className="text-sm text-cream/60">Allow anonymous usage analytics to improve the platform</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-cream">Advertising Personalization</Label>
                      <p className="text-sm text-cream/60">Show personalized ads based on your interests</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-cream">Third-party Data Sharing</Label>
                      <p className="text-sm text-cream/60">Share anonymized data with trusted partners</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Download className="h-5 w-5" />
                  Data Management
                </CardTitle>
                <CardDescription className="text-cream/70">Download or delete your personal data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-cream mb-2">Download Your Data</h4>
                    <p className="text-cream/80 text-sm mb-4">
                      Get a copy of all your data including profile information, viewing history, and account activity.
                    </p>
                    <Button
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      Request Data Download
                    </Button>
                  </div>

                  <div className="p-4 bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-cream mb-2">Delete Specific Data</h4>
                    <p className="text-cream/80 text-sm mb-4">
                      Remove specific types of data from your account while keeping your profile active.
                    </p>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-black text-white border-gray-600 hover:bg-gray-700 mr-2"
                      >
                        Clear Viewing History
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-black text-white border-gray-600 hover:bg-gray-700 mr-2"
                      >
                        Clear Search History
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-black text-white border-gray-600 hover:bg-gray-700"
                      >
                        Clear Chat History
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-2">Delete All Data</h4>
                    <p className="text-cream/80 text-sm mb-4">
                      Permanently delete all your data and close your account. This action cannot be undone.
                    </p>
                    <Button
                      variant="outline"
                      className="bg-black text-red-400 border-red-500 hover:bg-red-500 hover:text-white"
                    >
                      Delete Account & Data
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-neon-green">Privacy Policy</CardTitle>
                <CardDescription className="text-cream/70">Learn more about how we handle your data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-cream/80 mb-4">
                  For detailed information about our privacy practices, data collection, and your rights, please review
                  our comprehensive privacy policy.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                >
                  <Link href="/privacy">Read Privacy Policy</Link>
                </Button>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button className="bg-neon-green text-black hover:bg-neon-green/90">Save All Privacy Settings</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
