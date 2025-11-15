"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/auth-provider";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "@/store/actions";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const dispatch: any = useDispatch();

  const { token, loading } = useSelector((x: any) => x.AuthReducer);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords does not match");
      return;
    }

    if (!agreeTerms) {
      toast.error("You must agree to the terms and conditions");
      return;
    }

    dispatch(Auth.register({ username, email, password }));
  };

  useEffect(() => {
    if (token) {
      router.replace("/emailverification");
    }
  }, [token]);

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <Image
            src="/logo.png"
            alt="Green Dragon Den"
            width={80}
            height={80}
            className="mx-auto rounded"
          />
          <h1 className="text-3xl font-bold text-fhsb-cream">
            Create an account
          </h1>
          <p className="text-muted-foreground">
            Enter your information to get started
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="johndoe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreeTerms}
              onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              className="border-fhsb-green/30 data-[state=checked]:bg-fhsb-green data-[state=checked]:text-black"
            />
            <Label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <Link href="/terms" className="text-fhsb-green hover:underline">
                terms of service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-fhsb-green hover:underline">
                privacy policy
              </Link>
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <div className="text-center text-sm">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-fhsb-green hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
