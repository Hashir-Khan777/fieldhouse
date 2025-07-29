import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-neon-green">Cookie Policy</h1>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">What Are Cookies</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our
                website. They are widely used to make websites work more efficiently and provide information to website
                owners.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">How We Use Cookies</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>We use cookies for several purposes:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Performance cookies: Help us understand how visitors interact with our website</li>
                <li>Functionality cookies: Remember your preferences and settings</li>
                <li>Targeting cookies: Used to deliver relevant advertisements</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-neon-green">Session Cookies</h4>
                  <p>These are temporary cookies that expire when you close your browser.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neon-green">Persistent Cookies</h4>
                  <p>These cookies remain on your device until they expire or you delete them.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neon-green">First-Party Cookies</h4>
                  <p>Set by our website directly.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neon-green">Third-Party Cookies</h4>
                  <p>Set by third-party services we use, such as analytics providers.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Managing Cookies</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                You can control and manage cookies in various ways. Most browsers allow you to refuse or accept cookies,
                delete existing cookies, and set preferences for certain websites.
              </p>
              <p>
                Please note that if you choose to block cookies, some features of our website may not function properly.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>If you have questions about our use of cookies, please contact us at privacy@fieldhousestadium.com</p>
              <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
