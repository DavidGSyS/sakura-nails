import Navbar          from '@/components/layout/Navbar'
import Footer          from '@/components/layout/Footer'
import Hero            from '@/components/sections/Hero'
import Services        from '@/components/sections/Services'
import Gallery         from '@/components/sections/Gallery'
import Booking         from '@/components/sections/Booking'
import Testimonials    from '@/components/sections/Testimonials'
import FloatingActions from '@/components/sections/FloatingActions'
import PetalParticlesWrapper from '@/components/ui/PetalParticlesWrapper'

export default function Home() {
  return (
    <>
      {/* Animated falling petals (decorative, background) */}
      <PetalParticlesWrapper />

      {/* Sticky navigation */}
      <Navbar />

      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Services */}
        <Services />

        {/* 3. Gallery */}
        <Gallery />

        {/* 4. Booking */}
        <Booking />

        {/* 5. Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating contact buttons */}
      <FloatingActions />
    </>
  )
}
