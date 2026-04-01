import { LanguageProvider } from './hooks/useLanguage'
import NavBar       from './components/ui/NavBar'
import Hero         from './components/sections/Hero'
import TrustBar     from './components/sections/TrustBar'
import Platform     from './components/sections/Platform'
import Solutions    from './components/sections/Solutions'
import ProductGrid  from './components/sections/ProductGrid'
import Ecosystem    from './components/sections/Ecosystem'
import CloudAcademy from './components/sections/CloudAcademy'
import CtaSection   from './components/sections/CtaSection'
import Footer       from './components/ui/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <NavBar />
      <main>
        <Hero />
        <TrustBar />
        <Platform />
        <Solutions />
        <ProductGrid />
        <Ecosystem />
        <CloudAcademy />
        <CtaSection />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
