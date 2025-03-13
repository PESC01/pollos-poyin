import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Menu from "@/components/menu"
import Location from "@/components/location"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      <Hero />
      <AnimatedSection>
        <Menu />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Location />
      </AnimatedSection>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

