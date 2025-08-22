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

export default function EmailVerificationPage() {
  const router = useRouter();
  const dispatch: any = useDispatch();

  const { user, loading } = useSelector((x: any) => x.AuthReducer);

  const [code, setCode] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!code) {
      toast.error("Please fill in all fields");
      return;
    }

    dispatch(Auth.verifyEmail({ code }));
  };

  useEffect(() => {
    if (user?.verified) {
      router.replace("/documents");
    }
  }, [user]);

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <Image
            src="/logo.png"
            alt="Fieldhouse Stadium Beta"
            width={80}
            height={80}
            className="mx-auto rounded"
          />
          <h1 className="text-3xl font-bold text-fhsb-cream">
            Verify Your Email
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Code</Label>
            <Input
              id="username"
              placeholder="123456"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              type="number"
              className="bg-muted/10 border-fhsb-green/30 focus-visible:ring-fhsb-green/50"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90"
            disabled={loading}
          >
            {loading ? "Verifieng email..." : "Verify Email"}
          </Button>
        </form>
      </div>
    </div>
  );
}
