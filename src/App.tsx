import HeroSection from './components/HeroSection'
import { FeaturesShowcase } from './components/FeaturesShowcase'
import AppShowcaseSection from './components/AppShowcaseSection'
import PricingSection from './components/PricingSection'
import { FAQSection } from './components/FAQSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="bg-black">
      <HeroSection />
      <FeaturesShowcase />
      <AppShowcaseSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App
