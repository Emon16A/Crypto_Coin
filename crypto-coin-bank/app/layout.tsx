import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Coinbank - Next Gen Crypto Wallet & Trading Platform",
  description: "Trade and manage your cryptocurrency with ease",
  icons: {
    icon: "/favicon.svg",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

