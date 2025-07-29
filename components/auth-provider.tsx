"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  username: string
  email: string
  avatar: string
  isStreamer: boolean
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (username: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("fhsb-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // This would normally call an API endpoint
    // For now, we'll simulate a successful login
    setIsLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockUser: User = {
      id: "user-1",
      username: email.split("@")[0],
      email,
      avatar: `/placeholder.svg?height=200&width=200`,
      isStreamer: true,
    }

    setUser(mockUser)
    localStorage.setItem("fhsb-user", JSON.stringify(mockUser))
    setIsLoading(false)
  }

  const register = async (username: string, email: string, password: string) => {
    // This would normally call an API endpoint
    // For now, we'll simulate a successful registration
    setIsLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockUser: User = {
      id: "user-1",
      username,
      email,
      avatar: `/placeholder.svg?height=200&width=200`,
      isStreamer: false,
    }

    setUser(mockUser)
    localStorage.setItem("fhsb-user", JSON.stringify(mockUser))
    setIsLoading(false)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("fhsb-user")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
