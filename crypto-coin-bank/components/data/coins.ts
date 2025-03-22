// Coin data with logos
export const allCoins = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    logo: "🔶",
    color: "bg-orange-500",
    price: 16352.12,
    marketCap: "39% of crypto market",
    netCost: 17547.36,
    netCostPercentage: "+190%",
    holdings: 8.24668,
    holdingsAllocation: "8% of asset allocation",
    profitLoss: 426.57,
    profitPercentage: "+189%",
    change24h: 9.37,
    volume24h: 38.25,
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    logo: "🔷",
    color: "bg-blue-500",
    price: 1832.87,
    marketCap: "18% of crypto market",
    netCost: 2100.45,
    netCostPercentage: "+45%",
    holdings: 12.5,
    holdingsAllocation: "15% of asset allocation",
    profitLoss: 267.58,
    profitPercentage: "+45%",
    change24h: -2.14,
    volume24h: 142.67,
  },
  {
    id: 3,
    name: "IoT Chain",
    symbol: "ITC",
    logo: "🔘",
    color: "bg-slate-900",
    price: 0.0345,
    marketCap: "0.01% of crypto market",
    netCost: 0.0412,
    netCostPercentage: "-16%",
    holdings: 5000,
    holdingsAllocation: "2% of asset allocation",
    profitLoss: -33.5,
    profitPercentage: "-16%",
    change24h: -5.23,
    volume24h: 1245.78,
  },
  {
    id: 4,
    name: "Dogecoin",
    symbol: "DOGE",
    logo: "🟡",
    color: "bg-yellow-500",
    price: 0.0823,
    marketCap: "1.2% of crypto market",
    netCost: 0.0756,
    netCostPercentage: "+8.9%",
    holdings: 25000,
    holdingsAllocation: "5% of asset allocation",
    profitLoss: 167.5,
    profitPercentage: "+8.9%",
    change24h: 12.45,
    volume24h: 8765.34,
  },
  {
    id: 5,
    name: "Digibyte",
    symbol: "DGB",
    logo: "🔵",
    color: "bg-blue-600",
    price: 0.0092,
    marketCap: "0.05% of crypto market",
    netCost: 0.0087,
    netCostPercentage: "+5.7%",
    holdings: 100000,
    holdingsAllocation: "3% of asset allocation",
    profitLoss: 50,
    profitPercentage: "+5.7%",
    change24h: 3.21,
    volume24h: 4532.12,
  },
  {
    id: 6,
    name: "Cardano",
    symbol: "ADA",
    logo: "🟢",
    color: "bg-green-600",
    price: 0.3145,
    marketCap: "2.8% of crypto market",
    netCost: 0.2987,
    netCostPercentage: "+5.3%",
    holdings: 10000,
    holdingsAllocation: "7% of asset allocation",
    profitLoss: 158,
    profitPercentage: "+5.3%",
    change24h: 1.87,
    volume24h: 3245.67,
  },
  {
    id: 7,
    name: "Solana",
    symbol: "SOL",
    logo: "🟣",
    color: "bg-purple-600",
    price: 13.45,
    marketCap: "1.5% of crypto market",
    netCost: 12.78,
    netCostPercentage: "+5.2%",
    holdings: 500,
    holdingsAllocation: "6% of asset allocation",
    profitLoss: 335,
    profitPercentage: "+5.2%",
    change24h: 7.65,
    volume24h: 2134.56,
  },
  {
    id: 8,
    name: "Polkadot",
    symbol: "DOT",
    logo: "⚪",
    color: "bg-pink-600",
    price: 5.23,
    marketCap: "0.9% of crypto market",
    netCost: 4.98,
    netCostPercentage: "+5%",
    holdings: 1200,
    holdingsAllocation: "4% of asset allocation",
    profitLoss: 300,
    profitPercentage: "+5%",
    change24h: 2.34,
    volume24h: 1876.45,
  },
]

export type Coin = (typeof allCoins)[0]

// Generate random candlestick data
export const generateCandlestickData = (coin: Coin, months = 12) => {
  const basePrice = coin.price * 0.8
  const volatility = coin.id === 1 ? 0.15 : coin.id === 2 ? 0.2 : 0.25

  return Array.from({ length: months }, (_, i) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const month = monthNames[i % 12]

    const open = basePrice * (1 + (Math.random() - 0.5) * volatility)
    const close = open * (1 + (Math.random() - 0.5) * (volatility / 2))
    const high = Math.max(open, close) * (1 + Math.random() * (volatility / 4))
    const low = Math.min(open, close) * (1 - Math.random() * (volatility / 4))

    return {
      month,
      open,
      close,
      high,
      low,
      isUp: close > open,
    }
  })
}

// Generate transaction data
export const generateTransactions = (coin: Coin) => {
  return [
    {
      id: 1,
      type: "deposit",
      date: "Oct 1 2022, 9:00 AM",
      amount: "+$1000",
      crypto: `+0.00045734 ${coin.symbol}`,
    },
    {
      id: 2,
      type: "withdraw",
      date: "Sep 20 2022, 7:23 PM",
      amount: "-$643.60",
      crypto: `-0.00034576 ${coin.symbol}`,
    },
    {
      id: 3,
      type: "deposit",
      date: "Oct 1 2022, 9:00 AM",
      amount: "+$1000",
      crypto: `+0.00045734 ${coin.symbol}`,
    },
  ]
}

// Generate alerts
export const generateAlerts = (coin: Coin) => {
  return [
    {
      id: 1,
      crypto: coin.symbol,
      price: `$${(coin.price * 1.05).toFixed(2)}`,
      exchange: "Coinbase",
      pair: `${coin.symbol}/USD`,
      active: true,
    },
    {
      id: 2,
      crypto: coin.symbol,
      price: `$${(coin.price * 0.95).toFixed(2)}`,
      exchange: "Coinbase",
      pair: `${coin.symbol}/USD`,
      active: false,
    },
  ]
}

