// app/layout.tsx (❌ no "use client" here)
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { AuthProvider } from "@/components/auth-provider"
import ReduxProvider from "@/lib/reduxprovider"
import { ToastContainer } from "react-toastify"
import "./globals.css"
import LayoutWrapper from "@/components/layout-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Green Dragon Den",
  description: "Live streaming platform for sports and events",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black min-h-screen`}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <AuthProvider>
              <LayoutWrapper>{children}</LayoutWrapper>
            </AuthProvider>
          </ThemeProvider>
        </ReduxProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
