import { Navbar } from "./components/Landing/Navbar"
import { Hero } from './components/Landing/Hero'
import { Features } from './components/Landing/Features'
import { HowItWorks } from './components/Landing/HowItWorks'
import { CTA } from './components/Landing/CTA'
import { Footer } from './components/Landing/Footer'

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}

export default App