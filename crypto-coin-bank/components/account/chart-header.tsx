import type { Coin } from "@/components/data/coins"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface ChartHeaderProps {
  coin: Coin
  currentPrice: number
}

export default function ChartHeader({ coin, currentPrice }: ChartHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <Button variant="outline" className="gap-2">
          USD/{coin.symbol}
          <ChevronDown className="h-4 w-4" />
        </Button>
        <div>
          <div className="text-lg font-bold">${currentPrice.toLocaleString()}</div>
          <div className="text-xs text-gray-500">Last price</div>
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">
            {coin.volume24h} {coin.symbol}
          </div>
          <div className="text-xs text-gray-500">Volume (24H)</div>
        </div>
      </div>
      <Button variant="outline" className="gap-2">
        Monthly
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  )
}

