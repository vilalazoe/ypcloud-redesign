import { LanguageProvider } from './hooks/useLanguage'
import NavBar            from './components/ui/NavBar'
import Hero              from './components/sections/Hero'
import TrustBar          from './components/sections/TrustBar'
import PillarOverview    from './components/sections/PillarOverview'
import DistributedCloud  from './components/sections/DistributedCloud'
import AnyEdge           from './components/sections/AnyEdge'
import Jujue             from './components/sections/Jujue'
import Clouder           from './components/sections/Clouder'
import Ecosystem         from './components/sections/Ecosystem'
import CtaSection        from './components/sections/CtaSection'
import Footer            from './components/ui/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <NavBar />
      <main>
        <Hero />
        <TrustBar />
        <PillarOverview />
        <DistributedCloud />
        <AnyEdge />
        <Jujue />
        <Clouder />
        <Ecosystem />
        <CtaSection />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
