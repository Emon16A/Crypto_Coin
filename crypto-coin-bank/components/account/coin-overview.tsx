import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import type { Coin } from "@/data/coins"

interface CoinOverviewProps {
  coin: Coin
  currentPrice: number
  priceChange: number
}

export default function CoinOverview({ coin, currentPrice, priceChange }: CoinOverviewProps) {
  return (
    <Card className="mb-6 border border-gray-200 shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">Overview</h3>

        <div className="grid grid-cols-5 gap-6">
          <div>
            <div className="text-sm text-gray-500 mb-1">Market Value</div>
            <div className="font-bold text-lg">${currentPrice.toLocaleString()}</div>
            <div className="text-xs text-gray-500">{coin.marketCap}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Net Cost</div>
            <div className="font-bold text-lg">${coin.netCost.toLocaleString()}</div>
            <div className="text-xs text-orange-500">{coin.netCostPercentage}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Holdings</div>
            <div className="font-bold text-lg">
              {coin.holdings.toLocaleString()} {coin.symbol}
            </div>
            <div className="text-xs text-gray-500">{coin.holdingsAllocation}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Profit/Loss</div>
            <div className="font-bold text-lg">+${coin.profitLoss.toLocaleString()}</div>
            <div className="text-xs text-green-500">{coin.profitPercentage} profit</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Change (24H)</div>
            <div className="flex items-center gap-1">
              {priceChange >= 0 ? (
                <>
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                  <span className="font-bold text-lg text-green-500">{priceChange.toFixed(2)}%</span>
                </>
              ) : (
                <>
                  <ArrowDownRight className="h-4 w-4 text-red-500" />
                  <span className="font-bold text-lg text-red-500">{Math.abs(priceChange).toFixed(2)}%</span>
                </>
              )}
            </div>
            <div className="text-xs text-gray-500">Last 24 hours</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

