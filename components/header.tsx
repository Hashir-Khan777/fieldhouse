"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "@/store/actions";
import Cookies from "universal-cookie";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const dispatch: any = useDispatch();
  const cookies = new Cookies();

  const { user } = useSelector((x: any) => x.AuthReducer);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (cookies.get("_user")) {
      dispatch(Auth.verifyUser());
    }
  }, [dispatch]);

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Fieldhouse Stadium Beta"
              width={40}
              height={40}
              className="rounded-sm"
            />
            <span className="text-xl font-bold text-primary logo-text hidden md:inline-block">
              Fieldhouse Stadium{" "}
              <span className="text-secondary text-sm">BETA</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 ml-6">
            <Link
              href="/admin"
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/admin"
                  ? "text-primary"
                  : "text-muted-foreground"
                }`}
            >
              Admin
            </Link>
            <Link
              href="/browse"
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/browse"
                  ? "text-primary"
                  : "text-muted-foreground"
                }`}
            >
              Browse
            </Link>
            <Link
              href="/categories"
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/categories"
                  ? "text-primary"
                  : "text-muted-foreground"
                }`}
            >
              Categories
            </Link>
            <Link
              href="https://dentreasurebox.myshopify.com/"
              target="_shop"
              className={`text-sm font-medium transition-colors hover:text-primary text-muted-foreground`}
            >
              Tresure Box
            </Link>
            {user?.verified && (
              <Link
                href="/following"
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/following"
                    ? "text-primary"
                    : "text-muted-foreground"
                  }`}
              >
                Following
              </Link>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          {user?.verified ? (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
              </Button>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs font-medium">
                  {user.username.substring(0, 2).toUpperCase()}
                </span>
              </div>
            </>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Log In
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="container py-4 px-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <nav className="flex flex-col space-y-3">
              <Link
                href="/admin"
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/admin"
                    ? "text-primary"
                    : "text-muted-foreground"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
              <Link
                href="/browse"
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/browse"
                    ? "text-primary"
                    : "text-muted-foreground"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Browse
              </Link>
              <Link
                href="/categories"
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/categories"
                    ? "text-primary"
                    : "text-muted-foreground"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="https://dentreasurebox.myshopify.com/"
                target="_shop"
                className={`text-sm font-medium transition-colors hover:text-primary text-muted-foreground`}
              >
                Tresure Box
              </Link>
              {user?.verified && (
                <Link
                  href="/following"
                  className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/following"
                      ? "text-primary"
                      : "text-muted-foreground"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Following
                </Link>
              )}
            </nav>

            {!user?.verified && (
              <div className="flex flex-col space-y-2">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
