import type { Coin } from "@/data/coins"

interface CoinIconProps {
  coin: Coin
  size?: "sm" | "md" | "lg"
}

export default function CoinIcon({ coin, size = "md" }: CoinIconProps) {
  const sizeClass = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }

  return (
    <div className={`${sizeClass[size]} rounded-full flex items-center justify-center ${coin.color} text-white`}>
      {coin.id === 1 && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="#F7931A"
            stroke="#F7931A"
            strokeWidth="0.5"
          />
          <path
            d="M16.5 10.5C16.5 8.01472 14.4853 6 12 6C9.51472 6 7.5 8.01472 7.5 10.5C7.5 12.9853 9.51472 15 12 15C14.4853 15 16.5 12.9853 16.5 10.5Z"
            fill="white"
          />
        </svg>
      )}
      {coin.id === 2 && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="#627EEA"
            stroke="#627EEA"
            strokeWidth="0.5"
          />
          <path d="M12 6V10L16 12L12 6Z" fill="white" fillOpacity="0.6" />
          <path d="M12 6L8 12L12 10V6Z" fill="white" />
          <path d="M12 16V19L16 13L12 16Z" fill="white" fillOpacity="0.6" />
          <path d="M12 19V16L8 13L12 19Z" fill="white" />
          <path d="M12 15L16 12L12 10V15Z" fill="white" fillOpacity="0.2" />
          <path d="M8 12L12 15V10L8 12Z" fill="white" fillOpacity="0.6" />
        </svg>
      )}
      {coin.id === 3 && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="#0A1A2F"
          />
          <path d="M12 7L9 12L12 17L15 12L12 7Z" stroke="white" strokeWidth="1.5" />
          <path d="M7 12H17" stroke="white" strokeWidth="1.5" />
        </svg>
      )}
      {coin.id === 4 && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="#C2A633"
          />
          <path d="M9 11H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 8V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
      {coin.id === 5 && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="#0066CC"
          />
          <path d="M8 12H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 8V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
      {coin.id > 5 && <span className="text-lg">{coin.logo}</span>}
    </div>
  )
}

