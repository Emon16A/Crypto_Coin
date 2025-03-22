"use client"
import type { Coin } from "@/components/data/coins"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import CoinIcon from "./coin-icon"

interface AddAssetsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  coins: Coin[]
  searchTerm: string
  onSearchChange: (term: string) => void
  onSelectCoin: (coin: Coin) => void
}

export default function AddAssetsModal({
  open,
  onOpenChange,
  coins,
  searchTerm,
  onSearchChange,
  onSelectCoin,
}: AddAssetsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Assets</DialogTitle>
          <DialogDescription>Select cryptocurrencies to add to your portfolio.</DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search coins..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          <div className="max-h-[300px] overflow-y-auto space-y-2">
            {coins.map((coin) => (
              <div
                key={coin.id}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-md cursor-pointer"
                onClick={() => {
                  onSelectCoin(coin)
                  onOpenChange(false)
                }}
              >
                <CoinIcon coin={coin} size="sm" />
                <div className="flex-1">
                  <div className="font-medium">{coin.name}</div>
                  <div className="text-xs text-gray-500">{coin.symbol}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${coin.price.toLocaleString()}</div>
                  <div className={`text-xs ${coin.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {coin.change24h >= 0 ? "+" : ""}
                    {coin.change24h.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

