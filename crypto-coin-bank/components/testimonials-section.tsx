import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
    return (
        <section
            className="bg-[#F7F6FE] bg-cover bg-center bg-no-repeat lg:h-[800px] lg:pl-20 lg:w-full"
            style={{
                backgroundImage: "url('/new.svg')",
            }}
        >
            <div className="max-w-7xl mx-auto py-12 px-4 space-y-16">
                {/* Title Section */}
                <div className="flex flex-col items-center justify-center text-center space-y-6 w-full">
                    <p className="text-orange-500 font-medium tracking-wide">TESTIMONIALS</p>
                    <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Trusted by more than 100K+ people</h2>
                    <p className="text-[#717184] text-sm sm:text-base lg:text-lg">
                        Hear what they say about us and why you should choose Coinbank
                    </p>
                </div>

                {/* Testimonials */}
                <div className="flex flex-col lg:flex-row items-start p-0 gap-8 lg:w-[1120px] lg:h-[334px] z-[2]">
                    {/* Testimonial Card 1 */}
                    <div className="flex flex-col items-center p-12 gap-6 bg-white rounded-2xl shadow-lg w-full sm:w-[352px] h-auto">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-orange-500 stroke-orange-500" />
                            ))}
                        </div>
                        <p className="text-center text-sm sm:text-base leading-relaxed">
                            &quot;Cool crypto currency, fast withdrawals and deposits, way better than any wallet.&quot;
                        </p>
                        <div className="flex items-center gap-3">
                            <Image src="/jj.png" alt="Avatar" width={40} height={40} className="rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-medium">Abel Shelton</p>
                                <p className="text-sm text-[#717184]">Customer</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="flex flex-col items-center p-12 gap-6 bg-white rounded-2xl shadow-lg w-full sm:w-[352px] h-auto">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-orange-500 stroke-orange-500" />
                            ))}
                        </div>
                        <p className="text-center text-sm sm:text-base leading-relaxed">
                            &quot;It&apos;s worth it, very intuitive and easy to learn about cryptocurrencies.&quot;
                        </p>
                        <div className="flex items-center gap-3">
                            <Image src="/jon.png" alt="Avatar" width={40} height={40} className="rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-medium">John Clayton</p>
                                <p className="text-sm text-[#717184]">Customer</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 3 */}
                    <div className="flex flex-col items-center p-12 gap-6 bg-white rounded-2xl shadow-lg w-full sm:w-[352px] h-auto">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-orange-500 stroke-orange-500" />
                            ))}
                        </div>
                        <p className="text-center text-sm sm:text-base leading-relaxed">
                            &quot;Best customer service so far. Amazing in all areas, best centralized exchange.&quot;
                        </p>
                        <div className="flex items-center gap-3">
                            <Image src="/sava.png" alt="Avatar" width={40} height={40} className="rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-medium">Savanna Bridges</p>
                                <p className="text-sm text-[#717184]">Customer</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Content */}
                <div className="rounded-2xl lg:pl-10 w-full sm:w-[1123px] h-[140px] p-6 flex items-center justify-between" style={{ backgroundImage: "url('/t.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="flex pl-8 sm:pl-20 items-center w-full sm:w-[224px] h-[48px] isolation-isolate">
                        <a href="#" className="flex items-center">
                            <Image src="/tb.svg" alt="Bitcoin" width={48} height={48} />
                        </a>
                        <a href="#" className="flex items-center">
                            <Image src="/dot.svg" alt="Ethereum" width={48} height={48} />
                        </a>
                        <a href="#" className="flex items-center">
                            <Image src="/tc3.svg" alt="Tether" width={48} height={48} />
                        </a>
                        <a href="#" className="flex items-center">
                            <Image src="/tc4.svg" alt="BNB" width={48} height={48} />
                        </a>
                        <a href="#" className="flex items-center">
                            <Image src="/tc5.svg" alt="USDC" width={48} height={48} />
                        </a>
                    </div>

                    <div className="flex gap-2 items-center w-[461px] h-[64px]">
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 32C16.0368 16.8419 15.6581 16.4656 0.5 16C15.6581 15.5368 16.0344 15.1581 16.5 0C16.9632 15.1581 17.3419 15.5344 32.5 16C17.3419 16.4656 16.9656 16.8373 16.5 32Z" fill="#F7DF27" />
                        </svg>
                        <span className="text-sm text-[#C8C8D0]">New assets added regularly</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
