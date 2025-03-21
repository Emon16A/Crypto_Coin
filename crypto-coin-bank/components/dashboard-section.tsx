import Image from "next/image";
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

export default function DashboardSection() {
    return (
        <>
            {/* First Section */}
            <section
                className="py-12 px-4 sm:px-8 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F7F6FE] 
                shadow-[0px_4px_200px_rgba(232,249,247,0.2)] flex flex-col items-center gap-16 w-full h-auto lg:h-[964px]"
                style={{
                    backgroundImage: "url('/dashb.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-7xl mx-auto text-center px-4">
                    <div className="space-y-6">
                        <p className="font-inter font-medium text-[14px] leading-[140%] tracking-[0.04em] uppercase text-[#FF6E00]">
                            Features
                        </p>
                        <p className="max-w-[600px] mx-auto font-inter font-medium text-2xl sm:text-3xl md:text-4xl leading-[140%] text-[#0E0637]">
                            Get a bird’s eye view of your crypto investments
                        </p>
                        <p className="max-w-[457px] mx-auto font-inter text-sm sm:text-base leading-[160%] text-[#717184]">
                            Keep up on all the latest trends in the crypto industry and stay ahead of the market.
                        </p>

                    </div>

                    <div className="relative w-full max-w-[1120px] h-auto sm:h-[400px] md:h-[661px] bg-cover bg-no-repeat drop-shadow-lg rounded-xl mx-auto">
                        <div className="relative w-full h-64 mt-12 sm:mt-16 md:mt-20">
                            <Image
                                src="/dashbord.png"
                                alt="dashboard image"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section
                className="py-12 px-4 sm:px-8 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F7F6FE] 
                shadow-[0px_4px_200px_rgba(232,249,247,0.2)] flex flex-col items-center gap-16 w-full h-auto lg:h-[578px]"
                style={{
                    backgroundImage: "url('/bg.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="pt-5 max-w-7xl mx-auto text-center px-4">
                    <div className="space-y-4">
                        <p className="font-inter font-medium text-[14px] leading-[140%] tracking-[0.04em] uppercase text-[#FF6E00]">
                            Features
                        </p>
                        <p className="max-w-[600px] mx-auto font-inter font-medium text-2xl sm:text-3xl md:text-4xl leading-[140%] text-[#0E0637]">
                            Many types of Blockchains
                        </p>
                        <p className="max-w-[457px] mx-auto font-inter text-sm sm:text-base leading-[160%] text-[#717184]">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </p>

                    </div>
                    <div className="pt-20 w-full flex justify-center">
                        <div className="relative w-full max-w-[1120px] lg:w-[1000px] sm:h-[164px] bg-gradient-to-r from-white to-transparent 
        rounded-full flex flex-nowrap items-center justify-between px-4 sm:px-8 h-15 overflow-hidden">

                            {icons.map((icon, index) => (
                                <React.Fragment key={index}>
                                    <img
                                        src={icon}
                                        alt="Crypto Icon"
                                        className="w-[10%] sm:w-[5%] md:w-[8%] lg:w-[80%] max-w-[64px]"
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
        </>
    );
}
