import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Mail, User, Lock } from "lucide-react"

export default function CreatingAccountPage() {
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
              <Link href="/getting-started" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Getting Started
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4">Creating Your Account</h1>
            <p className="text-xl text-cream/80">Get started with Fieldhouse Stadium in just a few simple steps</p>
          </div>

          <div className="grid gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-neon-green">Step-by-Step Account Creation</CardTitle>
                <CardDescription className="text-cream/70">Follow these steps to create your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-neon-green text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream mb-2">Visit the Registration Page</h3>
                    <p className="text-cream/80 mb-3">
                      Click the "Sign Up" button in the top right corner of any page, or visit the registration page
                      directly.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/register">Go to Registration</Link>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-neon-green text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream mb-2">Fill Out Your Information</h3>
                    <p className="text-cream/80 mb-3">Provide the required information to create your account:</p>
                    <ul className="space-y-2 text-cream/80">
                      <li className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-neon-green" />
                        Email address (must be valid for verification)
                      </li>
                      <li className="flex items-center gap-2">
                        <User className="h-4 w-4 text-neon-green" />
                        Username (unique identifier for your account)
                      </li>
                      <li className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-neon-green" />
                        Strong password (at least 8 characters)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-neon-green text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream mb-2">Verify Your Email</h3>
                    <p className="text-cream/80">
                      Check your email inbox for a verification link. Click the link to activate your account.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-neon-green text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream mb-2">Complete Your Profile</h3>
                    <p className="text-cream/80 mb-3">
                      Once verified, you can complete your profile setup and start exploring!
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                    >
                      <Link href="/getting-started/profile-setup">Profile Setup Guide</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-neon-green">Account Requirements</CardTitle>
                <CardDescription className="text-cream/70">
                  What you need to know before creating your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-neon-green" />
                  <span className="text-cream">Must be 13 years or older</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-neon-green" />
                  <span className="text-cream">Valid email address required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-neon-green" />
                  <span className="text-cream">Username must be unique and appropriate</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-neon-green" />
                  <span className="text-cream">Agree to Terms of Service and Privacy Policy</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-neon-green">Troubleshooting</CardTitle>
                <CardDescription className="text-cream/70">Common issues and solutions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cream mb-2">Email verification not received?</h4>
                  <p className="text-cream/80">
                    Check your spam folder, or request a new verification email from the login page.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Username already taken?</h4>
                  <p className="text-cream/80">Try adding numbers or underscores to make your username unique.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cream mb-2">Need help?</h4>
                  <p className="text-cream/80 mb-2">
                    Contact our support team if you're having trouble creating your account.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-black text-white border-neon-green hover:bg-neon-green hover:text-black"
                  >
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
