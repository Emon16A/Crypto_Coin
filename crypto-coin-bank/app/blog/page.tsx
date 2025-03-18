

"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from '../../components/footer';
import Nav from '../../components/Nav';


const categories = ["Trending", "Crypto and Blockchain", "Investment", "Markets", "Web 3", "Press Release"]

const featuredPosts = [
    {
        title: "Cryptocurrency News: Building in Resiliency and International Co-Operation",
        description: "Introducing the all new Coinbank identity, own your crypto adventure and driving mass adoption.",
        date: "Oct 1, 2023",
        tag: "#crypto",
        image: "/Thumbnill.svg",

        link: "/details_blog",
    },
    {
        title: "The Future of DeFi: Innovations and Challenges",
        description: "Exploring the latest developments in decentralized finance and what lies ahead.",
        date: "Oct 2, 2023",
        tag: "#crypto",
        image: "/d.jpg",
        link: "/details_blog",

    },
]

const posts = [
    {
        title: "How to Use PayPal to Buy Cryptocurrencies",
        date: "Sep 23, 2022",
        tag: "#crypto",
        image: "/TH1.svg",
        link: "/details_blog",
    },
    {
        title: "Why You Should Trade Cryptocurrencies in Coinbank",
        date: "Sep 23, 2022",
        tag: "#crypto",
        image: "/TH2.svg",
        link: "#",
    },
    {
        title: "Three Reasons to Trade in Coinbank's platform",
        date: "Sep 23, 2022",
        tag: "#crypto",
        image: "/TH3.svg",
        link: "#",
    },
    {
        title: "GUSD Hits Its $20B Market Cap Milestone",
        date: "Sep 23, 2022",
        tag: "#crypto",
        image: "/TH4.svg",
        link: "#",
    },
    {
        title: "Crypto Investors Yanked Money From ETH Products",
        date: "Sep 23, 2022",
        tag: "#crypto",
        image: "/TH5.svg",
        link: "#",
    },
    {
        title: "Why Litecoin is Worth Paying Attention To",
        date: "Sep 23, 2022",
        tag: "#crypto",
        image: "/TH6.svg",
        link: "#",
    },
    {
        title: "How to Use Binance Pay as a Payment Method on Binance P2P",
        date: "Sep 23, 2022",
        tag: "#crypto",
        image: "/TH7.svg",
        link: "#",
    },
    {
        title: "Enjoy frictionless crypto purchases with Apple Pay and Google Pay",
        date: "Sep 23, 2022",
        tag: "#crypto",
        image: "/TH8.svg",
        link: "#",
    },
    {
        title: "Crypto Market Maker Wintermute Hacked for $160M",
        date: "Sep 23, 2022",
        tag: "#crypto",
        image: "/TH9.svg",
        link: "#",
    },
]

export default function BlogPage() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)


    return (
        <div className="min-h-screen flex flex-col">
            <Nav />

            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="text-center space-y-4 mb-12">
                        <p className=" text-[#FF6E00] uppercase tracking-wide">INSIGHTS ABOUT CRYPTO</p>
                        <h1 className="text-4xl font-bold sm:text-5xl text-[#0A0B2E]">The Blog</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Stories from the easiest and most trusted place to buy, sell, and use crypto.
                        </p>
                    </div>

                    {/* Featured Post Slider */}
                    <div className="mb-12 relative">
                        <Link href="#" className="block">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                                    <Image
                                        src={featuredPosts[currentSlide].image || "/placeholder.svg"}
                                        alt={featuredPosts[currentSlide].title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-[#0A0B2E]">{featuredPosts[currentSlide].title}</h2>
                                    <p className="text-muted-foreground">{featuredPosts[currentSlide].description}</p>
                                    <p className="text-sm">
                                        <span className="text-primary">{featuredPosts[currentSlide].tag}</span>
                                        {" • "}
                                        <span className="text-muted-foreground">{featuredPosts[currentSlide].date}</span>
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <div className="flex justify-center gap-2 mt-4">
                            {featuredPosts.map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-2 w-2 rounded-full ${index === currentSlide ? "bg-primary" : "bg-gray-300"}`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="flex overflow-x-auto space-x-4 pb-4 mb-8">
                        {categories.map((category) => (
                            <Button key={category} variant="secondary" className="whitespace-nowrap rounded-full">
                                {category}
                            </Button>
                        ))}
                    </div>

                    {/* Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {posts.map((post, i) => (
                            <Link key={i} href={post.link} className="group">
                                <div className="bg-white rounded-lg overflow-hidden transition-shadow hover:shadow-lg">
                                    <div className="relative aspect-[4/3]">
                                        <Image
                                            src={post.image || "/placeholder.svg"}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-lg group-hover:text-primary">{post.title}</h3>
                                        <p className="text-sm mt-2">
                                            <span className="text-primary">{post.tag}</span>
                                            {" • "}
                                            <span className="text-muted-foreground">{post.date}</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-2 mb-12">
                        <Button variant="outline" size="icon" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        {[1, 2, 3, "...", 10].map((page, i) => (
                            <Button
                                key={i}
                                variant={currentPage === page ? "default" : "outline"}
                                className={page === "..." ? "cursor-default" : ""}
                                onClick={() => typeof page === "number" && setCurrentPage(page)}
                            >
                                {page}
                            </Button>
                        ))}
                        <Button variant="outline" size="icon" onClick={() => setCurrentPage(Math.min(10, currentPage + 1))}>
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-[#0A0B2E] rounded-lg p-8 mb-12">
                        <div className="max-w-xl mx-auto text-center">
                            <h2 className="text-2xl font-bold mb-4 text-white">Stay up to date</h2>
                            <div className="flex gap-4">
                                <Input placeholder="Enter your email" type="email" className="bg-white" />
                                <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
