interface CandlestickData {
  month: string
  open: number
  close: number
  high: number
  low: number
  isUp: boolean
}

interface CandlestickChartProps {
  data: CandlestickData[]
  currentPrice: number
}

export default function CandlestickChart({ data, currentPrice }: CandlestickChartProps) {
  return (
    <div className="h-64 w-full relative">
      {/* Price labels */}
      <div className="absolute right-0 top-0 flex flex-col items-end text-xs text-gray-500 space-y-4 h-full justify-between py-4">
        <div>${(currentPrice * 1.2).toFixed(0)}</div>
        <div>${(currentPrice * 1.1).toFixed(0)}</div>
        <div>${currentPrice.toFixed(0)}</div>
        <div>${(currentPrice * 0.9).toFixed(0)}</div>
        <div>${(currentPrice * 0.8).toFixed(0)}</div>
      </div>

      {/* Candlestick chart */}
      <div className="h-full flex items-end justify-between pt-6 pb-6 pl-0 pr-12">
        {data.map((candle, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Candlestick */}
            <div className="relative">
              {/* High-low line */}
              <div
                className={`w-0.5 ${candle.isUp ? "bg-green-500" : "bg-red-500"}`}
                style={{
                  height: `${Math.abs(candle.high - candle.low) * 0.1}px`,
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: candle.isUp ? "100%" : "auto",
                  top: candle.isUp ? "auto" : "calc(100% - 60px)",
                }}
              ></div>

              {/* Candle body */}
              <div
                className={`w-3 ${candle.isUp ? "bg-green-500" : "bg-red-500"}`}
                style={{
                  height: `${Math.abs(candle.open - candle.close) * 0.2}px`,
                  minHeight: "4px",
                }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-6">{candle.month}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


