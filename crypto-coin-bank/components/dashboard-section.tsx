import DG2 from "@/assert/bg.svg";
import DB from "@/assert/dashb.svg";
import DAS from "@/assert/dashbord.png";
import ATC from "@/assert/f-icon/ATC.svg";
import BTC from "@/assert/f-icon/BTC.svg";
import Dog from "@/assert/f-icon/Dog.svg";
import ETH from "@/assert/f-icon/ETH.svg";
import Gemn from "@/assert/f-icon/Gemini.svg";
import Logo from "@/assert/f-icon/Logo.svg";
import XRP from "@/assert/f-icon/XRP.svg";
import Image from "next/image";
import React from "react";

export default function DashboardSection() {
    return (
        <>
            {/* First Section */}
            <section
                className="py-12 px-4 sm:px-8 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F7F6FE] 
                shadow-[0px_4px_200px_rgba(232,249,247,0.2)] flex flex-col items-center gap-16 w-full h-auto lg:h-[964px]"
                style={{
                    backgroundImage: `url(${DB.src})`,
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
                        <Image src={DAS} alt="dashboard image" className="mt-12 sm:mt-16 md:mt-20 object-cover rounded-xl w-full" />
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section
                className="py-12 px-4 sm:px-8 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F7F6FE] 
                shadow-[0px_4px_200px_rgba(232,249,247,0.2)] flex flex-col items-center gap-16 w-full h-auto lg:h-[578px]"
                style={{
                    backgroundImage: `url(${DG2.src})`,
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
                        <div className="relative w-full max-w-[1120px] lg:w-[1000px] sm:h-[164px]   bg-gradient-to-r from-white to-transparent 
        rounded-full flex flex-nowrap items-center justify-between px-4 sm:px-8 h-15 overflow-hidden">

                            {[Dog, Logo, BTC, ATC, ETH, Gemn, XRP].map((icon, index) => (
                                <React.Fragment key={index}>
                                    <Image src={icon} alt=""
                                        className="w-[10%] sm:w-[5%] md:w-[8%] lg:w-[80%] max-w-[64px]" />
                                    {index !== 6 && (
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
