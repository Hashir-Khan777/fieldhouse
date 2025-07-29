import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-neon-green">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-neon-green">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" className="bg-gray-800 border-gray-700 text-cream" />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" className="bg-gray-800 border-gray-700 text-cream" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-cream">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="content">Content Issue</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="press">Press Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      className="bg-gray-800 border-gray-700 text-cream"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <Button className="w-full bg-neon-green text-black hover:bg-neon-green/90">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-neon-green">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neon-green">General Support</h4>
                    <p>support@fieldhousestadium.com</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neon-green">Business Inquiries</h4>
                    <p>business@fieldhousestadium.com</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neon-green">Press & Media</h4>
                    <p>press@fieldhousestadium.com</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neon-green">Legal</h4>
                    <p>legal@fieldhousestadium.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-neon-green">Response Times</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">General Inquiries</h4>
                    <p className="text-gray-400">24-48 hours</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Technical Support</h4>
                    <p className="text-gray-400">12-24 hours</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Urgent Issues</h4>
                    <p className="text-gray-400">2-6 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-neon-green">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday - Sunday: 10:00 AM - 4:00 PM EST</p>
                  <p className="text-gray-400 text-sm mt-2">Emergency support available 24/7</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
