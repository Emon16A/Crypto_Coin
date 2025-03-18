"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer } from "recharts"
import Image from "next/image"

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
  const [view, setView] = useState("volume")

  useEffect(() => {
    async function fetchTopCoins() {
      const response = await fetch(`/api/crypto?view=${view}`)
      const data = await response.json()
      setCoins(data.slice(0, 4))
    }
    fetchTopCoins()
  }, [view]) // Now it fetches data based on the selected view (e.g., volume, gainers)

  return (
    <div className="space-y-4">
      {/* Responsive Tabs */}
      <div className="overflow-x-auto">
        <Tabs defaultValue="volume" onValueChange={setView} className="w-full">
          <TabsList className="w-max lg:p-5 lg:gap-5 sm:w-full flex bg-transparent h-12 p-1">
            <TabsTrigger value="gainers" className="rounded-md px-4 py-2 data-[state=active]:bg-white">
              Biggest gains
            </TabsTrigger>
            <TabsTrigger value="volume" className="rounded-md px-4 py-2 data-[state=active]:bg-white">
              Top volume coins
            </TabsTrigger>
            <TabsTrigger value="trending" className="rounded-md px-4 py-2 data-[state=active]:bg-white">
              Trending assets
            </TabsTrigger>
            <TabsTrigger value="new" className="rounded-md px-4 py-2 data-[state=active]:bg-white">
              New listings
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {coins.map((coin) => (
          <Card
            key={coin.id}
            className="bg-[#FFFF] border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <CardContent className="p-4">
              {/* Coin Header */}
              <div className="flex items-center gap-2">
                <Image
                  src={coin.image || "/placeholder.svg"}
                  alt={coin.name}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
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
  )
}
