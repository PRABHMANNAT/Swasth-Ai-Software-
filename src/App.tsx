import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import HowItWorksSection from './components/HowItWorksSection'
import { FeaturesShowcase } from './components/FeaturesShowcase'
import AppShowcaseSection from './components/AppShowcaseSection'
import ArchitectureSection from './components/ArchitectureSection'
import AboutSection from './components/AboutSection'
import ResearchSection from './components/ResearchSection'
import SystemFlowSection from './components/SystemFlowSection'
import FeaturesGridSection from './components/FeaturesGridSection'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import FoundersSection from './components/FoundersSection'
import { FAQSection } from './components/FAQSection'
import WaitlistSection from './components/WaitlistSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="bg-black">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesShowcase />
      <AppShowcaseSection />
      <SystemFlowSection />
      <ArchitectureSection />
      <ResearchSection />
      <AboutSection />
      <FeaturesGridSection />
      <PricingSection />
      <TestimonialsSection />
      <FoundersSection />
      <FAQSection />
      <WaitlistSection />
      <Footer />
    </div>
  )
}

export default App
