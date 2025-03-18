import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function FeaturesSection() {
    return (
        <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F7F6FE] 
                shadow-[0px_4px_200px_rgba(232,249,247,0.2)] flex flex-col items-center gap-16 w-full h-auto lg:h-[896px]"
            style={{
                backgroundImage: "url('/bg3.svg')", backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-7xl mx-auto space-y-12 lg:pt-20">
                <div className="flex flex-col items-center justify-center text-center w-full">
                    <p className="text-[#FF6E00] text-[14px] md:text-[16px] font-medium tracking-wider uppercase">
                        FEATURES
                    </p>
                    <h2 className="text-3xl md:text-[40px] leading-[42px] md:leading-[56px] font-medium text-[#0E0637] tracking-tight">
                        Supercharge your trades <br /> with advanced features
                    </h2>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <Card className="p-6 space-y-4 w-full max-w-[544px] h-auto md:h-[460px] border-2 border-[#EFEDFD] 
                  shadow-[0px_12px_80px_rgba(82,53,232,0.1)] rounded-3xl bg-white flex flex-col items-center text-center">
                        <Image
                            src="/gr1.png"
                            alt="Growth chart"
                            width={544}
                            height={250}
                            className="w-full"
                        />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Grow and earn everyday</h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </Card>

                    <Card className="p-6 space-y-4 w-full max-w-[544px] h-auto md:h-[460px] border-2 border-[#EFEDFD] 
                  shadow-[0px_12px_80px_rgba(82,53,232,0.1)] rounded-3xl bg-white flex flex-col items-center text-center">
                        <div className="aspect-video relative rounded-lg overflow-hidden">
                            <Image
                                src="/card.png"
                                alt="Virtual card"
                                width={400}
                                height={200}
                                className="w-full"
                            />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Virtual cards powered by Mastercard</h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </Card>
                </div>



            </div>
        </section>
    )
}

