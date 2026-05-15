import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import WaitlistSection from '@/components/WaitlistSection'
import ServicesSection from '@/components/ServicesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WaitlistSection />
      <ServicesSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
