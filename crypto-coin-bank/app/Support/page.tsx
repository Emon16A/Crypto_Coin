import Footer from '@/components/footer'
import Navpr from '@/components/navpr'
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
const page = () => {
    return (
        <div>
            <Navpr />
            <div className="min-h-screen flex flex-col">


                <main className="flex-grow bg-[#F7F6FE] shadow-[0px_4px_200px_rgba(232,249,247,0.2)] order-1 flex-none">
                    <div className="bg-[#FF6B00] pt-8 pb-32 px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-white text-4xl font-bold mb-8">How can we help?</h1>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search questions, keywords, articles..."
                                    className="w-full py-3 px-10 rounded-md"
                                />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto px-4 -mt-20  ">

                        <div className="grid md:grid-cols-3 gap-6 mb-12">

                            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                                <Link href="/FQA">

                                    <div className="w-12 h-12 bg-[#1E0E4B] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Image src="/fqlo.png" alt="Icon" height={64} width={64} />
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Getting started</h2>
                                    <p className="text-gray-600 text-sm">Everything you need to start using Coinbank.</p>
                                </Link>
                            </div>



                            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                                <Link href="/FQA">
                                    <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Image src="/su1.svg" alt="Icon" height={64} width={64} />
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Managing my account</h2>
                                    <p className="text-gray-600 text-sm">Manage your account, settings, and more.</p>
                                </Link>
                            </div>



                            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                                <Link href="/FQA">
                                    <div className="w-12 h-12 bg-[#CCFF00] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Image src="/su2.svg" alt="Icon" height={64} width={64} />

                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Trading</h2>
                                    <p className="text-gray-600 text-sm">Learn Buy, sell, send, or receive cryptocurrencies.</p>
                                </Link>
                            </div>



                            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                                <Link href="/FQA">
                                    <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Image src="/su3.svg" alt="Icon" height={64} width={64} />
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Funding</h2>
                                    <p className="text-gray-600 text-sm">Learn how to transfer funds to and from your account.</p>
                                </Link>
                            </div>



                            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                                <Link href="/FQA">
                                    <div className="w-12 h-12 bg-[#CCFF00] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Image src="/su4.svg" alt="Icon" height={64} width={64} />
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Privacy and security</h2>
                                    <p className="text-gray-600 text-sm">Help secure and protect your account.</p>
                                </Link>
                            </div>



                            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                                <Link href="/FQA">
                                    <div className="w-12 h-12 bg-[#1E0E4B] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Image src="/su5.svg" alt="Icon" height={64} width={64} />
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Other topics</h2>
                                    <p className="text-gray-600 text-sm">Learn about API, common scams, referral programs, and more.</p>
                                </Link>
                            </div>

                        </div>

                        <div className="mb-12">
                            <h2 className="text-xl font-semibold mb-6">Top articles</h2>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 flex-grow">
                                    <Link href="#" className="text-gray-700 hover:text-[#FF6B00] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] after:transition-all after:duration-300 hover:after:w-full">
                                        What is Coinbank Staking?
                                    </Link>
                                    <Link href="#" className="text-gray-700 hover:text-[#FF6B00] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] after:transition-all after:duration-300 hover:after:w-full">
                                        Product Overview
                                    </Link>
                                    <Link href="#" className="text-gray-700 hover:text-[#FF6B00] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] after:transition-all after:duration-300 hover:after:w-full">
                                        What is Coinbank Earn?
                                    </Link>
                                    <Link href="#" className="text-gray-700 hover:text-[#FF6B00] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] after:transition-all after:duration-300 hover:after:w-full">
                                        How do I create an API key?
                                    </Link>
                                    <Link href="#" className="text-gray-700 hover:text-[#FF6B00] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] after:transition-all after:duration-300 hover:after:w-full">
                                        How do I sign up for a Coinbank account?
                                    </Link>
                                    <Link href="#" className="text-gray-700 hover:text-[#FF6B00] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] after:transition-all after:duration-300 hover:after:w-full">
                                        Are my funds insured?
                                    </Link>
                                    <Link href="#" className="text-gray-700 hover:text-[#FF6B00] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] after:transition-all after:duration-300 hover:after:w-full">
                                        How to Make a Payment to my Credit Card
                                    </Link>
                                    <Link href="#" className="text-gray-700 hover:text-[#FF6B00] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] after:transition-all after:duration-300 hover:after:w-full">
                                        Why is my transaction pending?
                                    </Link>
                                    <Link href="#" className="text-gray-700 hover:text-[#FF6B00] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] after:transition-all after:duration-300 hover:after:w-full">
                                        How to verify on Coinbank?
                                    </Link>
                                    <Link href="#" className="text-gray-700 hover:text-[#FF6B00] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] after:transition-all after:duration-300 hover:after:w-full">
                                        How do I earn credit card crypto rewards?
                                    </Link>
                                </div>


                                <div
                                    className="bg-[#1E0E4B] text-white rounded-lg p-8 text-center w-full md:w-[300px] flex flex-col justify-center bg-[url('/Supp.svg')] bg-no-repeat bg-center bg-cover">
                                    <h2 className="text-xl font-semibold mb-4">Can not find what you are looking for?</h2>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center bg-[#FF6B00] text-white rounded-md px-4 py-2 mt-2 hover:bg-[#FF6B00]/90 transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2"
                                        >
                                            <rect width="20" height="16" x="2" y="4" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>




            <Footer />
        </div>
    )
}

export default page