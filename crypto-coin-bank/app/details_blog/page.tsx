import RelatedArticles from "@/components/artical";
import Footer from "@/components/footer";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, MessageCircle, RssIcon, Share2, ThumbsUp, Twitter } from "lucide-react";
import Image from "next/image";




export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Nav />

            <main className="container mx-auto flex flex-col lg:flex-row justify-center items-start lg:px-24 px-4 py-10 lg:py-14 gap-10 lg:gap-32">
                <article className="flex flex-col space-y-8 w-full lg:w-3/5">
                    <header>
                        <div className="text-sm font-semibold text-[#FF6E00] uppercase tracking-wide">Blockchain</div>
                        <h1 className="text-2xl sm:text-3xl font-bold mt-3 text-gray-900 leading-tight">
                            Cryptocurrency News: Building in Resiliency <br className="hidden md:block" /> and International Co-Operation
                        </h1>
                        <div className="flex flex-wrap items-center text-sm text-gray-500 mt-4 gap-3">
                            <span>Oct 5, 2023</span>
                            <span className="hidden sm:inline">•</span>
                            <span>3 min read</span>

                            <div className="flex items-center gap-2 ml-auto">
                                {[Facebook, Twitter, Linkedin, RssIcon, Share2].map((Icon, idx) => (
                                    <Button key={idx} variant="ghost" size="sm" className="h-8 w-8 hover:bg-gray-100 rounded-full p-0">
                                        <Icon className="h-4 w-4 text-gray-600" />
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </header>

                    {/* Main content */}
                    <div className="flex flex-col lg:flex-row items-start w-full gap-6">
                        <div className="flex-1">
                            <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden bg-[#0A0B1C]">
                                <Image
                                    src="Thumbnill.svg"
                                    alt="Cryptocurrency chart"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="text-lg text-gray-600 space-y-6 leading-relaxed mt-4">
                                <p>
                                    Binance ensures high liquidity at all times on the new Options Platform by lowering trading fees and
                                    working closely with a wide pool of experienced institutional market makers. The goal is to reduce
                                    slippage and trading costs, which is often a key concern amongst Options traders.
                                </p>
                                <p>
                                    In the following blog post, we explore what Binance Options are, the benefits our new Options Platform
                                    offers to traders, and how you can start trading Options today!
                                </p>
                            </div>
                        </div>

                        <aside className="flex flex-col w-full lg:w-[256px]">
                            <RelatedArticles />
                        </aside>
                    </div>

                    {/* Additional sections */}
                    <section className="mt-8">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">What Are Binance Options?</h2>
                        <p className="text-gray-600">
                            Binance Options are our newest financial instruments that give traders the right, but not the
                            obligation, to buy or sell the underlying asset at a predetermined price and date. The form of
                            crypto-derivatives was built for traders to gain market exposure at a fixed premium, which makes it
                            ideal for hedging.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Benefits of Trading Binance Options</h2>
                        <p className="text-gray-600">
                            Being one of the most versatile financial instruments on the market, Binance Options can offer you
                            additional flexibility and cost efficiencies to complement your trading strategies.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Advantages of Binance Options</h2>
                        <ul className="space-y-6">
                            <li>
                                <h3 className="font-bold text-gray-900">Competitive Fees</h3>
                                <p className="text-gray-600 mt-2">
                                    Binance offers one of the lowest option transaction fees in the market to make Options trading
                                    cost-effective and accessible to everyone.
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold text-gray-900">User-Focused Experience</h3>
                                <p className="text-gray-600 mt-2">
                                    Binance Options displays an intuitive user-focused interface, combined with API connectivity and
                                    convenient ways to switch assets across multiple trading products, giving traders unparalleled
                                    operational efficiency.
                                </p>
                            </li>
                            <li>
                                <h3 className="font-bold text-gray-900">Stablecoin Options</h3>
                                <p className="text-gray-600 mt-2">
                                    Binance Options are priced and settled in stablecoin, which makes cost and profit calculations
                                    straightforward for traders even in volatile markets.
                                </p>
                            </li>
                        </ul>
                    </section>

                    {/* Reaction Buttons */}
                    <div className="flex items-center justify-center gap-8 py-6 border-t border-b">
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                            <ThumbsUp className="h-4 w-4 fill-[#FF6E00]" />
                            <span className="text-gray-600">436</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-gray-600">9</span>
                        </Button>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
