"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer } from "recharts"

interface Coin {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  price_change_percentage_24h: number
  sparkline_in_7d: {
    price: number[]
  }
}

export default function CryptoTable() {
  const [coins, setCoins] = useState<Coin[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await fetch(`/api/crypto?page=${currentPage}`)
        const data = await response.json()
        setCoins(data)
      } catch (error) {
        console.error("Error fetching coins:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

  }, [currentPage])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  }

  const formatMarketCap = (marketCap: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(marketCap)
  }

  return (
    <div className="min-h-screen mt-6 bg-white px-4">
      {/* Responsive Wrapper */}
      <div className="overflow-x-auto">
        <Table className="min-w-[600px] sm:min-w-full">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[180px] py-3 text-sm sm:text-base">Name</TableHead>
              <TableHead className="text-right py-3 text-sm sm:text-base">Price</TableHead>
              <TableHead className="text-right py-3 hidden sm:table-cell">Market Cap</TableHead>
              <TableHead className="text-right py-3 text-sm sm:text-base">Change (24h)</TableHead>
              <TableHead className="text-right py-3 hidden lg:table-cell">Last (24H)</TableHead>
              <TableHead className="w-[150px] py-3"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  Loading...
                </TableCell>
              </TableRow>
            ) : (
              coins.map((coin) => (
                <TableRow key={coin.id} className="text-sm sm:text-base">
                  <TableCell className="py-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src={coin.image || "/placeholder.svg"}
                        alt={coin.name}
                        width={32}
                        height={32}
                        className="h-6 w-6 sm:h-8 sm:w-8"
                      />
                      <div>
                        <div className="font-medium">{coin.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground uppercase">{coin.symbol}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">{formatPrice(coin.current_price)}</TableCell>
                  <TableCell className="text-right text-muted-foreground hidden sm:table-cell">
                    {formatMarketCap(coin.market_cap)}
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={`inline-block px-2 py-1 text-xs sm:text-sm rounded ${coin.price_change_percentage_24h > 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                        }`}
                    >
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <div className="h-[30px] w-[80px] sm:h-[40px] sm:w-[100px] ml-auto">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={coin.sparkline_in_7d.price.map((price, i) => ({ price, i }))}>
                          <Line
                            type="monotone"
                            dataKey="price"
                            stroke={coin.price_change_percentage_24h > 0 ? "#22c55e" : "#ef4444"}
                            strokeWidth={1.5}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1 justify-end">
                      <Button variant="outline" size="sm" className="text-orange-500 hover:text-orange-600">
                        Details
                      </Button>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Trade
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1 || loading}
        >
          {"<"}
        </Button>
        {[...Array(5)].map((_, i) => {
          const pageNum = i + 1;
          return (
            <Button
              key={pageNum}
              variant="outline"
              size="sm"
              className={`h-8 min-w-8 ${currentPage === pageNum ? "bg-orange-500 text-white hover:bg-orange-600" : ""
                }`}
              onClick={() => setCurrentPage(pageNum)}
              disabled={loading}
            >
              {pageNum}
            </Button>
          );
        })}
        <span className="hidden sm:inline">...</span>
        <Button
          variant="outline"
          size="sm"
          className="h-8 min-w-8 hidden sm:inline"
          onClick={() => setCurrentPage(10)}
          disabled={loading}
        >
          10
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === 10 || loading}
        >
          {">"}
        </Button>
      </div>
    </div>
  )
}
