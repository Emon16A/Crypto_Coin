"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer } from "recharts"

interface Coin {
    id: string
    symbol: string
    name: string
    image: string
    current_price: number
    price_change_percentage_24h: number
    sparkline_in_7d: {
        price: number[]
    }
}

export default function TopCoins() {
    const [coins, setCoins] = useState<Coin[]>([])

    useEffect(() => {
        async function fetchTopCoins() {
            const response = await fetch("/api/crypto")
            const data = await response.json()
            // Filter to show only ETH
            const ethCoin = data.filter((coin: Coin) => coin.symbol.toUpperCase() === "ETH")
            setCoins(ethCoin)
        }
        fetchTopCoins()
    }, [])

    return (
        <div className="space-y-4">
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                <div className="w-[250px] h-[260.41px] shadow-lg">


                    {coins.map((coin) => (
                        <Card
                            key={coin.id}
                            className="bg-[#FFFF] border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            <CardContent className="p-4 ">
                                {/* Coin Header */}
                                <div className="flex items-center ">
                                    <Image src={coin.image || "/placeholder.svg"} alt={coin.name} className="h-6 w-6" />
                                    <div className="font-medium">{coin.name}</div>
                                    <div className="text-sm text-muted-foreground uppercase">{coin.symbol}</div>
                                </div>

                                {/* Price Info */}
                                <div className="mt-2">
                                    <span className="text-xl font-bold">${coin.current_price.toLocaleString()}</span>
                                    <span
                                        className={`ml-2 text-sm ${coin.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}`}
                                    >
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                    </span>
                                </div>

                                {/* Sparkline Chart */}
                                <div className="mt-2 h-[50px] sm:h-[60px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={coin.sparkline_in_7d.price.map((price, i) => ({ price, i }))}>
                                            <Line type="monotone" dataKey="price" stroke="#22c55e" strokeWidth={1.5} dot={false} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    )
}
