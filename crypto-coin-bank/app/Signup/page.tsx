"use client";
import SignupETH from "@/components/SignupETH";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDownCircle, ArrowUpCircle, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
export default function SignupPage() {
    return (
        <div className="flex flex-col lg:flex-row items-start p-0 relative w-full min-h-screen bg-gradient-to-b from-white to-[#F7F6FE]">
            {/* Left Section - Signup Form */}
            <div className="w-full lg:w-1/2 bg-gradient-to-b from-white to-[#F7F6FE] px-6 lg:px-20 py-16 lg:py-20">
                <div className="flex flex-col gap-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/bgico.svg" width={32} height={32} alt="Coinbank" />
                        <span className="text-xl font-bold tracking-tight text-[#0E0637]">Coinbank</span>
                    </Link>
                    {/* Form Heading */}
                    <div className="space-y-2">
                        <h1 className="text-4xl font-medium tracking-tight">Create an account</h1>
                        <p className="text-lg text-[#717184]">Let&apos;s begin your 30-day risk-free trial</p>
                    </div>
                    {/* Form */}
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#131316]">Name</label>
                            <Input className="h-12 border-[#C8C8D0] px-6 focus:border-[#FF6E00] focus:ring-[#FF6E00]" placeholder="Emon" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#131316]">Email</label>
                            <Input type="email" className="h-12 border-[#C8C8D0] px-6 focus:border-[#FF6E00] focus:ring-[#FF6E00]" placeholder="Andre Santos" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#131316]">Password</label>
                            <div className="relative">
                                <Input type="password" className="h-12 border-[#C8C8D0] px-6 focus:border-[#FF6E00] focus:ring-[#FF6E00]" />
                                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9C9CAB]">
                                    <Eye className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                        <Button className="h-12 w-full bg-[#FF6E00] font-medium hover:bg-[#FF6E00]/90">Create account</Button>
                        <div className="space-y-4">
                            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#FFE0C8] bg-white">
                                <Image src="/google.png" width={24} height={24} alt="Google" />
                                <span className="font-medium text-[#0E0637]">Sign up with Google</span>
                            </button>
                            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#FFE0C8] bg-white">
                                <Image src="/FB.png" width={24} height={24} alt="Facebook" />
                                <span className="font-medium text-[#0E0637]">Sign up with Facebook</span>
                            </button>
                        </div>
                        <p className="text-center text-sm text-[#717184]">
                            Have an account already? <Link href="/signin" className="text-[#FF6E00] hover:underline">Sign in</Link>
                        </p>

                    </form>
                </div>
            </div>

            {/* Right Section - Promo & Features */}
            <div className="flex-1 bg-[#0E0637] px-6 lg:px-16 py-16 text-white">
                <div className="space-y-16">
                    <h2 className="text-3xl font-medium tracking-tight">~ With Coinbank, multi-signature digital wallet, you can start saving.</h2>
                    <p className="text-lg leading-relaxed">
                        If you are interested in getting involved in the booming cryptocurrency industry and want to own your own digital coins, then sign up with us today!
                    </p>

                    <div className="flex flex-col lg:flex-row gap-8 pt-4">
                        <div className="space-y-4 pt-4 pb-4">
                            <div className="flex items-center justify-center w-[207px] h-[44px] bg-[#FFE0C8] rounded-full px-4 py-2 text-black">
                                Used by over 300,000
                            </div>
                            <div className="flex -space-x-3 pt-4 pb-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Image key={i} src={`/u${i}.png`} width={48} height={48} alt={`User ${i}`} className="rounded-full border-2 border-white" />
                                ))}
                            </div>
                            {/* Recent Activity Section */}
                            <div className="bg-white text-black p-6 rounded-lg w-72">
                                <h3 className="font-medium">Recent Activity</h3>
                                <div className="divide-y">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="flex justify-between py-3 text-sm">
                                            <div className="flex gap-2 items-center">
                                                {i % 2 === 0 ? <ArrowDownCircle className="text-red-500" /> : <ArrowUpCircle className="text-green-500" />}
                                                <span>{i % 2 === 0 ? 'Withdrawn Funds' : 'Deposited Funds'}</span>
                                            </div>
                                            <span className={i % 2 === 0 ? 'text-red-500' : 'text-green-500'}>{i % 2 === 0 ? '-$200' : '+$200'}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side: si.svg & SignupETH */}
                        <div className="space-y-6 pt-4 pb-4">
                            <Image src="/si.svg" width={286} height={180} alt="Card" />
                            <Suspense fallback={<div>Loading top coins...</div>}>
                                <SignupETH />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
