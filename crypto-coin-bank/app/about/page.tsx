"use client"
import Footer from '@/components/footer';
import Nav from '@/components/Nav';
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";


const Page = () => {
    return (
        <div>
            <Nav />
            <div className="min-h-screen bg-background">
                {/* Header */}
                <main className="pb-0">
                    {/* Hero Section */}
                    <section className="container mx-auto px-4 pt-12 pb-20">
                        <div className="max-w-[800px] mx-auto text-center">
                            <span className="text-orange-500 text-sm font-medium">ABOUT</span>
                            <h1 className="text-xl font-semibold mb-4">Our Missions</h1>

                            <div className="rounded-2xl overflow-hidden">
                                <Image
                                    src="/about.png"
                                    alt="Team collaboration"
                                    width={800}
                                    height={400}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Mission Section */}
                    <section className="container mx-auto px-4 py-16">
                        <div className="grid md:grid-cols-[1.5fr,1fr] gap-16 max-w-[1000px] mx-auto">
                            <div className="text-center md:text-left">
                                <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                                <p className="text-gray-600 mb-6">
                                    Every person could use resources offered via all blockchain for personal gain. We offer the ecosystem
                                    to do so with ease. Each member receives professional support from a dedicated group. Money makes
                                    credit card approach difficult and all steps to gain.
                                </p>
                                <a href="#" className="text-orange-500 font-medium hover:underline">
                                    Learn more
                                    <span>&apos;</span>
                                </a>
                            </div>
                            <div className="flex flex-col gap-4 w-full md:w-[448px]">
                                {/* First Box */}
                                <div className="flex flex-col justify-center items-start w-full p-8 bg-white border border-[#E7E3FC] rounded-xl">
                                    <div className="text-2xl font-bold text-gray-900">1 million+</div>
                                    <div className="text-sm text-gray-500">Average daily volume</div>
                                </div>

                                {/* Second Box */}
                                <div className="flex flex-col justify-center items-start w-full p-8 bg-white border border-[#D1D5DB] rounded-xl">
                                    <div className="text-2xl font-bold text-gray-900">300%+</div>
                                    <div className="text-sm text-gray-500">Transaction per second</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Quote Section */}
                    <section className="container mx-auto px-4 py-16">
                        <div className="max-w-[600px] mx-auto text-center">
                            <div className="flex flex-col items-center text-center max-w-[736px] mx-auto space-y-4">
                                <span className="text-[#FF6E00] text-[80px] leading-[110%] font-medium">&ldquo;</span>

                                <blockquote className="text-[#0E0637] text-[40px] leading-[140%] font-medium">
                                    Its low fees, high rates for staking, and futures markets are all a draw.
                                </blockquote>

                                <span className="text-[#FF6E00] text-[80px] leading-[110%] font-medium">&rdquo;</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gray-200">
                                    <Image src="/abjon.png" alt="John Doe" width={40} height={40} className="rounded-full" />
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-[14px] leading-[145%] font-medium text-black">John Clayton</span>
                                    <span className="text-[12px] leading-[135%] tracking-[0.005em] text-gray-500 font-normal">
                                        Investor
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Our Founders Section */}
                    <section className="container mx-auto px-4 py-16">
                        <h2 className="text-xl font-semibold text-center mb-12">Our Founders</h2>
                        <div className="flex flex-wrap justify-center gap-8 max-w-[1120px] mx-auto">
                            {[
                                { name: "Clark Kent", role: "Founder & CEO", image: "/oza.png", bg: "#FF6E00" },
                                { name: "Ali Price", role: "Founder & CTO", image: "/ali.png", bg: "#D3D6DA" },
                                { name: "Miranda Nielsen", role: "Founder & COO", image: "/mar.png", bg: "#FFCD66" },
                            ].map((founder) => (
                                <div
                                    key={founder.name}
                                    className="flex flex-col items-center bg-white rounded-xl p-6 w-full sm:w-[352px] h-auto sm:h-[367px] shadow-[0px_0px_12px_rgba(82,53,232,0.2)]"
                                >
                                    {/* Updated Avatar Founder */}
                                    <div
                                        className="w-[148px] h-[148px] pt-4 rounded-full overflow-hidden mb-4 flex items-center justify-center"
                                        style={{ backgroundColor: founder.bg }}
                                    >
                                        <Image
                                            src={founder.image || "/placeholder.svg"}
                                            alt={founder.name}
                                            width={148}
                                            height={148}
                                            className="rounded-full"
                                        />
                                    </div>

                                    {/* Name and Role */}
                                    <h3 className="font-medium mb-1">{founder.name}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{founder.role}</p>

                                    {/* Social Icons */}
                                    <div className="flex justify-center gap-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <Instagram className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <Twitter className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <Linkedin className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Partners Section */}
                    <section className="py-24 px-4">
                        <div className="max-w-7xl mx-auto text-center space-y-8">
                            <div className="space-y-2 text-center">
                                <p className="text-orange-500 font-medium text-sm md:text-base">PARTNERS</p>
                                <h2 className="text-2xl md:text-3xl font-bold">Were backed by the best</h2>
                                <p className="text-gray-600 text-sm md:text-base">Trusted by these blockchains leading industries</p>
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-6">
                                <div className="w-40 sm:w-48 md:w-52 lg:w-60">
                                    <Image src="/ic1.svg" alt="IC1" width={240} height={128} className="object-contain w-full" />
                                </div>
                                <div className="w-40 sm:w-48 md:w-52 lg:w-60">
                                    <Image src="/ic2.svg" alt="IC2" width={240} height={128} className="object-contain w-full" />
                                </div>
                                <div className="w-40 sm:w-48 md:w-52 lg:w-60">
                                    <Image src="/ic3.svg" alt="IC3" width={240} height={128} className="object-contain w-full" />
                                </div>
                                <div className="w-40 sm:w-48 md:w-52 lg:w-60">
                                    <Image src="/ic4.svg" alt="IC4" width={240} height={128} className="object-contain w-full" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Join Mission CTA */}
                    <section
                        className="container text-white rounded-3xl p-6 sm:p-12 text-center max-w-[1000px] mx-auto bg-opacity-90 bg-cover bg-center relative"
                        style={{
                            backgroundImage: "url('/aboutbg.svg')",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50 opacity-50 rounded-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-lg sm:text-2xl font-bold mb-4">Join our mission</h2>
                            <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-[600px] mx-auto">
                                Join our mission to bring greater choice, independence, and opportunity by reimagining money for users.
                            </p>
                        </div>
                    </section>


                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Page

