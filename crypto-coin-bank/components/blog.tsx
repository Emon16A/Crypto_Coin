"use client"


import DashboardSection from "@/components/dashboard-section"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import Navbar from "@/components/Nav"
import PartnersSection from "@/components/partners-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import TradingSection from "@/components/trading-section"


export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroSection />
            <StatsSection />
            <PartnersSection />
            <DashboardSection />
            <FeaturesSection />
            <TradingSection />
            <TestimonialsSection />
            <Footer />
        </main>
    )
}

