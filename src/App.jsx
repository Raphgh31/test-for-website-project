import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Page from './components/Page.jsx'
import Home from './pages/Home.jsx'
import Atelier from './pages/Atelier.jsx'
import Services from './pages/Services.jsx'
import Realisations from './pages/Realisations.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import { routeIndex } from './routes.js'

export default function App() {
  const location = useLocation()
  const index = routeIndex(location.pathname)
  const previous = useRef(index)
  const direction = index >= previous.current ? 1 : -1

  useEffect(() => {
    previous.current = index
    window.scrollTo(0, 0)
  }, [index])

  return (
    // reducedMotion="user" : respecte le réglage « réduire les animations » du système.
    <MotionConfig reducedMotion="user">
    <div className="shell">
      <Header />
      <main className="main">
        <AnimatePresence mode="wait" custom={direction}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page direction={direction}><Home /></Page>} />
            <Route path="/atelier" element={<Page direction={direction}><Atelier /></Page>} />
            <Route path="/services" element={<Page direction={direction}><Services /></Page>} />
            <Route path="/realisations" element={<Page direction={direction}><Realisations /></Page>} />
            <Route path="/contact" element={<Page direction={direction}><Contact /></Page>} />
            <Route path="*" element={<Page direction={direction}><NotFound /></Page>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
    </MotionConfig>
  )
}
