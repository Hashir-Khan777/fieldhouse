import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DMCAPolicy() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-neon-green">DMCA Policy</h1>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Digital Millennium Copyright Act</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                Fieldhouse Stadium respects the intellectual property rights of others and expects our users to do the
                same. We respond to notices of alleged copyright infringement that comply with the Digital Millennium
                Copyright Act ("DMCA").
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Filing a DMCA Notice</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                If you believe that content on our platform infringes your copyright, please provide our designated
                agent with the following information:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>A physical or electronic signature of the copyright owner or authorized agent</li>
                <li>Identification of the copyrighted work claimed to have been infringed</li>
                <li>Identification of the material that is claimed to be infringing</li>
                <li>Your contact information (address, phone number, email)</li>
                <li>A statement of good faith belief that the use is not authorized</li>
                <li>A statement that the information is accurate and you are authorized to act</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Counter-Notification</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>If you believe your content was removed in error, you may file a counter-notification containing:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Your physical or electronic signature</li>
                <li>Identification of the material that was removed</li>
                <li>
                  A statement under penalty of perjury that you have a good faith belief the material was removed in
                  error
                </li>
                <li>Your contact information</li>
                <li>A statement consenting to jurisdiction of federal court</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Repeat Infringer Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>
                We will terminate the accounts of users who are determined to be repeat infringers of copyrighted
                material.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Designated Agent</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>Send DMCA notices to our designated agent:</p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p>
                  <strong>DMCA Agent</strong>
                </p>
                <p>Fieldhouse Stadium</p>
                <p>Email: dmca@fieldhousestadium.com</p>
                <p>Address: [Your Business Address]</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-neon-green">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="text-cream space-y-4">
              <p>For questions about this DMCA Policy, contact us at legal@fieldhousestadium.com</p>
              <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
