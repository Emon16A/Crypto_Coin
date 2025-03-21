
import Nav from "@/components/Nav";
import FAQPage from "@/components/faq-page";
import Footer from "@/components/footer-fqa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const page = () => {
    return (
        <div>

            <Nav />
            <div className="min-h-screen bg-white" >

                <FAQPage />



                <div className="max-w-7xl mx-auto p-4 h-[250px] w-full md:w-[1120px] flex items-center justify-center">
                    <div className="bg-[#1a1333] bg-[url('/aboutbg.svg')] bg-cover bg-center rounded-xl p-10 text-center w-full">
                        <h1 className="text-white text-2xl font-bold mb-2 pt-9 pb-5">
                            Can not find what you are looking for?
                        </h1>
                        <div className="flex justify-center"> {/* This centers the button */}
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md inline-flex items-center justify-center gap-2">
                                <Link href="#" className="flex items-center gap-2">
                                    <FaEnvelope className="text-white w-5 h-5" />
                                    <span>Contact Us</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>



                <Footer />


            </div>

        </div>
    )
}

export default page