import Image from "next/image";

export default function TradingSection() {
    return (
        <section
            className="sm:px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F7F6FE] 
                shadow-[0px_4px_200px_rgba(232,249,247,0.2)] flex flex-col items-center gap-12 md:gap-16 w-full h-auto"
            style={{
                backgroundImage: "url('/bg4.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-7xl mx-auto space-y-12 py-8 px-4 lg:pt-20">
                <div className="space-y-4 text-center md:text-left">
                    <p className="text-orange-500 font-medium">FEATURES</p>
                    <h2 className="text-2xl md:text-3xl font-bold">Seamless Trading</h2>

                    {/* Text Section */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-16">
                        <p className="text-gray-600 text-sm md:text-base leading-[160%] tracking-[0.005em] font-normal max-w-full md:max-w-[640px]">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                        </p>

                        <p className="text-gray-600 text-sm md:text-base leading-[160%] tracking-[0.005em] font-normal max-w-full md:max-w-[416px]">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
                    <Image
                        src="/chart.svg"
                        alt="Trading chart"
                        width={600}
                        height={400}
                        className="max-w-full h-auto rounded-lg"
                    />

                    <Image
                        src="/card2.svg"
                        alt="Watchlist"
                        width={600}
                        height={400}
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}
