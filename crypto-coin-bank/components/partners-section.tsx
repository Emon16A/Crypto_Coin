import Image from "next/image";

export default function PartnersSection() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto text-center space-y-8">
                {/* Heading Section */}
                <div className="space-y-2 text-center">
                    <p className="text-orange-500 font-medium text-sm md:text-base">PARTNERS</p>
                    <h2 className="text-2xl md:text-3xl font-bold">We&apos;re backed by the best</h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        Trusted by these blockchain&apos;s leading industries
                    </p>
                </div>

                {/* Logos Section */}
                <div className="flex flex-wrap items-center justify-center lg:gap-20 md:gap-16 gap-8">
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
    );
}




