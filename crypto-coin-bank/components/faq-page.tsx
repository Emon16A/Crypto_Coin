import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search } from "lucide-react"
import Image from "next/image"
export default function GettingStartedPage() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-sm text-gray-500 py-2">
        <span>Support</span> / <span>Getting Started</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-4">
        {/* Sidebar */}
        <div className="md:w-64">
          <div className="flex flex-col items-center md:items-start mb-6">
            <div className="bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Image src="/fqlo.png" alt="Fqlo Icon"
                height={64} width={64}
              />

            </div>
            <h1 className="text-4xl font-bold">Getting Started</h1>
          </div>

          <nav className="space-y-1">
            <div className="border-l-4 border-orange-400 pl-4 py-2 font-medium text-orange-500">Getting started</div>
            <div className="pl-5 py-2 text-gray-700 hover:text-gray-900">Withdrawals</div>
            <div className="pl-5 py-2 text-gray-700 hover:text-gray-900">Account</div>
            <div className="pl-5 py-2 text-gray-700 hover:text-gray-900">Payment</div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:pt-20">
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search questions, keywords, articles"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="space-y-8">
            {/* GETTING STARTED Section */}
            <div>
              <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">GETTING STARTED</h2>
              <Accordion type="single" collapsible className="border-t border-gray-200">
                <AccordionItem value="item-1" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    What is Coinbank? How does it work?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    How can I sign up for an account?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    What are the fees to use Coinbank?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    How can I sell something once I have signed up for an account?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    Which cryptocurrencies can I accept?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    Supported cryptocurrencies
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* WITHDRAWALS Section */}
            <div>
              <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">WITHDRAWALS</h2>
              <Accordion type="single" collapsible className="border-t border-gray-200">
                <AccordionItem value="withdraw-1" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    How can I withdraw the funds I have received?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="withdraw-2" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    Is there a minimum amount that I can withdraw?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 text-sm">
                      Yes, but very low minimum withdrawal amount to ensure that your funds are always accessible (i.e.
                      avoid generating dust). These minimums fluctuate with exchange rates, but are generally under
                      $0.0.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="withdraw-3" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    Is there a maximum amount that I can withdraw?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="withdraw-4" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    How can I convert my cryptocurrency into bank account?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* ACCOUNT Section */}
            <div>
              <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">ACCOUNT</h2>
              <Accordion type="single" collapsible className="border-t border-gray-200">
                <AccordionItem value="account-1" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    How to verify your identity?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="account-2" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    How can I reset my password?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="account-3" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    I&apos;ve lost access to my two-factor device. How can I get into my account?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="account-4" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    I never received an account confirmation or password reset email. What should I do?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="account-5" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    How do I close my account?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* PAYMENT Section */}
            <div>
              <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">PAYMENT</h2>
              <Accordion type="single" collapsible className="border-t border-gray-200">
                <AccordionItem value="payment-1" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    How do I add a payment method?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="payment-2" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    How do I verify my bank info?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="payment-3" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    How to successfully verify a billing address?
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="payment-4" className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-normal hover:no-underline">
                    Using a bank acount as a payment method
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

