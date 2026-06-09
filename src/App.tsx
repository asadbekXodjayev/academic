import { MotionConfig } from 'motion/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Academic from './components/Academic'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Recommendations from './components/Recommendations'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <About />
        <Academic />
        <Skills />
        <Projects />
        <Timeline />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
