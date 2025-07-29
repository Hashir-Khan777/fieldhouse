import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-neon-green">Terms of Service</h1>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                By accessing and using Fieldhouse Stadium, you accept and agree to be bound by the terms and provision
                of this agreement.
              </p>
              <p>
                These Terms of Service ("Terms") govern your use of our website and services. Please read them
                carefully.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">2. Use License</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                Permission is granted to temporarily download one copy of the materials on Fieldhouse Stadium for
                personal, non-commercial transitory viewing only.
              </p>
              <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">3. User Accounts</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                To access certain features of our service, you may be required to create an account. You are responsible
                for maintaining the confidentiality of your account credentials.
              </p>
              <p>
                You agree to provide accurate, current, and complete information during the registration process and to
                update such information to keep it accurate, current, and complete.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">4. Content Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                Users are responsible for all content they upload, stream, or share on our platform. Content must comply
                with our Community Guidelines and applicable laws.
              </p>
              <p>We reserve the right to remove content that violates our terms or community standards.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">5. Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                service.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">6. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                In no event shall Fieldhouse Stadium or its suppliers be liable for any damages arising out of the use
                or inability to use the materials on our website.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">7. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                If you have any questions about these Terms of Service, please contact us at legal@fieldhousestadium.com
              </p>
              <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
