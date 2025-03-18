import IC1 from "@/assert/ic1.svg";
import IC2 from "@/assert/ic2.svg";
import IC3 from "@/assert/ic3.svg";
import IC4 from "@/assert/ic4.svg";
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
                    <Image src={IC1} alt="IC1" className="w-171 h-32" />
                    <Image src={IC2} alt="IC2" className="w-171 h-32" />
                    <Image src={IC3} alt="IC3" className="w-171 h-32" />
                    <Image src={IC4} alt="IC4" className="w-171 h-32" />
                </div>
            </div>
        </section>
    );
}
