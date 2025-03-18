"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const menuItems = [
        {
            title: "Company",
            links: [
                { name: "About", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Affiliates", href: "/affiliates" },
                { name: "Press", href: "/press" },
                { name: "Investors", href: "/investors" },
                { name: "Legal & Privacy", href: "/legal" },
            ],
        },
        {
            title: "Features",
            links: [
                { name: "Buy & Sell Crypto", href: "/buy-sell-crypto" },
                { name: "Wallet", href: "/wallet" },
                { name: "Card", href: "/card" },
                { name: "Dashboard", href: "/dashboard" },
                { name: "Trading", href: "/trading" },
                { name: "Portfolio", href: "/portfolio" },
            ],
        },
        {
            title: "Developers",
            links: [
                { name: "Cloud", href: "/cloud" },
                { name: "Wallet SDK", href: "/wallet-sdk" },
                { name: "Query & Transact", href: "/query-transact" },
                { name: "Commerce", href: "/commerce" },
                { name: "Exchange & Pro", href: "/exchange-pro" },
                { name: "API Access", href: "/api-access" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "Blog", href: "/blog" },
                { name: "Help & Support", href: "/help-support" },
                { name: "Customer Stories", href: "/customer-stories" },
                { name: "FAQ", href: "/FQA" },
            ],
        },
    ];

    return (
        <div className="bg-cover lg:pr-10 bg-gradient-to-b from-white via-[#F7F6FE] to-[#F7F6FE] shadow-[0_4px_200px_rgba(232,249,247,0.2)]">
            <footer className="max-w-7xl mx-auto py-12 px-4 space-y-16">

                {/* Wrapper to Ensure Same Width */}
                <div className="max-w-[1120px] mx-auto space-y-16">

                    {/* Sign In Banner (Orange Section) */}
                    <div className="flex flex-col md:flex-row items-start p-6 md:p-[88px_64px_112px] w-full lg:w-[1120px] bg-[#FF6E00] rounded-[24px] lg:h-[355px] lg:p-[64px_64px_80px]">
                        <div className="flex flex-col md:flex-row items-start justify-between w-full gap-8">
                            {/* Left Side: Text & Button */}
                            <div className="space-y-3">
                                <div className="flex flex-col items-start text-white">
                                    <h2 className="text-3xl md:text-[40px] font-medium leading-[140%] tracking-[-0.01em] font-inter">
                                        Sign in now
                                        <span className="text-[#FFE0C8]"> to get <br /> $50 worth of</span> <br />
                                        <span className="text-[#FFE0C8]">crypto</span>
                                    </h2>
                                </div>
                                <button className="bg-white text-[#FF6E00] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                                    Get Started
                                </button>
                            </div>

                            {/* Right Side: Phone Image & QR Code */}
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex flex-col items-center flex-none order-1 md:order-2">
                                    <div className="pb-5">
                                        <Image src="/qr.svg" alt="QR Code" width={140} height={140} className="mx-auto" />
                                    </div>
                                    <Image src="/arr.svg" alt="Arr" width={16} height={32} className="mx-auto" />
                                    <div className="pt-4 text-[#FFFFFF] text-sm text-center">
                                        Scan to download <br /> Coinbank wallet
                                    </div>
                                </div>

                                {/* Phone Image */}
                                <div className="relative w-full md:w-[300px] h-[287px] pl-4 flex items-center justify-center order-2 md:order-1">
                                    <Image src="/phone.svg" alt="Phone" width={320} height={400} className="object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links (White Section) */}
                    <div className="flex flex-col md:flex-row items-start p-6 md:p-[64px_32px_58px_64px] w-full lg:w-[1120px] bg-white rounded-[24px]">
                        <div className="w-full max-w-[1124px] mx-auto px-4">
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8">

                                {/* Logo & Language */}
                                <div className="col-span-2 md:col-span-2 flex flex-col justify-start items-start gap-6">
                                    <div className="flex flex-col justify-start items-start gap-4">
                                        <div className="flex pt-6 items-center gap-2 p-1 w-[42px] h-[40px]">
                                            <Link href="/">
                                                <Image src="/bgico.svg" alt="" width={42} height={42} />

                                            </Link>
                                        </div>

                                        <Select defaultValue="english">
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Select Language" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="english">English</SelectItem>
                                                <SelectItem value="spanish">Spanish</SelectItem>
                                                <SelectItem value="french">French</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        {/* Social Icons */}
                                        <div className="flex gap-6 text-gray-400">
                                            {[1, 2, 3, 4, 5].map((num) => (
                                                <Link key={num} href="#" className="hover:text-gray-600">
                                                    <Image src={`/s${num}.svg`} alt="" width={20} height={20} />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Links Navigation */}
                                {menuItems.map((section, index) => (
                                    <div key={index} className="space-y-4">
                                        <h3 className="font-semibold">{section.title}</h3>
                                        <ul className="space-y-2">
                                            {section.links.map((link, i) => (
                                                <li key={i}>
                                                    <Link href={link.href} className="text-gray-500 hover:text-gray-900">
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                <div className="mt-auto w-full text-center text-[#9C9CAB] text-sm p-4 lg:m-[-70px] lg:pl-[60px] whitespace-nowrap">
                                    <p className="text-gray-500 text-sm inline-block">Copyright 2022 © Coinbank</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>

    );
}
