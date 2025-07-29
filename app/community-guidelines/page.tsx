import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityGuidelines() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-neon-green">Community Guidelines</h1>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                Fieldhouse Stadium is committed to creating a safe, inclusive, and welcoming environment for all users.
                These guidelines help ensure our community remains a positive space for everyone.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Prohibited Content</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>The following types of content are not allowed on our platform:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Harassment, bullying, or threats</li>
                <li>Hate speech or discriminatory content</li>
                <li>Sexually explicit or suggestive content</li>
                <li>Violence or graphic content</li>
                <li>Spam or misleading content</li>
                <li>Copyright infringement</li>
                <li>Illegal activities or content</li>
                <li>Personal information sharing (doxxing)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Respectful Behavior</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>We expect all community members to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Treat others with respect and kindness</li>
                <li>Use appropriate language in all communications</li>
                <li>Respect different opinions and perspectives</li>
                <li>Follow the rules of individual streams and channels</li>
                <li>Report inappropriate behavior when you see it</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Content Creation Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>For streamers and content creators:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Create original, engaging content</li>
                <li>Respect copyright and intellectual property</li>
                <li>Moderate your chat and community appropriately</li>
                <li>Use accurate titles and descriptions</li>
                <li>Follow platform-specific streaming guidelines</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Enforcement</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>Violations of these guidelines may result in:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Content removal</li>
                <li>Temporary suspension</li>
                <li>Permanent account termination</li>
                <li>Reporting to law enforcement (when applicable)</li>
              </ul>
              <p>
                We review each case individually and consider factors such as severity, intent, and previous violations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Reporting</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                If you encounter content or behavior that violates these guidelines, please report it using our
                reporting tools or contact us at moderation@fieldhousestadium.com
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Appeals</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                If you believe your content or account was actioned in error, you can appeal the decision by contacting
                appeals@fieldhousestadium.com
              </p>
              <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
