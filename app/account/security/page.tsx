import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Shield, Key, Smartphone, AlertTriangle, CheckCircle } from "lucide-react"

export default function SecurityPage() {
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
            <h1 className="text-4xl font-bold mb-4">Security Settings</h1>
            <p className="text-xl text-cream/80">Protect your account with advanced security features</p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Key className="h-5 w-5" />
                  Password Management
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Update your password and manage password security
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password" className="text-cream">
                      Current Password
                    </Label>
                    <Input id="current-password" type="password" className="bg-gray-800 border-gray-700 text-cream" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password" className="text-cream">
                      New Password
                    </Label>
                    <Input id="new-password" type="password" className="bg-gray-800 border-gray-700 text-cream" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-cream">
                      Confirm New Password
                    </Label>
                    <Input id="confirm-password" type="password" className="bg-gray-800 border-gray-700 text-cream" />
                  </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-cream mb-2">Password Requirements</h4>
                  <ul className="text-cream/80 space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-neon-green" />
                      At least 8 characters long
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-neon-green" />
                      Contains uppercase and lowercase letters
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-neon-green" />
                      Contains at least one number
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-neon-green" />
                      Contains at least one special character
                    </li>
                  </ul>
                </div>

                <Button className="bg-neon-green text-black hover:bg-neon-green/90">Update Password</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Smartphone className="h-5 w-5" />
                  Two-Factor Authentication
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Add an extra layer of security to your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-cream">Two-Factor Authentication</h4>
                    <p className="text-cream/70 text-sm">Secure your account with 2FA</p>
                  </div>
                  <Switch />
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-cream">Setup Methods</h4>

                  <div className="space-y-3">
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <h5 className="font-medium text-cream mb-2">Authenticator App</h5>
                      <p className="text-cream/80 text-sm mb-3">
                        Use apps like Google Authenticator, Authy, or 1Password
                      </p>
                      <Button
                        variant="outline"
                        className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                      >
                        Setup Authenticator
                      </Button>
                    </div>

                    <div className="p-4 bg-gray-800 rounded-lg">
                      <h5 className="font-medium text-cream mb-2">SMS Verification</h5>
                      <p className="text-cream/80 text-sm mb-3">Receive verification codes via text message</p>
                      <div className="flex gap-3">
                        <Input placeholder="Phone number" className="bg-gray-700 border-gray-600 text-cream flex-1" />
                        <Button
                          variant="outline"
                          className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                        >
                          Add Phone
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-800 rounded-lg">
                      <h5 className="font-medium text-cream mb-2">Backup Codes</h5>
                      <p className="text-cream/80 text-sm mb-3">Generate backup codes for account recovery</p>
                      <Button
                        variant="outline"
                        className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                      >
                        Generate Codes
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Shield className="h-5 w-5" />
                  Account Security
                </CardTitle>
                <CardDescription className="text-cream/70">Monitor and manage your account security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-cream mb-4">Recent Activity</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div>
                        <p className="text-cream font-medium">Login from Chrome on Windows</p>
                        <p className="text-cream/70 text-sm">New York, NY • 2 hours ago</p>
                      </div>
                      <span className="text-neon-green text-sm">Current session</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div>
                        <p className="text-cream font-medium">Login from Mobile App</p>
                        <p className="text-cream/70 text-sm">New York, NY • 1 day ago</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-black text-white border-red-500 hover:bg-red-500 hover:text-white"
                      >
                        Revoke
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-4">Security Options</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-cream">Login Notifications</Label>
                        <p className="text-sm text-cream/60">Get notified of new login attempts</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-cream">Suspicious Activity Alerts</Label>
                        <p className="text-sm text-cream/60">Alert me of unusual account activity</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-cream">Password Change Notifications</Label>
                        <p className="text-sm text-cream/60">Notify me when password is changed</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <AlertTriangle className="h-5 w-5" />
                  Account Recovery
                </CardTitle>
                <CardDescription className="text-cream/70">Set up account recovery options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-cream mb-4">Recovery Email</h4>
                  <div className="flex gap-3">
                    <Input
                      placeholder="recovery@example.com"
                      className="bg-gray-800 border-gray-700 text-cream flex-1"
                    />
                    <Button
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      Update
                    </Button>
                  </div>
                  <p className="text-sm text-cream/60 mt-2">
                    This email will be used for password resets and account recovery
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-4">Security Questions</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-cream">What was the name of your first pet?</Label>
                      <Input placeholder="Enter answer" className="bg-gray-800 border-gray-700 text-cream" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-cream">What city were you born in?</Label>
                      <Input placeholder="Enter answer" className="bg-gray-800 border-gray-700 text-cream" />
                    </div>
                  </div>
                </div>

                <Button className="bg-neon-green text-black hover:bg-neon-green/90">Save Recovery Options</Button>
              </CardContent>
            </Card>

            <Card className="bg-red-900/20 border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-400">
                  <AlertTriangle className="h-5 w-5" />
                  Danger Zone
                </CardTitle>
                <CardDescription className="text-cream/70">Irreversible account actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-cream">Delete Account</h4>
                    <p className="text-cream/70 text-sm">Permanently delete your account and all data</p>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-black text-red-400 border-red-500 hover:bg-red-500 hover:text-white"
                  >
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
