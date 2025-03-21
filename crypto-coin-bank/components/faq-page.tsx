import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 py-2 mb-4">
          <Link href="#" className="flex items-center hover:text-gray-700">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Return to Dashboard
          </Link>
          <span className="mx-2">/</span>
          <span>Support</span>
          <span className="mx-2">/</span>
          <span>Getting Started</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64">
            <div className="flex flex-col items-center md:items-start mb-6">
              <div className="bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Image src="/fqlo.png" alt="Fqlo Icon" height={64} width={64} />
              </div>

              <h1 className="text-3xl font-bold">Getting Started</h1>
            </div>

            <nav className="space-y-1">
              <Link
                href="#getting-started"
                className="block border-l-4 border-orange-400 pl-4 py-2 font-medium text-orange-500"
              >
                Getting started
              </Link>
              <Link href="#withdrawals" className="block pl-5 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Withdrawals
              </Link>
              <Link href="#account" className="block pl-5 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Account
              </Link>
              <Link href="#payment" className="block pl-5 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Payment
              </Link>
              <Link href="#domains" className="block pl-5 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Domains
              </Link>
              <Link href="#projects" className="block pl-5 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Projects
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 lg:pt-10">
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

            <div className="space-y-10">
              {/* GETTING STARTED Section */}
              <div id="getting-started">
                <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">GETTING STARTED</h2>
                <Accordion type="single" collapsible className="border-t border-gray-200">
                  <AccordionItem value="item-1" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      What is our service? How does it work?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Our platform is designed to help you manage your digital assets and transactions securely. It
                      integrates with your headless content, commerce, or database to provide a seamless experience.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      How can I sign up for an account?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      You can sign up for an account using GitHub, GitLab, Bitbucket, or email. The process is simple
                      and only takes a few minutes to complete.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      What are the fees to use our service?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      We offer various pricing tiers to suit different needs. Our basic plan is free, while premium
                      features are available on paid plans. You can view our pricing page for details.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      Which frameworks/templates can I deploy?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      We support many frameworks including Next.js, React, Vue, Nuxt, Angular, and more. Our platform is
                      designed to be flexible and accommodate various development stacks.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* WITHDRAWALS Section */}
              <div id="withdrawals">
                <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">WITHDRAWALS</h2>
                <Accordion type="single" collapsible className="border-t border-gray-200">
                  <AccordionItem value="withdraw-1" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      How can I withdraw the funds I have received?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      You can withdraw funds through your dashboard by navigating to the Billing section and selecting
                      the Withdraw option. Follow the prompts to complete the process.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="withdraw-2" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      Is there a minimum amount that I can withdraw?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Yes, but we keep the minimum withdrawal amount very low to ensure that your funds are always
                      accessible (i.e. avoid generating dust). These minimums fluctuate with exchange rates, but are
                      generally under $0.50.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="withdraw-3" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      How long do withdrawals take to process?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Most withdrawals are processed within 1-2 business days, though the exact timing may depend on
                      your bank or payment processor.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* ACCOUNT Section */}
              <div id="account">
                <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">ACCOUNT</h2>
                <Accordion type="single" collapsible className="border-t border-gray-200">
                  <AccordionItem value="account-1" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      How to verify your identity?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      To verify your identity, go to Account Settings and select the Verification tab. You'll need to
                      provide a government-issued ID and follow the instructions provided.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="account-2" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      How can I reset my password?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      You can reset your password by clicking "Forgot password" on the login page. We'll send you an
                      email with instructions to create a new password.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="account-3" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      I&apos;ve lost access to my two-factor device. How can I get into my account?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      If you've lost access to your two-factor authentication device, you can use your backup codes to
                      log in. If you don't have backup codes, please contact our support team for assistance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* PAYMENT Section */}
              <div id="payment">
                <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">PAYMENT</h2>
                <Accordion type="single" collapsible className="border-t border-gray-200">
                  <AccordionItem value="payment-1" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      How do I add a payment method?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      You can add a payment method in your account settings under the Billing section. We accept credit
                      cards, debit cards, and various digital payment options.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="payment-2" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      How do I verify my bank info?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      To verify your bank information, we'll make two small deposits to your account. You'll need to
                      confirm the exact amounts to complete verification.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* DOMAINS Section */}
              <div id="domains">
                <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">DOMAINS</h2>
                <Accordion type="single" collapsible className="border-t border-gray-200">
                  <AccordionItem value="domains-1" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      I have a custom domain. How can I use it?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      You can add your custom domain in the project settings and follow the DNS configuration
                      instructions. We provide step-by-step guidance to make the process simple.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="domains-2" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      How do I set up SSL for my domain?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      SSL certificates are automatically provisioned for all domains connected to our platform. You
                      don't need to take any additional steps to secure your site.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* PROJECTS Section */}
              <div id="projects">
                <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">PROJECTS</h2>
                <Accordion type="single" collapsible className="border-t border-gray-200">
                  <AccordionItem value="projects-1" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      How do I deploy a project?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      You can deploy a project by connecting your Git repository or using our CLI. The process is
                      automated and handles building and deploying your application.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="projects-2" className="border-b border-gray-200 py-2">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      How should I set up a project with a monorepo setup?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      We support monorepos through the use of project settings and configuration files. You can specify
                      which directory contains your project and customize build commands.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

