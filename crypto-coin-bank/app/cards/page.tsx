"use client"

import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Eye, Plus } from "lucide-react"
import { useState } from "react"

export default function CardsPage() {
    const [timeframe, setTimeframe] = useState("weekly")

    const toggleTimeframe = () => {
        setTimeframe((prev) => (prev === "weekly" ? "monthly" : "weekly"))
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
                {/* Sidebar for larger screens */}
                <div className="w-64 bg-white border-r p-4 hidden md:flex">
                    <Sidebar />
                </div>

                {/* Main content area */}
                <div className="flex-1 flex flex-col">
                    <Header title="Cards" walletConnected={true} />
                    <div className="p-6 flex-1 overflow-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card Preview */}
                            <div className="md:col-span-1">
                                <div className="flex flex-col gap-6">
                                    {/* Credit Card */}
                                    <div className="relative w-full aspect-[1.6/1] bg-blue-950 rounded-xl overflow-hidden p-5 flex flex-col justify-between">
                                        <div className="flex items-center justify-between">
                                            <div className="text-white font-medium">Coinbank</div>
                                            <div className="flex items-center gap-2">
                                                <svg
                                                    className="w-6 h-6 text-white"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2 9C2 8.44772 2.44772 8 3 8H21C21.5523 8 22 8.44772 22 9V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V9Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M22 12H2"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                                    <svg
                                                        className="w-5 h-5 text-white"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M12 6V12L16 14"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-white text-lg font-medium">**** 5461</div>

                                        <div className="flex items-center justify-between">
                                            <div className="text-white text-sm">Andre Samosa</div>
                                            <div className="flex items-center gap-2">
                                                <div className="text-white text-sm">$7,254.00</div>
                                                <Eye className="w-4 h-4 text-white" />
                                            </div>
                                        </div>

                                        <div className="absolute top-0 right-0 bg-violet-500/20 w-40 h-40 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                        <div className="absolute bottom-0 left-0 bg-violet-500/10 w-20 h-20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                                        <div className="absolute top-5 right-5 text-xs text-white/80 px-2 py-1 bg-white/10 rounded-md">
                                            Main Payment
                                        </div>
                                    </div>

                                    {/* Add New Card */}
                                    <div className="border border-dashed rounded-xl p-6 flex flex-col items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-4">
                                            <Plus className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <div className="text-orange-500 font-medium">Add A New Card</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card Details and Overview */}
                            <div className="md:col-span-2">
                                <div className="flex flex-col gap-6">
                                    {/* Card Details */}
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-center justify-between mb-6">
                                                <h2 className="text-xl font-bold">Card Details</h2>
                                                <Button variant="link" className="text-orange-500">
                                                    Edit
                                                </Button>
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                                {/* More content */}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Overview Balance */}
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-center justify-between mb-6">
                                                <h2 className="text-xl font-bold">Overview Balance</h2>
                                                <Button variant="outline" className="gap-2" onClick={toggleTimeframe}>
                                                    {timeframe}
                                                    <ChevronDown className="h-4 w-4" />
                                                </Button>
                                            </div>

                                            {/* More content */}
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
