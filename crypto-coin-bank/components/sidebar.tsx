"use client"

import { CreditCard, LayoutDashboard, LineChart, Settings, Wallet } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="hidden w-64 flex-col border-r bg-white p-2 md:flex">
      <div className="mb-8 flex items-center">
        <Link href="/" className="flex pl-2 h-10 w-10 sm:h-12 sm:w-12">
          <Image src="/bgicocopy.svg" alt="BG" width={40} height={40} />
        </Link>
        <Link href="/" className="flex items-center">
          <h2 className="text-black font-bold text-xl sm:text-2xl ml-1 sm:ml-2">CoinBank</h2>
        </Link>
      </div>



      <nav className="flex flex-col gap-1">
        <Link
          href="/Dashbord"
          className={`flex items-center gap-3 rounded-lg p-3 text-sm font-medium ${isActive("/") ? "bg-violet-50 text-violet-900" : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <LayoutDashboard className="h-5 w-5" />
          Dashboard
        </Link>
        <Link
          href="/wallet"
          className={`flex items-center gap-3 rounded-lg p-3 text-sm font-medium ${isActive("/wallet") ? "bg-violet-50 text-violet-900" : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <Wallet className="h-5 w-5" />
          Wallet
        </Link>
        <Link
          href="/prices"
          className={`flex items-center gap-3 rounded-lg p-3 text-sm font-medium ${isActive("/prices") ? "bg-violet-50 text-violet-900" : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <LineChart className="h-5 w-5" />
          Prices
        </Link>
        <Link
          href="/portfolio"
          className={`flex items-center gap-3 rounded-lg p-3 text-sm font-medium ${isActive("/portfolio") ? "bg-violet-50 text-violet-900" : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M12 13H14M12 17H14M18 13H20M18 17H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Portfolios
        </Link>
        <Link
          href="/accounts"
          className={`flex items-center gap-3 rounded-lg p-3 text-sm font-medium ${isActive("/accounts") ? "bg-violet-50 text-violet-900" : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 21V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V21L16 17L12 21L8 17L4 21Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Accounts
        </Link>
        <Link
          href="/cards"
          className={`flex items-center gap-3 rounded-lg p-3 text-sm font-medium ${isActive("/cards") ? "bg-violet-50 text-violet-900" : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <CreditCard className="h-5 w-5" />
          Cards
        </Link>
      </nav>

      <div className="mt-auto">
        <Link
          href="/settings/notifications"
          className={`flex items-center gap-3 rounded-lg p-3 text-sm font-medium ${pathname.startsWith("/settings/notifications") ? "bg-violet-50 text-violet-900" : "text-gray-500 hover:bg-gray-100"
            }`}
        >
          <Settings className="h-5 w-5" />
          Settings
        </Link>
      </div>
    </div>
  )
}

