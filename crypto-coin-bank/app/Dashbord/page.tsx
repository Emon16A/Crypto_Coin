"use client"

import { ArrowUpRight, Bell, ChevronDown, ChevronRight, LineChart } from "lucide-react"
import { useState } from "react"

import Sidebar from "@/components/sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export default function CoinbankDashboard() {
    const [, setActiveTab] = useState("buy");

    return (
        <div className="flex min-h-screen bg-white">
            {/* Sidebar */}
            <div className="hidden w-64 flex-col border-r bg-white p-4 md:flex">
                <div className="flex min-h-screen bg-background">
                    <Sidebar />


                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-1 flex-col">
                {/* Header */}
                <header className="flex items-center justify-between border-b p-4">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" className="gap-2 rounded-full">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                                <span className="text-xs text-blue-600">$</span>
                            </div>
                            <span>USD</span>
                            <ChevronDown className="h-4 w-4" />
                        </Button>
                        <Button className="rounded-full bg-orange-500 hover:bg-orange-600">Connect Wallet</Button>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full bg-violet-100 text-violet-500">
                            <span className="text-sm font-medium">AS</span>
                        </Button>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="flex flex-1 overflow-hidden">
                    <div className="flex-1 overflow-y-auto p-6">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <LineChart className="h-4 w-4 text-orange-500" />
                                        <span>PORTFOLIO VALUE</span>
                                    </div>
                                    <div className="mt-2 flex items-center justify-between">
                                        <h2 className="text-4xl font-bold text-gray-900">$5,260</h2>
                                        <Badge className="flex items-center gap-1 bg-green-100 px-2 py-1 text-green-600">
                                            <ArrowUpRight className="h-3 w-3" />
                                            <span>1.37%</span>
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <LineChart className="h-4 w-4 text-orange-500" />
                                        <span>VOLUME (24H)</span>
                                    </div>
                                    <div className="mt-2 flex items-center justify-between">
                                        <h2 className="text-4xl font-bold text-gray-900">$7,472</h2>
                                        <Badge className="flex items-center gap-1 bg-green-100 px-2 py-1 text-green-600">
                                            <ArrowUpRight className="h-3 w-3" />
                                            <span>1.37%</span>
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Portfolio Stats */}
                        <div className="mt-8">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-xl font-bold">Portfolio Stats</h2>
                                <div className="flex gap-2">
                                    <Button variant="outline" className="gap-2">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100">
                                            <span className="text-xs text-orange-600">₿</span>
                                        </div>
                                        <span>Bitcoin</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="gap-2">
                                        <span>Weekly</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="relative h-64 w-full rounded-lg bg-gray-50 p-4">
                                {/* Chart Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="h-full w-full" viewBox="0 0 800 200">
                                        <path
                                            d="M0,150 C50,120 100,170 150,140 C200,110 250,160 300,130 C350,100 400,50 450,80 C500,110 550,140 600,120 C650,100 700,130 750,110 L750,200 L0,200 Z"
                                            fill="rgba(237, 233, 254, 0.5)"
                                            stroke="none"
                                        />
                                        <path
                                            d="M0,150 C50,120 100,170 150,140 C200,110 250,160 300,130 C350,100 400,50 450,80 C500,110 550,140 600,120 C650,100 700,130 750,110"
                                            fill="none"
                                            stroke="#FF6B00"
                                            strokeWidth="2"
                                        />
                                        <circle cx="450" cy="80" r="6" fill="#FF6B00" />
                                    </svg>
                                </div>

                                {/* Chart Tooltip */}
                                <div className="absolute left-1/2 top-10 -translate-x-1/2 transform rounded-md bg-gray-900 p-2 text-white">
                                    <div className="text-xs text-gray-400">Tuesday, Oct 4, 2022</div>
                                    <div className="mt-1 flex items-center gap-4 ">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500">
                                            <span className="text-xs text-white">₿</span>
                                        </div>
                                        <span className=" text-sm">Value</span>
                                        <span className="text-sm font-bold">$4,251</span>
                                    </div>
                                </div>

                                {/* X-Axis Labels */}
                                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-gray-500">
                                    <span>Oct 1</span>
                                    <span>Oct 2</span>
                                    <span>Oct 3</span>
                                    <span>Oct 4</span>
                                    <span>Oct 5</span>
                                    <span>Oct 6</span>
                                    <span>Oct 7</span>
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
                        </div>

                        {/* Current Stats and Learn to Invest */}
                        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Current Stats</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="h-3 w-3 rounded-sm bg-blue-900"></div>
                                                <span className="text-sm">Income</span>
                                            </div>
                                            <span className="font-medium">$2,500</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="h-3 w-3 rounded-sm bg-yellow-400"></div>
                                                <span className="text-sm">Spends</span>
                                            </div>
                                            <span className="font-medium">$943</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="h-3 w-3 rounded-sm bg-orange-500"></div>
                                                <span className="text-sm">Invest</span>
                                            </div>
                                            <span className="font-medium">$7469</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="h-3 w-3 rounded-sm bg-gray-200"></div>
                                                <span className="text-sm">Installments</span>
                                            </div>
                                            <span className="font-medium">$16</span>
                                        </div>
                                    </div>
                                    {/* Stats Bar */}
                                    <div className="mt-4 flex h-2 w-full overflow-hidden rounded-full">
                                        <div className="w-[30%] bg-blue-900"></div>
                                        <div className="w-[20%] bg-yellow-400"></div>
                                        <div className="w-[40%] bg-orange-500"></div>
                                        <div className="w-[10%] bg-gray-200"></div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-violet-50">
                                <CardContent className="flex items-center justify-between p-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">Learn to Invest daily, weekly, or monthly</h3>
                                    </div>
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <ChevronRight className="h-6 w-6" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>

                        {/* My Portfolio */}
                        <div className="mt-8">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-xl font-bold">My Portfolio</h2>
                                <Button variant="link" className="text-orange-500">
                                    See all
                                </Button>
                            </div>

                            <Card>
                                <CardContent className="p-0">
                                    <div className="flex flex-col divide-y">
                                        <div className="flex items-center justify-between p-4">
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500">
                                                    <svg
                                                        className="h-6 w-6 text-white"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 2L2 7L12 12L22 7L12 2Z"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M2 17L12 22L22 17"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M2 12L12 17L22 12"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-medium">Ethereum</span>
                                                        <span className="text-sm text-gray-500">ETH</span>
                                                    </div>
                                                    <div className="mt-1 w-24 bg-gray-200 p-0.5">
                                                        <div className="h-1 w-[46%] bg-orange-500"></div>
                                                    </div>
                                                    <span className="text-sm text-gray-500">46%</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-gray-500">Change</div>
                                                <div className="flex items-center justify-end gap-1 text-green-500">
                                                    <ArrowUpRight className="h-3 w-3" />
                                                    <span>0.25%</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-medium">0.124567 ETH</div>
                                                <div className="text-sm text-gray-500">$1,487</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between p-4">
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900">
                                                    <svg
                                                        className="h-6 w-6 text-white"
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
                                                            d="M8 12L12 16L16 12"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M12 8V16"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-medium">XRP</span>
                                                        <span className="text-sm text-gray-500">XRP</span>
                                                    </div>
                                                    <div className="mt-1 w-24 bg-gray-200 p-0.5">
                                                        <div className="h-1 w-[24%] bg-blue-900"></div>
                                                    </div>
                                                    <span className="text-sm text-gray-500">24%</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-gray-500">Change</div>
                                                <div className="flex items-center justify-end gap-1 text-red-500">
                                                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M7 10L12 15L17 10"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <span>0.19%</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-medium">0.5657 XRP</div>
                                                <div className="text-sm text-gray-500">$1,060</div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="hidden w-80 border-l bg-white p-6 lg:block">
                        <Tabs defaultValue="buy" className="w-full">

                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="buy" onClick={() => setActiveTab("buy")}>
                                    Buy
                                </TabsTrigger>
                                <TabsTrigger value="sell" onClick={() => setActiveTab("sell")}>
                                    Sell
                                </TabsTrigger>
                                <TabsTrigger value="convert" onClick={() => setActiveTab("convert")}>
                                    Convert
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="buy" className="mt-6">
                                <div className="flex flex-col items-center">
                                    <div className="text-4xl font-bold text-gray-300">$0</div>
                                    <div className="mt-1 text-sm text-gray-500">USD</div>
                                    <div className="mt-4 text-center text-sm text-gray-500">You can buy up to $25,000</div>

                                    <div className="mt-6 w-full">
                                        <div className="mb-2 text-sm font-medium">Buy</div>
                                        <Button variant="outline" className="flex w-full items-center justify-between p-3">
                                            <div className="flex items-center gap-2">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                                                    <svg
                                                        className="h-5 w-5 text-blue-600"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 2L2 7L12 12L22 7L12 2Z"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M2 17L12 22L22 17"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M2 12L12 17L22 12"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="text-left">
                                                    <div className="font-medium">Ethereum</div>
                                                    <div className="text-xs text-gray-500">ETH Balance</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div>0.36477 ETH</div>
                                                <ChevronRight className="ml-auto h-4 w-4" />
                                            </div>
                                        </Button>
                                    </div>

                                    <div className="mt-6 w-full">
                                        <div className="mb-2 text-sm font-medium">Pay with</div>
                                        <Button variant="outline" className="flex w-full items-center justify-between p-3">
                                            <div className="flex items-center gap-2">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                                                    <svg
                                                        className="h-5 w-5 text-blue-600"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M3 10H21"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="font-medium">Paypal</div>
                                            </div>
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    <Button className="mt-6 w-full rounded-full bg-orange-500 hover:bg-orange-600">Buy</Button>
                                </div>
                            </TabsContent>
                            <TabsContent value="sell" className="mt-6">
                                <div className="flex flex-col items-center">
                                    <div className="text-4xl font-bold text-gray-300">$0</div>
                                    <div className="mt-1 text-sm text-gray-500">USD</div>
                                </div>
                            </TabsContent>
                            <TabsContent value="convert" className="mt-6">
                                <div className="flex flex-col items-center">
                                    <div className="text-4xl font-bold text-gray-300">$0</div>
                                    <div className="mt-1 text-sm text-gray-500">USD</div>
                                </div>
                            </TabsContent>
                        </Tabs>

                        {/* Recent Transactions */}
                        <div className="mt-8">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-lg font-medium">Recent Transaction</h2>
                                <Button variant="link" className="text-orange-500">
                                    See all
                                </Button>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                                        <svg
                                            className="h-6 w-6 text-orange-500"
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
                                                d="M9 12L11 14L15 10"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-medium">Received Bitcoin</div>
                                        <div className="text-sm text-orange-500">+0.00045734 BTC</div>
                                        <div className="text-xs text-gray-500">on Oct 1, 2022</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                                        <svg
                                            className="h-6 w-6 text-orange-500"
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
                                                d="M9 12L11 14L15 10"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-medium">Received Ethereum</div>
                                        <div className="text-sm text-orange-500">+0.00034576 ETH</div>
                                        <div className="text-xs text-gray-500">on Sep 29, 2022</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                                        <svg
                                            className="h-6 w-6 text-yellow-500"
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
                                                d="M12 8V16"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8 12H16"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-medium">Deposited Funds</div>
                                        <div className="text-sm text-yellow-500">$200</div>
                                        <div className="text-xs text-gray-500">on Sep 20, 2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

