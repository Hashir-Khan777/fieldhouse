import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-neon-green">Privacy Policy</h1>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                We collect information you provide directly to us, such as when you create an account, make a purchase,
                or contact us for support.
              </p>
              <h4 className="font-semibold text-neon-green">Personal Information:</h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Name and email address</li>
                <li>Username and password</li>
                <li>Profile information</li>
                <li>Payment information</li>
                <li>Communications with us</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, investigate, and prevent fraudulent transactions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy.
              </p>
              <p>We may share your information in the following situations:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>In connection with a business transfer</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Data Security</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>If you have questions about this Privacy Policy, please contact us at privacy@fieldhousestadium.com</p>
              <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
