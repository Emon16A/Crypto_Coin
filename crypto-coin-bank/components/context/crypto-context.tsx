"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

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

interface CryptoContextType {
  selectedCoin: string
  setSelectedCoin: (id: string) => void
  coins: Coin[]
  setCoins: (coins: Coin[]) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

const CryptoContext = createContext<CryptoContextType | undefined>(undefined)

export function CryptoProvider({ children }: { children: ReactNode }) {
  const [selectedCoin, setSelectedCoin] = useState<string>("bitcoin")
  const [coins, setCoins] = useState<Coin[]>([])
  const [loading, setLoading] = useState(true)

  return (
    <CryptoContext.Provider
      value={{
        selectedCoin,
        setSelectedCoin,
        coins,
        setCoins,
        loading,
        setLoading,
      }}
    >
      {children}
    </CryptoContext.Provider>
  )
}

export function useCrypto() {
  const context = useContext(CryptoContext)
  if (context === undefined) {
    throw new Error("useCrypto must be used within a CryptoProvider")
  }
  return context
}

