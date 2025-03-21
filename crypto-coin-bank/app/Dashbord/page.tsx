"use client"

import { ArrowUpRight, Bell, ChevronDown, ChevronRight, LayoutDashboard, LineChart, Wallet } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
export default function CoinbankDashboard() {
    const [activeTab, setActiveTab] = useState("buy");

    return (
        <div className="flex min-h-screen bg-white">
            {/* Sidebar */}
            <div className="hidden w-64 flex-col border-r bg-white p-4 md:flex">
                <div className="mb-8 flex items-center gap-2">
                    <Link href="/" className="flex h-12 w-12">
                        <Image src="/bgicocopy.svg" alt="BG" width={48} height={48} />
                    </Link>
                    <Link href="/">
                        <h2 className="text-black font-bold text-2xl ml-2">
                            CoinBank
                        </h2>
                    </Link>
                </div>


                <nav className="flex flex-col gap-1">
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg bg-violet-50 p-3 text-sm font-medium text-violet-900"
                    >
                        <LayoutDashboard className="h-5 w-5" />
                        Dashboard
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-gray-500 hover:bg-gray-100"
                    >
                        <Wallet className="h-5 w-5" />
                        Wallet
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-gray-500 hover:bg-gray-100"
                    >
                        <LineChart className="h-5 w-5" />
                        Prices
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-gray-500 hover:bg-gray-100"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M12 13H14M12 17H14M18 13H20M18 17H20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Portfolios
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-gray-500 hover:bg-gray-100"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4 21V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V21L16 17L12 21L8 17L4 21Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Accounts
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-gray-500 hover:bg-gray-100"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect
                                x="2"
                                y="5"
                                width="20"
                                height="14"
                                rx="2"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path d="M2 10H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Cards
                    </Link>
                </nav>

                <div className="mt-auto">
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-gray-500 hover:bg-gray-100"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Settings
                    </Link>
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
                            const [activeTab, setActiveTab] = useState("buy");

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

