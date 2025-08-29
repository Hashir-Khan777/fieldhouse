// app/admin/page.tsx
"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, UserX, Clock } from "lucide-react"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts"

const data = [
  { name: "Verified", value: 980, color: "#22c55e" },
  { name: "Pending", value: 209, color: "#eab308" },
  { name: "Rejected", value: 56, color: "#ef4444" },
]

const recentUsers = [
  { name: "John Doe", email: "john@example.com", status: "Verified" },
  { name: "Jane Smith", email: "jane@example.com", status: "Pending" },
  { name: "Alex Kim", email: "alex@example.com", status: "Rejected" },
]

const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-black min-h-screen text-white">
      {/* Page Title */}
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>

      {/* Stats Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Total Users
            </CardTitle>
            <Users className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Verified
            </CardTitle>
            <UserCheck className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">980</div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Rejected
            </CardTitle>
            <UserX className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56</div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Pending
            </CardTitle>
            <Clock className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">209</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts + Recent Users */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Verification Chart */}
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-300">
              Verification Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Users */}
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-300">
              Recent Users
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentUsers.map((user, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b border-neutral-800 pb-2 last:border-0 last:pb-0"
              >
                <div>
                  <p className="text-sm font-medium text-gray-200">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    user.status === "Verified"
                      ? "bg-green-500/20 text-green-400"
                      : user.status === "Pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {user.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-300">
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">Admin approved John Doe</p>
            <span className="text-xs text-gray-500">2 mins ago</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">Admin rejected Jane Smith</p>
            <span className="text-xs text-gray-500">10 mins ago</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">New user registered: Alex</p>
            <span className="text-xs text-gray-500">30 mins ago</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminDashboard
