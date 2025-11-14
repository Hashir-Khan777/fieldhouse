import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Support() {
  const faqs = [
    {
      question: "How do I start streaming on Green Dragon Den?",
      answer:
        "To start streaming, create an account, verify your email, and go to your dashboard. Click 'Go Live' and follow the setup instructions to configure your streaming software.",
    },
    {
      question: "What are the minimum requirements for streaming?",
      answer:
        "You need a stable internet connection (minimum 5 Mbps upload), a computer or mobile device, and streaming software like OBS Studio or our web-based streaming tool.",
    },
    {
      question: "How do I monetize my content?",
      answer:
        "Once you meet our Partner Program requirements, you can earn through subscriptions, donations, sponsorships, and our revenue sharing program.",
    },
    {
      question: "Can I stream copyrighted content?",
      answer:
        "No, streaming copyrighted content without permission is not allowed. This includes music, movies, TV shows, and other copyrighted material. Use royalty-free content or obtain proper licenses.",
    },
    {
      question: "How do I report inappropriate content or behavior?",
      answer:
        "Use the report button on any stream or content, or contact our moderation team at moderation@fieldhousestadium.com with details about the issue.",
    },
    {
      question: "What should I do if my account was suspended?",
      answer:
        "If your account was suspended, you'll receive an email with the reason. You can appeal the decision by contacting appeals@fieldhousestadium.com with your account details.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-neon-green">Support Center</h1>

          <div className="mb-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-neon-green">Search Help Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    placeholder="Search for help articles..."
                    className="bg-gray-800 border-gray-700 text-cream flex-1"
                  />
                  <Button className="bg-neon-green text-black hover:bg-neon-green/90">Search</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-neon-green">Getting Started</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="#" className="hover:text-neon-green">
                      Creating Your Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neon-green">
                      Setting Up Your Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neon-green">
                      Your First Stream
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neon-green">
                      Platform Overview
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-neon-green">Streaming</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="#" className="hover:text-neon-green">
                      Streaming Software Setup
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neon-green">
                      Stream Quality Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neon-green">
                      Managing Your Chat
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neon-green">
                      Stream Moderation
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-neon-green">Account & Billing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="#" className="hover:text-neon-green">
                      Account Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neon-green">
                      Subscription Management
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neon-green">
                      Payment Issues
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-neon-green">
                      Refund Requests
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-neon-green">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-cream hover:text-neon-green">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-neon-green">Contact Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Can't find what you're looking for? Our support team is here to help.</p>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong> support@fieldhousestadium.com
                  </p>
                  <p>
                    <strong>Response Time:</strong> 12-24 hours
                  </p>
                  <p>
                    <strong>Live Chat:</strong> Available 9 AM - 6 PM EST
                  </p>
                </div>
                <Button className="w-full bg-neon-green text-black hover:bg-neon-green/90">Start Live Chat</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-neon-green">Community Forum</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Connect with other creators and get help from the community.</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Ask questions and get answers</li>
                  <li>• Share tips and best practices</li>
                  <li>• Connect with other streamers</li>
                  <li>• Get platform updates</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full bg-black text-cream border-neon-green hover:bg-neon-green hover:text-black"
                >
                  Visit Forum
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
