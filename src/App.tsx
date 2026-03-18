import HeroSection from './components/HeroSection'
import { FeaturesShowcase } from './components/FeaturesShowcase'
import AppShowcaseSection from './components/AppShowcaseSection'
import AboutSection from './components/AboutSection'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import FoundersSection from './components/FoundersSection'
import { FAQSection } from './components/FAQSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="bg-black">
      <HeroSection />
      <FeaturesShowcase />
      <AppShowcaseSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <FoundersSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App
