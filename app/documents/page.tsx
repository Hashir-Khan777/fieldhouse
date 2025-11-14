"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { DocumentActions, ImageActions } from "@/store/actions";

export default function DocumentVerificationPage() {
  const router = useRouter();
  const dispatch: any = useDispatch();

  const { user, loading } = useSelector((x: any) => x.AuthReducer);
  const { image } = useSelector((x: any) => x.ImageReducer);
  const { docs } = useSelector((x: any) => x.DocumentReducer);

  const [field, SetField] = useState("");
  const [form, setForm] = useState({
    frontid: "",
    backid: "",
    photo: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(DocumentActions.uploadDocs(form));
  };

  const handleUpload = async (e: any) => {
    SetField(e.target.name);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      dispatch(
        ImageActions.uploadImage({ image: reader.result, folder: "documents" })
      );
    };
  };

  useEffect(() => {
    if (docs) {
      router.replace("/");
    }
  }, [docs]);

  useEffect(() => {
    if (image) {
      setForm({ ...form, [field]: image?.secure_url });
    }
  }, [image]);

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
            Verify Your Documents
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center items-center gap-20">
            <div className="w-full h-full">
              <Label htmlFor="cardfront">ID Card Front</Label>
              <div className="relative w-full h-full cursor-pointer">
                <Image
                  src={form.frontid ? form.frontid : "/placeholder.svg"}
                  alt={"title"}
                  width={200}
                  height={200}
                  id="cardfront"
                  className="object-cover transition-transform group-hover:scale-105 cursor-pointer mt-3"
                />
                <input
                  type="file"
                  name="frontid"
                  onChange={handleUpload}
                  className="absolute cursor-pointer"
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
            <div className="w-full h-full">
              <Label htmlFor="cardback">ID Card Back</Label>
              <div className="relative w-full h-full cursor-pointer">
                <Image
                  src={form.backid ? form.backid : "/placeholder.svg"}
                  alt={"title"}
                  width={200}
                  height={200}
                  id="cardfront"
                  className="object-cover transition-transform group-hover:scale-105 cursor-pointer mt-3"
                />
                <input
                  type="file"
                  onChange={handleUpload}
                  name="backid"
                  className="absolute cursor-pointer"
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
            <div className="w-full h-full">
              <Label htmlFor="faceselfie">Face Selfie</Label>
              <div className="relative w-full h-full cursor-pointer">
                <Image
                  src={form.photo ? form.photo : "/placeholder.svg"}
                  alt={"title"}
                  width={200}
                  height={200}
                  id="cardfront"
                  className="object-cover transition-transform group-hover:scale-105 cursor-pointer mt-3"
                />
                <input
                  type="file"
                  onChange={handleUpload}
                  name="photo"
                  className="absolute cursor-pointer"
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
          </div>
          {/* <div className="space-y-2">
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
          </div> */}

          <Button
            type="submit"
            className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90"
            disabled={loading}
          >
            {loading ? "Verifieng documents..." : "Verify Documents"}
          </Button>
        </form>
      </div>
    </div>
  );
}
