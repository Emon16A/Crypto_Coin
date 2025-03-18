import Image from "next/image";

export default function PartnersSection() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto text-center space-y-8">
                <div className="space-y-2 text-center">
                    <p className="text-orange-500 font-medium text-sm md:text-base">PARTNERS</p>
                    <h2 className="text-2xl md:text-3xl font-bold">We&apos;re backed by the best</h2>
                    <p className="text-gray-600 text-sm md:text-base">
                        Trusted by these blockchain&apos;s leading industries
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-items-center">
                    <Image src="/ic1.svg" alt="IC1" className="w-60 h-32" />
                    <Image src="/ic2.svg" alt="IC2" className="w-60 h-32" />
                    <Image src="/ic3.svg" alt="IC3" className="w-60 h-32" />
                    <Image src="/ic4.svg" alt="IC4" className="w-60 h-32" />
                </div>
            </div>
        </section>
    );
}
