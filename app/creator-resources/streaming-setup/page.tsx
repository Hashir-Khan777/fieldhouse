import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Monitor, Camera, Settings, Wifi, HardDrive } from "lucide-react"

export default function StreamingSetupPage() {
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
              <Link href="/creator-resources" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Creator Resources
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4">Streaming Setup Guide</h1>
            <p className="text-xl text-cream/80">Complete guide to setting up your streaming equipment and software</p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Monitor className="h-5 w-5" />
                  Hardware Requirements
                </CardTitle>
                <CardDescription className="text-cream/70">Essential equipment for streaming</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Minimum System Requirements</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• CPU: Intel i5-4590 / AMD FX 8350 or better</li>
                    <li>• RAM: 8GB minimum, 16GB recommended</li>
                    <li>• GPU: NVIDIA GTX 1060 / AMD RX 580 or better</li>
                    <li>• Storage: SSD recommended for better performance</li>
                    <li>• Internet: Upload speed of at least 5 Mbps</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Recommended Hardware</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-cream mb-2">Camera</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• Logitech C920/C922 (Budget)</li>
                        <li>• Elgato Facecam (Mid-range)</li>
                        <li>• Sony A7 III (Professional)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream mb-2">Microphone</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• Audio-Technica ATR2100x-USB</li>
                        <li>• Blue Yeti (Popular choice)</li>
                        <li>• Shure SM7B (Professional)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Settings className="h-5 w-5" />
                  Streaming Software
                </CardTitle>
                <CardDescription className="text-cream/70">
                  Choose and configure your streaming software
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Popular Streaming Software</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-cream">OBS Studio (Free)</h5>
                      <p className="text-cream/80 text-sm">
                        Most popular free streaming software with extensive customization options.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream">Streamlabs OBS (Free)</h5>
                      <p className="text-cream/80 text-sm">
                        User-friendly version of OBS with built-in widgets and alerts.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream">XSplit (Paid)</h5>
                      <p className="text-cream/80 text-sm">
                        Professional streaming software with advanced features and support.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Basic OBS Setup</h4>
                  <ol className="text-cream/80 space-y-2">
                    <li>1. Download and install OBS Studio</li>
                    <li>2. Run the Auto-Configuration Wizard</li>
                    <li>3. Add your video source (camera/screen capture)</li>
                    <li>4. Add your audio sources (microphone/desktop audio)</li>
                    <li>5. Configure your stream settings</li>
                    <li>6. Test your setup before going live</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Wifi className="h-5 w-5" />
                  Stream Settings and Quality
                </CardTitle>
                <CardDescription className="text-cream/70">Optimize your stream quality and settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Recommended Stream Settings</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-cream mb-2">1080p 60fps (High Quality)</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• Resolution: 1920x1080</li>
                        <li>• Bitrate: 6000 kbps</li>
                        <li>• Frame Rate: 60 fps</li>
                        <li>• Encoder: x264 or NVENC</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream mb-2">720p 30fps (Standard)</h5>
                      <ul className="text-cream/80 text-sm space-y-1">
                        <li>• Resolution: 1280x720</li>
                        <li>• Bitrate: 3000 kbps</li>
                        <li>• Frame Rate: 30 fps</li>
                        <li>• Encoder: x264</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Audio Settings</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• Sample Rate: 44.1 kHz or 48 kHz</li>
                    <li>• Bitrate: 128 kbps (recommended)</li>
                    <li>• Channels: Stereo</li>
                    <li>• Format: AAC</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <Camera className="h-5 w-5" />
                  Scene Setup and Layout
                </CardTitle>
                <CardDescription className="text-cream/70">Create engaging stream layouts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Essential Scene Elements</h4>
                  <ul className="text-cream/80 space-y-2">
                    <li>
                      • <strong>Webcam:</strong> Position your camera prominently
                    </li>
                    <li>
                      • <strong>Game/Content:</strong> Main content area
                    </li>
                    <li>
                      • <strong>Chat:</strong> Visible chat overlay (optional)
                    </li>
                    <li>
                      • <strong>Alerts:</strong> Follow/donation notifications
                    </li>
                    <li>
                      • <strong>Branding:</strong> Logo, social media handles
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Scene Templates</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• Starting Soon screen</li>
                    <li>• Main streaming scene</li>
                    <li>• Break/BRB screen</li>
                    <li>• Ending screen</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neon-green">
                  <HardDrive className="h-5 w-5" />
                  Testing and Troubleshooting
                </CardTitle>
                <CardDescription className="text-cream/70">Ensure everything works before going live</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Pre-Stream Checklist</h4>
                  <ul className="text-cream/80 space-y-1">
                    <li>• Test your internet connection speed</li>
                    <li>• Check audio levels (microphone and game audio)</li>
                    <li>• Verify camera positioning and lighting</li>
                    <li>• Test all scenes and transitions</li>
                    <li>• Ensure all overlays and alerts work</li>
                    <li>• Do a test stream to check quality</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-cream mb-2">Common Issues and Solutions</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-cream">Dropped Frames</h5>
                      <p className="text-cream/80 text-sm">
                        Lower bitrate, check internet connection, or upgrade hardware
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream">Audio Desync</h5>
                      <p className="text-cream/80 text-sm">Adjust audio delay in OBS settings or check audio drivers</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-cream">High CPU Usage</h5>
                      <p className="text-cream/80 text-sm">
                        Use hardware encoding (NVENC/AMD VCE) or lower stream quality
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-cream mb-4">Ready to start streaming?</h3>
              <p className="text-cream/80 mb-6">Learn about monetization options to start earning from your content.</p>
              <Button asChild className="bg-neon-green text-black hover:bg-neon-green/90">
                <Link href="/creator-resources/monetization">Explore Monetization</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
