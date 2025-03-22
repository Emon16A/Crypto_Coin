"use client"

import CryptoTable from "@/components/crypto-table"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Star } from 'lucide-react'
import { Suspense, useState } from "react"

export default function PricesPage() {
    const [activeTab, setActiveTab] = useState("all")

    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header title="Prices" walletConnected={false} />

                <main className="flex-1 p-6">
                    {/* Watchlist Banner */}
                    <div className="bg-white border rounded-lg p-6 mb-6 flex items-center justify-between">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                                <Star className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Follow your favorite cryptos with Watchlist</h3>
                                <p className="text-gray-500 text-sm">
                                    Tap the <Star className="w-4 h-4 inline text-gray-400" /> at the right of an asset's list to add to your Watchlist.
                                </p>
                            </div>
                        </div>
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">View the market</Button>
                    </div>

                    {/* Search and Tabs */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input placeholder="Search crypto" className="pl-10 h-10 border-gray-200" />
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                onClick={() => setActiveTab("watchlist")}
                                className={`gap-2 h-10 px-4 ${activeTab === "watchlist" ? "bg-orange-50 text-orange-500 border-orange-200" : "text-gray-500"}`}
                            >
                                <Star className="h-5 w-5 text-orange-500" />
                                Watchlist
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setActiveTab("portfolio")}
                                className={`gap-2 h-10 px-4 ${activeTab === "portfolio" ? "bg-orange-50 text-orange-500 border-orange-200" : "text-gray-500"}`}
                            >
                                <svg
                                    className="h-5 w-5 text-orange-500"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M12 13H14M12 17H14M18 13H20M18 17H20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Portfolio
                            </Button>
                        </div>
                    </div>

                    {/* Crypto Table */}
                    <div className="mt-6 overflow-x-auto">
                        <Suspense fallback={<div>Loading crypto table...</div>}>
                            <CryptoTable />
                        </Suspense>
                    </div>
                </main>
            </div>
        </div>
    )
}
