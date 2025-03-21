"use client"
import { CodeBlock } from "@/components/dev-section";
import Footer from "@/components/footer";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const icons = [
    "/Dog.svg",
    "/Logo.svg",
    "/BTC.svg",
    "/ATC.svg",
    "/ETH.svg",
    "/Gemini.svg",
    "/XRP.svg",
];

const Page = () => {
    return (
        <div className="min-h-screen">
            <Nav />
            <div className="min-h-screen bg-[#ffff]">
                <section className="container py-20 md:py-32 relative bg-[url('/Dev.svg')] bg-no-repeat bg-center bg-cover">
                    <div className="max-w-4xl mx-auto text-center relative">
                        {/* Background Overlay */}
                        <div className="absolute inset-0 -z-10 opacity-10">
                            <Image
                                src="/placeholder.svg?height=600&width=1200"
                                alt="Background code"
                                width={1200}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="text-orange-500 text-sm font-medium mb-4">FOR DEVELOPERS</div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0f172a]">
                            Launch your own
                            <br />
                            crypto wallet
                        </h1>
                        <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
                            Create a seamless and secure multi-currency wallet that is compatible with all major cryptocurrencies.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button className="bg-orange-500 hover:bg-white hover:text-orange-500 text-white rounded-md px-8 py-2.5">Get Started</Button>
                            <Button
                                variant="ghost"
                                className="bg-white text-orange-500 hover:bg-orange-500 hover:text-white rounded-md px-8 py-2.5"
                            >
                                Read the docs
                            </Button>

                        </div>
                    </div>
                </section>


                {/* Features Section */}
                <section className="container py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-center md:text-left">

                        <Image
                            src="/devpn.png"
                            alt="Developer"
                            width={644}
                            height={426}
                            unoptimized
                            className="w-full mx-auto"
                        />

                        <div className="mx-auto">
                            <div className="text-orange-500 text-sm font-medium mb-4">FEATURES</div>
                            <h2 className="text-3xl font-bold mb-6 text-[#0f172a]">
                                Full of blockchain <br /> development <br /> services
                            </h2>
                            <p className="text-slate-600 mb-8">
                                Cloud provides APIs, services and infrastructure across a <br /> breadth of primitives
                            </p>
                            <div className="grid grid-cols-2 gap-6 w-[290px] md:w-[350px] p-2 mx-auto">
                                {[
                                    { src: "/n1.svg", alt: "Funding", label: "Funding" },
                                    { src: "/n2.svg", alt: "Staking", label: "Staking" },
                                    { src: "/n3.svg", alt: "Liquidity", label: "Liquidity" },
                                    { src: "/n4.svg", alt: "Margin Trading", label: "Margin Trading" },
                                ].map((item, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="flex items-center gap-2 text-gray-800 hover:text-orange-500 transition-all duration-200"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shadow-md hover:bg-orange-200 transition-all duration-200">
                                            <Image src={item.src} alt={item.alt} width={20} height={20} />
                                        </div>
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>





                <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-24 bg-white flex items-center justify-center">
                    <div className="pt-5 max-w-7xl mx-auto text-center px-4">
                        <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-3xl mx-auto">
                            <p className="w-[76px] h-[20px] font-inter font-medium text-[14px] leading-[140%] tracking-[0.04em] uppercase text-[#FF6E00]">
                                Features
                            </p>
                            <p className="w-full font-inter font-medium text-[28px] sm:text-[35px] leading-[140%] tracking-[-0.01em] text-[#0E0637]">
                                Secure staking across many networks
                            </p>
                            <p className="w-full sm:w-[80%] lg:w-[712px] font-abeezee font-normal text-[16px] leading-[160%] text-center tracking-[0.005em] text-[#717184]">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                            <Button className="bg-orange-500 hover:bg-white hover:text-orange-500 text-white rounded-md px-8 py-2.5">
                                Learn more
                            </Button>
                        </div>

                        <div className="pt-20 w-full flex justify-center">
                            <div className="relative w-full max-w-[1120px] lg:w-[1000px] sm:h-[164px] bg-gradient-to-r from-white to-transparent 
                                rounded-full flex flex-nowrap items-center justify-between px-4 sm:px-8 h-15 overflow-hidden">

                                {icons.map((icon, index) => (
                                    <React.Fragment key={index}>
                                        <Image
                                            src={icon}
                                            alt="Crypto Icon"
                                            width={64}
                                            height={64}
                                            className="w-[10%] sm:w-[8%] md:w-[6%] lg:w-[5%] max-w-[64px]"
                                        />
                                        {index !== icons.length - 1 && (
                                            <div className="border-t border-[#E7E3FC] w-[5%] sm:w-[8%] md:w-[6%] lg:w-[5%] flex-shrink-0"></div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>



                <section className="container mx-auto px-4 py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        <div className="space-y-6 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1046] leading-tight">
                                We make Web3 development easy
                            </h1>
                            <p className="text-slate-500 max-w-md mx-auto md:mx-0">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            </p>
                            <Link
                                href="/docs"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-orange-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                Read the docs
                            </Link>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
                            <CodeBlock />
                        </div>

                    </div>
                </section>


                {/* Features Section */}
                <section className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-3 gap-6">
                        <FeatureCard
                            title="Developer Forum"
                            description="Discuss with the developer community."
                            linkText="Go to forum"
                            linkHref="/forum"
                        />
                        <FeatureCard
                            title="Support"
                            description="Reach out directly to our Support team."
                            linkText="Contact us"
                            linkHref="/support"
                        />
                        <FeatureCard
                            title="Github"
                            description="View and download open source code."
                            linkText="Go to Github"
                            linkHref="https://github.com"
                        />
                    </div>
                </section>






            </div>
            <Footer />
        </div>
    )
}
function FeatureCard({
    title,
    description,
    linkText,
    linkHref,
}: {
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
}) {
    return (
        <div
            className="bg-[#1a1046] rounded-xl p-8 relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/bgdev.png')" }} // Add background image
        >
            <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
                <p className="text-slate-300 mb-4">{description}</p>
                <Link href={linkHref} className="text-white hover:underline">
                    {linkText} →
                </Link>
            </div>
        </div>
    );
}

export default Page;
