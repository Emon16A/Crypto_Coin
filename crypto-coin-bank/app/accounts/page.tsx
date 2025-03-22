"use client"

import AddAssetsModal from "@/components/account/add-assets-modal"
import AlertList from "@/components/account/alert-list"
import CandlestickChart from "@/components/account/candlestick-chart"
import ChartHeader from "@/components/account/chart-header"
import CoinOverview from "@/components/account/coin-overview"
import CoinSidebar from "@/components/account/coin-sidebar"
import TransactionList from "@/components/account/transaction-list"
import { allCoins, generateCandlestickData as generateChartData } from "@/components/data/coins"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Star } from "lucide-react"
import { useEffect, useState } from "react"

// Define the type for Transaction
type Transaction = {
    id: number;
    type: "deposit" | "withdraw";  // restrict type to "deposit" or "withdraw"
    date: string;
    amount: string;
    crypto: string;
};

// Define the type for ChartData
type ChartData = {
    month: string;
    open: number;
    close: number;
    high: number;
    low: number;
    isUp: boolean;
};

export default function AccountsPage() {
    // State for selected coin
    const [selectedCoin, setSelectedCoin] = useState(allCoins[0])

    // State for real-time data
    const [chartData, setChartData] = useState<ChartData[]>([]) // Type for chartData
    const [currentPrice, setCurrentPrice] = useState(selectedCoin.price)
    const [priceChange, setPriceChange] = useState(selectedCoin.change24h)
    const [transactions, setTransactions] = useState<Transaction[]>([])  // Set state type as Transaction[]
    const [alerts, setAlerts] = useState([])

    // State for add assets modal
    const [showAddAssetsModal, setShowAddAssetsModal] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    // State for favorites
    const [favorites, setFavorites] = useState([1]) // Bitcoin is favorited by default

    // Update data when selected coin changes
    useEffect(() => {
        setChartData(generateChartData(selectedCoin)) // use the renamed function for chart data
        setCurrentPrice(selectedCoin.price)
        setPriceChange(selectedCoin.change24h)
        setTransactions(generateTransactions(selectedCoin))  // Make sure this function returns valid transactions

        // Simulate real-time price updates
        const interval = setInterval(() => {
            setCurrentPrice((prev) => {
                const change = prev * (1 + (Math.random() - 0.5) * 0.002)
                return Number.parseFloat(change.toFixed(2))
            })

            setPriceChange((prev) => {
                const newChange = prev + (Math.random() - 0.5) * 0.1
                return Number.parseFloat(newChange.toFixed(2))
            })
        }, 3000)

        return () => clearInterval(interval)
    }, [selectedCoin])

    // Filter coins for search
    const filteredCoins = allCoins.filter(
        (coin) =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    // Toggle favorite
    const toggleFavorite = () => {
        if (favorites.includes(selectedCoin.id)) {
            setFavorites(favorites.filter((id) => id !== selectedCoin.id))
        } else {
            setFavorites([...favorites, selectedCoin.id])
        }
    }

    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header title="Accounts" walletConnected={true} />

                <div className="flex flex-1">
                    {/* Left sidebar with crypto assets */}
                    <CoinSidebar
                        coins={allCoins}
                        selectedCoin={selectedCoin}
                        onSelectCoin={setSelectedCoin}
                        onAddAssets={() => setShowAddAssetsModal(true)}
                    />

                    {/* Main content */}
                    <div className="flex-1 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <h2 className="text-2xl font-bold">{selectedCoin.name}</h2>
                                <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleFavorite}>
                                    <Star
                                        className={`h-5 w-5 ${favorites.includes(selectedCoin.id) ? "fill-orange-500 text-orange-500" : "text-gray-400"}`}
                                    />
                                </Button>
                            </div>
                            <Button className="bg-orange-500 hover:bg-orange-600 gap-2 text-white">
                                <Plus className="h-4 w-4" />
                                Add transaction
                            </Button>
                        </div>

                        {/* Overview */}
                        <CoinOverview coin={selectedCoin} currentPrice={currentPrice} priceChange={priceChange} />

                        {/* Chart Preview */}
                        <Card className="mb-6 border border-gray-200 shadow-sm">
                            <CardContent className="p-6">
                                <ChartHeader coin={selectedCoin} currentPrice={currentPrice} />
                                <CandlestickChart data={chartData} currentPrice={currentPrice} />
                            </CardContent>
                        </Card>

                        {/* Transactions and Alerts */}
                        <div className="grid grid-cols-2 gap-6">
                            {/* Transactions */}
                            <TransactionList transactions={transactions} coinName={selectedCoin.name} />

                            {/* Alerts */}
                            <AlertList alerts={alerts} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Assets Modal */}
            <AddAssetsModal
                open={showAddAssetsModal}
                onOpenChange={setShowAddAssetsModal}
                coins={filteredCoins}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onSelectCoin={setSelectedCoin}
            />
        </div>
    )
}

// Function to generate transactions with correct types
function generateTransactions(selectedCoin: any): Transaction[] {
    return [
        {
            id: 1,
            type: "deposit",  // Ensure type is 'deposit' or 'withdraw'
            date: "2025-03-22",
            amount: "0.5",
            crypto: selectedCoin.name,
        },
        {
            id: 2,
            type: "withdraw",  // Ensure type is 'deposit' or 'withdraw'
            date: "2025-03-21",
            amount: "0.2",
            crypto: selectedCoin.name,
        },
        // More transactions here as needed
    ]
}
