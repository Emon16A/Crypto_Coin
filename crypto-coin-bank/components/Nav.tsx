
"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleFeatures = () => setIsFeaturesOpen(!isFeaturesOpen);
    const toggleCompany = () => setIsCompanyOpen(!isCompanyOpen);
    return (
        <nav className="flex flex-col items-start p-6 gap-2 w-full bg-white bg-opacity-40 backdrop-blur-lg relative">
            {/*  Navigation */}
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto">


                <div className="flex items-center gap-2">
                    <Link href="/" >
                        <Image src="/bgico.svg" alt="BG" width={48} height={48} layout="intrinsic" />
                    </Link>
                    <span className="flex items-center space-x-2">
                        <Link href="/">
                            <Image src="/textlo.svg" alt="Coinbank Logo" width={116} height={20} />
                        </Link>
                    </span>
                </div>


                {/* Center: Menu Items (Desktop) */}
                <div className="hidden md:flex items-center gap-8">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-black flex items-center gap-1">
                                Features <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48">
                            <DropdownMenuItem>
                                <Link href="#" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n1.svg" alt="N2" width={24} height={24} />


                                    </div>
                                    Funding
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n2.svg" alt="N2" width={24} height={24} />
                                    </div>
                                    Staking
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n3.svg" alt="N2" width={24} height={24} />

                                    </div>
                                    Liquidity
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n4.svg" alt="N2" width={24} height={24} />

                                    </div>
                                    Margin Trading
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button variant="ghost" className="text-black">
                        <Link href="/price">Prices</Link>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-black flex items-center gap-1">
                                Company <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48">
                            <DropdownMenuItem>
                                <Link href="/about" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n5.svg" alt="N2" width={24} height={24} />

                                    </div>
                                    About
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/blog" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n6.svg" alt="N2" width={24} height={24} />

                                    </div>
                                    Blog
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/FQA" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n7.svg" alt="N2" width={24} height={24} />

                                    </div>
                                    FAQs
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/Support" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n8.svg" alt="N2" width={24} height={24} />

                                    </div>
                                    Support
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button variant="ghost" className="text-black">
                        <Link href="/Developers">Developers</Link>
                    </Button>
                </div>

                {/* Right Side: Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Button className="text-black bg-white border border-[#FFE0C8] hover:bg-[#FF6E00] hover:text-white rounded-lg px-6 py-2 transition-colors duration-300">
                        <Link href="/signin">Sign In</Link>
                    </Button>
                    <Button className="bg-white border border-[#FFE0C8] text-[#FF6E00] hover:bg-[#FF6E00] hover:text-white rounded-lg px-6 py-2 transition-colors duration-300">
                        <Link href="/Signup">Get Started</Link>
                    </Button>
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden z-50">
                    <div className="flex flex-col items-start gap-4 p-4">
                        {/* Features Dropdown */}
                        <div className="w-full">
                            <Button variant="ghost" className="text-black w-full justify-start" onClick={toggleFeatures}>
                                Features
                                {/* Chevron Down Icon */}
                                <ChevronDown className="h-4 w-4 ml-2 transform transition-transform duration-300" style={{ transform: isFeaturesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                            </Button>
                            {isFeaturesOpen && (
                                <div className="pl-4 space-y-2 mt-2">
                                    <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                        <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                            <Image src="/n1.svg" alt="N2" width={24} height={24} />
                                        </div>
                                        Funding
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                        <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                            <Image src="/n2.svg" alt="N2" width={24} height={24} />
                                        </div>
                                        Staking
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                        <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                            <Image src="/n3.svg" alt="N2" width={24} height={24} />
                                        </div>
                                        Liquidity
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                        <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                            <Image src="/n4.svg" alt="N2" width={24} height={24} />
                                        </div>
                                        Margin Trading
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Button variant="ghost" className="text-black w-full justify-start" onClick={toggleMenu}>
                            <Link href="/price">Prices</Link>
                        </Button>

                        {/* Company Dropdown */}
                        <div className="w-full">
                            <Button variant="ghost" className="text-black w-full justify-start" onClick={toggleCompany}>
                                Company
                                {/* Chevron Down Icon */}
                                <ChevronDown className="h-4 w-4 ml-2 transform transition-transform duration-300" style={{ transform: isCompanyOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                            </Button>
                            {isCompanyOpen && (
                                <div className="pl-4 space-y-2 mt-2">
                                    <Link href="/about" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                        <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                            <Image src="/n5.svg" alt="N2" width={24} height={24} />
                                        </div>
                                        About
                                    </Link>
                                    <Link href="/blog" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                        <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                            <Image src="/n6.svg" alt="N2" width={24} height={24} />
                                        </div>
                                        Blog
                                    </Link>
                                    <Link href="/FQA" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                        <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                            <Image src="/n7.svg" alt="N2" width={24} height={24} />
                                        </div>
                                        FAQs
                                    </Link>
                                    <Link href="/Support" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                        <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                            <Image src="/n8.svg" alt="N2" width={24} height={24} />
                                        </div>
                                        Support
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Button variant="ghost" className="text-black w-full justify-start" onClick={toggleMenu}>
                            <Link href="/Developers">Developers</Link>
                        </Button>

                        <Button
                            className="text-black bg-white border border-[#FFE0C8] hover:bg-[#FF6E00] hover:text-white rounded-lg px-6 py-2 transition-colors duration-300 w-full"
                            onClick={toggleMenu}
                        >
                            <Link href="/signin">Sign In</Link>
                        </Button>

                        <Button
                            className="bg-white border border-[#FFE0C8] text-[#FF6E00] hover:bg-[#FF6E00] hover:text-white rounded-lg px-6 py-2 transition-colors duration-300 w-full"
                            onClick={toggleMenu}
                        >
                            <Link href="/Signup">Get Started</Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}


export default Nav
