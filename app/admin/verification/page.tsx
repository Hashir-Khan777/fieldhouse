"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CheckCircle2, XCircle, Eye } from "lucide-react"

const VerificationPage = () => {
    // Mock data
    const requests = [
        { id: 1, name: "Hania Imran", email: "hania@example.com", document: "ID Card", status: "Pending", submitted: "2025-08-23" },
        { id: 2, name: "Ali Khan", email: "ali@example.com", document: "Passport", status: "Approved", submitted: "2025-08-20" },
        { id: 3, name: "Sara Ahmed", email: "sara@example.com", document: "Driver License", status: "Rejected", submitted: "2025-08-18" },
    ]

    return (
        <div className="p-6 space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">User Verifications</h1>
            </div>

            {/* Filters */}
            <Card>
                <CardHeader>
                    <CardTitle>Filters</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4">
                    <Input placeholder="Search by name or email..." className="w-full md:w-1/3" />

                    <Select>
                        <SelectTrigger className="w-full md:w-48">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button variant="secondary" className="bg-transparent text-red-600 hover:bg-transparent">
                        Reset
                    </Button>
                </CardContent>
            </Card>

            {/* Verification Requests Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Verification Requests</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Document</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Submitted</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {requests.map((req) => (
                                <TableRow key={req.id}>
                                    <TableCell>{req.id}</TableCell>
                                    <TableCell>{req.name}</TableCell>
                                    <TableCell>{req.email}</TableCell>
                                    <TableCell>{req.document}</TableCell>
                                    <TableCell>
                                        {/* <Badge
                                            className={
                                                req.status === "Approved"
                                                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                                                    : req.status === "Rejected"
                                                        ? "bg-red-100 text-red-800 hover:bg-red-100"
                                                        : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                            }
                                        >
                                            {req.status}
                                        </Badge> */}
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${req.status === "Approved"
                                                ? "bg-green-500/20 text-green-400"
                                                : req.status === "Pending"
                                                    ? "bg-yellow-500/20 text-yellow-400"
                                                    : "bg-red-500/20 text-red-400"
                                                }`}
                                        >
                                            {req.status}
                                        </span>
                                    </TableCell>
                                    <TableCell>{req.submitted}</TableCell>
                                    <TableCell className="flex justify-end gap-2">
                                        {/* Approve */}
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button size="sm" variant="ghost" className="hover:bg-transparent hover:text-green-500 text-green-600">
                                                        <CheckCircle2 className="h-4 w-4" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Approve</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>

                                        {/* Reject */}
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button size="sm" variant="ghost" className="hover:bg-transparent hover:text-red-500 text-red-600">
                                                        <XCircle className="h-4 w-4" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Reject</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>

                                        {/* View */}
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button size="sm" variant="ghost" className="hover:bg-transparent hover:text-blue-500 text-blue-600">
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>View Document</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

export default VerificationPage
