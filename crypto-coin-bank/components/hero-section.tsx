import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-start space-y-6 w-full lg:max-w-[458px] h-auto">
                    <p className="text-orange-500 font-medium uppercase tracking-wider text-sm">
                        Sign in to your secure wallet!
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E0637] leading-tight">
                        The next-gen crypto wallet & trading platform
                    </h1>
                    <p className="text-[#717184] text-base md:text-lg leading-relaxed max-w-full lg:max-w-[390px]">
                        All of your cryptocurrency in one place — from Bitcoin and Ethereum to Litecoin and Ripple.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <div className="flex flex-col gap-[7px] w-full">
                            <div className="hidden">
                                <p className="text-[#131316] font-medium text-sm">Email</p>
                            </div>
                            <div className="flex items-center w-full bg-white shadow-[0px_0px_20px_rgba(82,53,232,0.1)] rounded-lg">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 text-sm text-[#9C9CAB] focus:outline-none"
                                />
                            </div>
                        </div>
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-6 py-3">
                            Get Started
                        </Button>
                    </div>
                </div>

                {/* Image shown only on desktop */}
                <div className="hidden lg:block  flex-col items-center justify-center w-full h-[624px] bg-gradient-to-b from-white to-[#F7F6FE] shadow-[0px_4px_200px_rgba(232,249,247,0.2)]">
                    <Image
                        src="/hero.svg"
                        alt="Crypto trading interface"
                        width={544}
                        height={480}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>

            {/* Image shown below the buttons on mobile */}
            <div className="lg:hidden mt-8">
                <Image
                    src="/hero.svg"
                    alt="Crypto trading interface"
                    width={544}
                    height={480}
                    className="w-full h-auto"
                    priority
                />
            </div>
        </section>
    );
}
