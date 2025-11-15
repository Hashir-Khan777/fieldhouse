"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Users, ShieldCheck } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 shadow-md p-4 border-r-2 border-gray-400">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Green Dragon Den"
            width={40}
            height={40}
            className="rounded-sm"
          />
          <span className="text-xl font-bold text-primary logo-text hidden md:inline-block">
            Green Dragon Den{" "}
            <span className="text-secondary text-sm">BETA</span>
          </span>
        </Link>
        <h1 className="text-2xl font-bold my-6">Admin Panel</h1>
        <nav className="space-y-5">
          <Link
            href="/admin"
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/admin" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            href="/admin/users"
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/admin/users"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            <Users size={18} />
            Users
          </Link>

          <Link
            href="/admin/verification"
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/admin/verification"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            <ShieldCheck size={18} />
            Verification
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
