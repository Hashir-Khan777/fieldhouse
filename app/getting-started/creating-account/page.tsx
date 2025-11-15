import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Mail, Lock, User, ArrowRight } from "lucide-react"

export default function CreatingAccountPage() {
  return (
    <div className="container px-4 py-6 md:px-6 space-y-8">
      <div className="text-center space-y-4 max-w-3xl mx-auto py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-fhsb-cream">Creating an Account</h1>
        <p className="text-xl text-muted-foreground">Get started with Green Dragon Den in just a few simple steps</p>
      </div>

      {/* Quick Start */}
      <Alert className="border-fhsb-green/30 bg-fhsb-green/10">
        <CheckCircle className="h-4 w-4 text-fhsb-green" />
        <AlertDescription className="text-fhsb-cream">
          <strong>Quick Start:</strong> Ready to join?{" "}
          <Link href="/register" className="text-fhsb-green hover:underline">
            Create your account now
          </Link>{" "}
          and come back to this guide if you need help.
        </AlertDescription>
      </Alert>

      {/* Step by Step Guide */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-fhsb-cream">Step-by-Step Guide</h2>

        <div className="grid gap-6">
          {/* Step 1 */}
          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-fhsb-green text-black flex items-center justify-center font-bold">
                  1
                </div>
                <CardTitle className="text-fhsb-cream">Visit the Registration Page</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Click the "Sign Up" button in the top navigation or go directly to the registration page.
              </p>
              <Link href="/register">
                <Button className="bg-fhsb-green text-black hover:bg-fhsb-green/90">
                  Go to Registration <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-fhsb-green text-black flex items-center justify-center font-bold">
                  2
                </div>
                <CardTitle className="text-fhsb-cream">Fill Out Your Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Provide the required information to create your account:</p>
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-fhsb-green" />
                  <div>
                    <p className="font-medium text-fhsb-cream">Username</p>
                    <p className="text-sm text-muted-foreground">Choose a unique username (3-20 characters)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-fhsb-green" />
                  <div>
                    <p className="font-medium text-fhsb-cream">Email Address</p>
                    <p className="text-sm text-muted-foreground">We'll use this to verify your account</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-fhsb-green" />
                  <div>
                    <p className="font-medium text-fhsb-cream">Password</p>
                    <p className="text-sm text-muted-foreground">At least 8 characters with numbers and letters</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-fhsb-green text-black flex items-center justify-center font-bold">
                  3
                </div>
                <CardTitle className="text-fhsb-cream">Verify Your Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                After submitting the form, check your email for a verification link. Click the link to activate your
                account.
              </p>
              <Alert className="border-yellow-500/30 bg-yellow-500/10">
                <AlertCircle className="h-4 w-4 text-yellow-500" />
                <AlertDescription className="text-fhsb-cream">
                  <strong>Tip:</strong> Check your spam folder if you don't see the verification email within a few
                  minutes.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="bg-card border-fhsb-green/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-fhsb-green text-black flex items-center justify-center font-bold">
                  4
                </div>
                <CardTitle className="text-fhsb-cream">Complete Your Profile</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Once verified, you can log in and complete your profile with additional information like your bio,
                profile picture, and preferences.
              </p>
              <Link href="/getting-started/profile-setup">
                <Button
                  variant="outline"
                  className="border-fhsb-green/50 text-fhsb-cream hover:bg-fhsb-green hover:text-black bg-transparent"
                >
                  Profile Setup Guide <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Requirements */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <CardTitle className="text-fhsb-cream">Account Requirements</CardTitle>
          <CardDescription>What you need to create an account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-fhsb-green" />
              <span className="text-fhsb-cream">Must be 13 years or older</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-fhsb-green" />
              <span className="text-fhsb-cream">Valid email address</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-fhsb-green" />
              <span className="text-fhsb-cream">Unique username (not already taken)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-fhsb-green" />
              <span className="text-fhsb-cream">Strong password (8+ characters)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-fhsb-green" />
              <span className="text-fhsb-cream">Agreement to Terms of Service and Privacy Policy</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card className="bg-card border-fhsb-green/20">
        <CardHeader>
          <CardTitle className="text-fhsb-cream">Common Issues</CardTitle>
          <CardDescription>Solutions to common registration problems</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-fhsb-cream mb-2">Username already taken</h4>
              <p className="text-muted-foreground text-sm">
                Try adding numbers or underscores to your preferred username, or choose a variation.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-fhsb-cream mb-2">Email verification not received</h4>
              <p className="text-muted-foreground text-sm">
                Check your spam folder, wait a few minutes, or request a new verification email.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-fhsb-cream mb-2">Password requirements not met</h4>
              <p className="text-muted-foreground text-sm">
                Ensure your password has at least 8 characters and includes both letters and numbers.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-fhsb-cream mb-2">Email already in use</h4>
              <p className="text-muted-foreground text-sm">
                This email is already associated with an account. Try logging in or use the password reset feature.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-black to-fhsb-darkgreen rounded-xl border border-fhsb-green/30 p-6 md:p-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-fhsb-cream">What's Next?</h2>
          <p className="text-muted-foreground md:text-lg">
            Once you've created your account, here are some recommended next steps:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <Link href="/getting-started/profile-setup">
              <Button
                variant="outline"
                className="w-full border-fhsb-green/50 text-fhsb-cream hover:bg-fhsb-green hover:text-black bg-transparent"
              >
                Set Up Profile
              </Button>
            </Link>
            <Link href="/getting-started/finding-content">
              <Button
                variant="outline"
                className="w-full border-fhsb-green/50 text-fhsb-cream hover:bg-fhsb-green hover:text-black bg-transparent"
              >
                Find Content
              </Button>
            </Link>
            <Link href="/getting-started/following-channels">
              <Button
                variant="outline"
                className="w-full border-fhsb-green/50 text-fhsb-cream hover:bg-fhsb-green hover:text-black bg-transparent"
              >
                Follow Channels
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
