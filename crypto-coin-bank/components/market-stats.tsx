// Fallback data in case the API fails
const fallbackData = {
  data: {
    total_market_cap: {
      usd: 2571236789123,
    },
    market_cap_change_percentage_24h_usd: -0.81,
  },
}

async function getMarketData() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/global", {
      next: { revalidate: 60 }, // Cache for 60 seconds
      headers: {
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      throw new Error(`API returned status ${res.status}`)
    }

    return res.json()
  } catch (error) {
    console.error("Failed to fetch market data:", error)
    return fallbackData
  }
}

export async function MarketStats() {
  const data = await getMarketData()

  const formatMarketCap = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(value)
  }

  const marketCap = formatMarketCap(data.data.total_market_cap.usd)
  const marketCapChange = data.data.market_cap_change_percentage_24h_usd.toFixed(2)

  return (
    <div className="py-8">
      <div className="text-xs uppercase tracking-wider opacity-80 mb-2">PRICES</div>
      <h1 className="text-2xl font-medium leading-tight max-w-2xl">
        The global cryptocurrency market cap today is {marketCap}, a {marketCapChange}% change in the last 24 hours.
      </h1>
    </div>
  )
}

