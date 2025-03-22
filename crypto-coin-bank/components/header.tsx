import { Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  title: string
  showWallet?: boolean
  walletConnected?: boolean
  walletName?: string
  walletBalance?: string
}

export default function Header({
  title,
  showWallet = true,
  walletConnected = false,
  walletName = "Exodus Wallet",
  walletBalance = "$19,305.00",
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="gap-2 rounded-full">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
            <span className="text-xs text-blue-600">$</span>
          </div>
          <span>USD</span>
          <ChevronDown className="h-4 w-4" />
        </Button>

        {showWallet &&
          (walletConnected ? (
            <div className="flex items-center gap-2 rounded-full border px-3 py-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                <span className="text-xs text-blue-600">X</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs">{walletName}</span>
                <span className="text-xs text-gray-500">{walletBalance}</span>
              </div>
            </div>
          ) : (
            <Button className="rounded-full bg-orange-500 hover:bg-orange-600">Connect Wallet</Button>
          ))}

        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-violet-100 text-violet-500">
          <span className="text-sm font-medium">AS</span>
        </Button>
      </div>
    </header>
  )
}

