import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Press() {
  const pressReleases = [
    {
      date: "2024-01-15",
      title: "Green Dragon Den Launches Revolutionary Live Streaming Platform",
      excerpt:
        "New platform combines cutting-edge technology with creator-focused features to transform the streaming landscape.",
    },
    {
      date: "2023-12-10",
      title: "Green Dragon Den Secures Series A Funding",
      excerpt:
        "Company raises $10M to accelerate platform development and creator support programs.",
    },
    {
      date: "2023-11-05",
      title: "Partnership Announcement with Major Gaming Publishers",
      excerpt:
        "Strategic partnerships bring exclusive content and enhanced gaming experiences to the platform.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-neon-green">
            Press Center
          </h1>

          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-neon-green">
                About Green Dragon Den
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Green Dragon Den is a next-generation live streaming platform
                that empowers creators to build communities and share their
                passions with the world. Founded in 2023, we're revolutionizing
                how people connect through live content.
              </p>
              <p>
                Our platform combines cutting-edge streaming technology with
                innovative community features, providing creators with the tools
                they need to succeed while giving viewers an unparalleled
                interactive experience.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-neon-green">Press Kit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Download our press kit containing logos, screenshots, and
                  brand assets.
                </p>
                <Button className="bg-neon-green text-black hover:bg-neon-green/90">
                  Download Press Kit
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-neon-green">Media Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <strong>Press Inquiries:</strong>
                </p>
                <p>press@fieldhousestadium.com</p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p>
                  <strong>Response Time:</strong> 24-48 hours
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-neon-green">Company Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neon-green mb-2">
                    Founded
                  </h4>
                  <p>2023</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neon-green mb-2">
                    Headquarters
                  </h4>
                  <p>New York, NY</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neon-green mb-2">
                    Employees
                  </h4>
                  <p>50+</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neon-green mb-2">
                    Funding
                  </h4>
                  <p>Series A</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-neon-green">
                Recent Press Releases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-800 pb-4 last:border-b-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-cream">
                        {release.title}
                      </h3>
                      <span className="text-sm text-gray-400">
                        {release.date}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2">{release.excerpt}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-black text-cream border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      Read More
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-neon-green">Leadership Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-cream">John Smith</h4>
                  <p className="text-neon-green">CEO & Co-Founder</p>
                  <p className="text-gray-300 text-sm">
                    Former VP of Product at major streaming platform
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream">Sarah Johnson</h4>
                  <p className="text-neon-green">CTO & Co-Founder</p>
                  <p className="text-gray-300 text-sm">
                    Former Principal Engineer at leading tech company
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
