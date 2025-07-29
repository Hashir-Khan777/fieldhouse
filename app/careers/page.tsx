import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Careers() {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our frontend team to build the next generation of streaming experiences.",
    },
    {
      title: "Community Manager",
      department: "Community",
      location: "New York, NY",
      type: "Full-time",
      description: "Help grow and nurture our creator and viewer communities.",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Scale our infrastructure to support millions of concurrent viewers.",
    },
    {
      title: "Content Moderator",
      department: "Trust & Safety",
      location: "Remote",
      type: "Part-time",
      description: "Ensure our platform remains safe and welcoming for all users.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-neon-green">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Help us build the future of live streaming and connect creators with their communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-neon-green mb-2">50+</div>
                <p className="text-gray-300">Team Members</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-neon-green mb-2">15+</div>
                <p className="text-gray-300">Countries</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-neon-green mb-2">100%</div>
                <p className="text-gray-300">Remote Friendly</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900 border-gray-800 mb-12">
            <CardHeader>
              <CardTitle className="text-neon-green">Why Work With Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neon-green mb-2">Competitive Benefits</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Health, dental, and vision insurance</li>
                    <li>• 401(k) with company matching</li>
                    <li>• Unlimited PTO policy</li>
                    <li>• Professional development budget</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-neon-green mb-2">Great Culture</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Remote-first work environment</li>
                    <li>• Flexible working hours</li>
                    <li>• Regular team events and retreats</li>
                    <li>• Collaborative and inclusive culture</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-neon-green">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-cream">{position.title}</h3>
                          <Badge variant="outline" className="bg-neon-green/10 text-neon-green border-neon-green">
                            {position.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-gray-400 mb-3">
                          <span>{position.department}</span>
                          <span>•</span>
                          <span>{position.location}</span>
                        </div>
                        <p className="text-gray-300">{position.description}</p>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <Button className="bg-neon-green text-black hover:bg-neon-green/90">Apply Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-neon-green">Don't See Your Role?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                We're always looking for talented individuals to join our team. Send us your resume and tell us how
                you'd like to contribute to Fieldhouse Stadium.
              </p>
              <Button className="bg-neon-green text-black hover:bg-neon-green/90">Send General Application</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
