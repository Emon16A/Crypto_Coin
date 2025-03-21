import CryptoTable from "@/components/crypto-table"
import { FilterButton } from "@/components/filter-button"
import Footer from "@/components/footer"
import { MarketStats } from "@/components/market-stats"
import Nav from "@/components/navpr"
import { SearchBar } from "@/components/search-bar"
import TopCoins from "@/components/top-coins"
import { Suspense } from "react"

export default function Page() {
    return (
        <div className="min-h-screen bg-background">
            {/* Navbar */}
            <Nav />

            {/* Market Stats Section */}
            <div className="bg-[#FF6B00] text-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <Suspense fallback={<div>Loading market stats...</div>}>
                        <MarketStats />
                    </Suspense>
                </div>
            </div>

            {/* Main Content */}
            <div className="container max-w-6xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-[#FFFFFF]">
                <Suspense fallback={<div>Loading top coins...</div>}>
                    <TopCoins />
                </Suspense>

                {/* All Assets Header */}
                <div className="mt-8 flex flex-col lg:pt-10 sm:flex-row items-start sm:items-center justify-between">
                    <div className="text-lg sm:text-xl font-semibold">All Assets</div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-0">
                        <SearchBar />
                        <FilterButton />
                    </div>
                </div>

                {/* Crypto Table */}
                <div className="mt-6 overflow-x-auto">
                    <Suspense fallback={<div>Loading crypto table...</div>}>
                        <CryptoTable />
                    </Suspense>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
