"use client"
import { Plus } from "lucide-react"
import type { Coin } from "@/data/coins"
import CoinIcon from "./coin-icon"

interface CoinSidebarProps {
  coins: Coin[]
  selectedCoin: Coin
  onSelectCoin: (coin: Coin) => void
  onAddAssets: () => void
}

export default function CoinSidebar({ coins, selectedCoin, onSelectCoin, onAddAssets }: CoinSidebarProps) {
  return (
    <div className="w-64 border-r border-gray-200">
      {coins.slice(0, 5).map((coin) => (
        <div
          key={coin.id}
          className={`flex items-center gap-3 p-4 ${selectedCoin.id === coin.id ? "bg-gray-50" : ""} hover:bg-gray-50 cursor-pointer`}
          onClick={() => onSelectCoin(coin)}
        >
          <CoinIcon coin={coin} />
          <div>
            <div className="font-medium">{coin.name}</div>
            <div className="text-xs text-gray-500">{coin.symbol}</div>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer" onClick={onAddAssets}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 text-gray-400">
          <Plus className="h-5 w-5" />
        </div>
        <div className="font-medium text-orange-500">Add Assets</div>
      </div>
    </div>
  )
}

