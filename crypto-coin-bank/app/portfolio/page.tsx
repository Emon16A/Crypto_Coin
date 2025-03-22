"use client"

import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function PortfolioPage() {
    const [timeframe, setTimeframe] = useState("monthly")
    const [coinFilter, setCoinFilter] = useState("all")

    const assets = [
        {
            id: "bitcoin",
            name: "Bitcoin",
            symbol: "BTC",
            price: "$53,260.20",
            marketCap: "$361.32B",
            circulatingSupply: "19.144M",
            change: 1.37,
            isPositive: true,
            allocation: 34,
        },
        {
            id: "ethereum",
            name: "Ethereum",
            symbol: "ETH",
            price: "$1,643.80",
            marketCap: "$158.77B",
            circulatingSupply: "122.276M",
            change: -1.37,
            isPositive: false,
            allocation: 21,
        },
        {
            id: "iot-chain",
            name: "IoT Chain",
            symbol: "ITC",
            price: "$0.5657",
            marketCap: "$67.94B",
            circulatingSupply: "67.546GB",
            change: 1.37,
            isPositive: true,
            allocation: 15,
        },
        {
            id: "dogecoin",
            name: "Dogecoin",
            symbol: "DOGE",
            price: "$40,355.12",
            marketCap: "$49.91B",
            circulatingSupply: "51.736B",
            change: -1.37,
            isPositive: false,
            allocation: 18,
        },
        {
            id: "digibyte",
            name: "Digibyte",
            symbol: "DGB",
            price: "$40,355.12",
            marketCap: "$44.34B",
            circulatingSupply: "40.355B",
            change: 1.37,
            isPositive: true,
            allocation: 12,
        },
    ]

    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header title="Portfolio" walletConnected={true} />

                <main className="flex-1 p-6">
                    {/* Portfolio Value */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <svg
                                    className="h-4 w-4 text-orange-500"
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
                                PORTFOLIO VALUE
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    className="gap-2 h-10 border-gray-200"
                                    onClick={() => setCoinFilter(coinFilter === "all" ? "selected" : "all")}
                                >
                                    All coins
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="gap-2 h-10 border-gray-200"
                                    onClick={() => setTimeframe(timeframe === "monthly" ? "weekly" : "monthly")}
                                >
                                    Monthly
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <h2 className="text-4xl font-bold">$5,260</h2>
                            <Badge className="flex items-center gap-1 bg-green-100 px-2 py-1 text-green-600 hover:bg-green-100">
                                <ArrowUpRight className="h-3 w-3" />
                                <span>1.37%</span>
                            </Badge>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="h-80 mb-8 relative border rounded-lg p-4 bg-white">
                        <svg className="w-full h-full" viewBox="0 0 800 300">
                            <path
                                d="M0,250 C50,230 100,280 150,200 C200,120 250,180 300,150 C350,120 400,50 450,80 C500,110 550,240 600,220 C650,200 700,150 750,180 L750,300 L0,300 Z"
                                fill="rgba(249, 115, 22, 0.1)"
                                stroke="none"
                            />
                            <path
                                d="M0,250 C50,230 100,280 150,200 C200,120 250,180 300,150 C350,120 400,50 450,80 C500,110 550,240 600,220 C650,200 700,150 750,180"
                                fill="none"
                                stroke="#f97316"
                                strokeWidth="2"
                            />
                            <circle cx="450" cy="80" r="6" fill="#f97316" />
                        </svg>

                        {/* Chart Tooltip */}
                        <div className="absolute left-1/2 top-6 -translate-x-1/2 transform rounded-md bg-gray-900 p-2  text-white shadow-lg">
                            <div className="text-xs text-gray-400">Tuesday, Oct 4, 2022</div>
                            <div className="mt-1 flex items-center gap-2">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500">
                                    <span className="text-xs text-white">₿</span>
                                </div>
                                <span className="text-sm">Value</span>
                                <span className="text-sm font-bold">$4,251</span>
                            </div>
                        </div>

                        {/* X-Axis Labels */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-gray-500">
                            <span>Oct 1</span>
                            <span>Oct 6</span>
                            <span>Oct 11</span>
                            <span>Oct 16</span>
                            <span>Oct 21</span>
                            <span>Oct 26</span>
                            <span>Oct 31</span>
                        </div>

                        {/* Y-Axis Labels */}
                        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-4 text-xs text-gray-500">
                            <span>$10k</span>
                            <span>$8k</span>
                            <span>$6k</span>
                            <span>$4k</span>
                            <span>$2k</span>
                            <span>0</span>
                        </div>
                    </div>

                    {/* Assets Table */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Your Assets</h2>

                        <div className="border rounded-lg overflow-hidden bg-white">
                            <div className="grid grid-cols-7 gap-4 p-4 bg-gray-50 border-b text-sm">
                                <div className="col-span-1 font-medium text-gray-500">#</div>
                                <div className="col-span-1 font-medium text-gray-500">Name</div>
                                <div className="col-span-1 font-medium text-gray-500">Price</div>
                                <div className="col-span-1 font-medium text-gray-500">Market Cap</div>
                                <div className="col-span-1 font-medium text-gray-500">Change %</div>
                                <div className="col-span-1 font-medium text-gray-500">Allocation</div>
                                <div className="col-span-1 font-medium text-gray-500">Action</div>
                            </div>

                            {assets.map((asset) => (
                                <div key={asset.id} className="grid grid-cols-7 gap-4 p-4 border-b items-center hover:bg-gray-50">
                                    <div className="col-span-1 text-gray-500">{asset.id}</div>
                                    <div className="col-span-1 flex items-center gap-3">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${asset.name === "Bitcoin"
                                                ? "bg-orange-100"
                                                : asset.name === "Ethereum"
                                                    ? "bg-purple-500"
                                                    : asset.name === "IoT Chain"
                                                        ? "bg-blue-900"
                                                        : asset.name === "Dogecoin"
                                                            ? "bg-yellow-400"
                                                            : "bg-blue-500"
                                                }`}
                                        >
                                            <span className={`text-lg ${asset.name === "Bitcoin" ? "text-orange-500" : "text-white"}`}>
                                                {asset.symbol.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-medium">{asset.name}</div>
                                            <div className="text-sm text-gray-500">{asset.symbol}</div>
                                        </div>
                                    </div>
                                    <div className="col-span-1 font-medium">{asset.price}</div>
                                    <div className="col-span-1 text-gray-500">{asset.marketCap}</div>
                                    <div className="col-span-1">
                                        <Badge
                                            className={`flex items-center gap-1 ${asset.isPositive
                                                ? "bg-green-100 text-green-600 hover:bg-green-100"
                                                : "bg-red-100 text-red-600 hover:bg-red-100"
                                                }`}
                                        >
                                            {asset.isPositive ? (
                                                <ArrowUpRight className="h-3 w-3" />
                                            ) : (
                                                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7 10L12 15L17 10"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            )}
                                            <span>{Math.abs(asset.change)}%</span>
                                        </Badge>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                            <div className="h-full bg-orange-500" style={{ width: `${asset.allocation}%` }}></div>
                                        </div>
                                        <div className="text-sm mt-1 text-gray-500">{asset.allocation}%</div>
                                    </div>
                                    <div className="col-span-1">
                                        <Button variant="link" className="text-orange-500 p-0 h-auto">
                                            Buy / Sell
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

