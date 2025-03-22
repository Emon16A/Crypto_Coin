"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Page() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="grid min-h-screen md:grid-cols-2 gap-4">
            {/* Left side - Login Form */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col">
                <div className="max-w-sm mx-auto w-full">
                    <div className="mb-8">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/bgico.svg" width={32} height={32} alt="Coinbank" />
                            <span className="text-xl font-bold tracking-tight text-[#0E0637]">Coinbank</span>
                        </Link>

                        <h1 className="text-2xl font-semibold pt-5 mb-2">Sign in to Coinbank</h1>
                        <p className="text-sm text-muted-foreground">We&apos;re glad you are back</p>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm" htmlFor="email">Email</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Emon"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm" htmlFor="password">Password</label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-2 top-1/2 -translate-y-1/2"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOffIcon className="h-4 w-4" />
                                    ) : (
                                        <EyeIcon className="h-4 w-4" />
                                    )}
                                </Button>
                            </div>
                        </div>

                        <Link
                            href="#"
                            className="text-sm text-orange-500 hover:text-orange-600"
                        >
                            Forgot password?
                        </Link>

                        <Link href="/Dashbord">
                            <Button className="w-full bg-orange-500 hover:bg-orange-600">

                                Sign in


                            </Button>
                        </Link>
                    </form>

                    <div className="mt-6 space-y-4">
                        <Button variant="outline" className="w-full">
                            <Image
                                src="/google.png"
                                alt="Google"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            Sign in with Google
                        </Button>

                        <Button variant="outline" className="w-full">
                            <Image
                                src="/FB.png"
                                alt="Facebook"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            Sign in with Facebook
                        </Button>
                    </div>

                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        Do not have an account already?
                        <Link href="/Signup" className="text-orange-500 hover:text-orange-600">
                            Sign up now
                        </Link>
                    </p>

                </div>
            </div>

            {/* Right side - Crypto Tickers and Real-Time Chart */}
            <div className="hidden md:block bg-[#0A0B1E] text-white p-8 md:p-12 lg:p-16 relative">
                <Image
                    src="/rside.svg"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    className="mb-4 rounded-xl"
                />
            </div>
        </div>
    )
}
