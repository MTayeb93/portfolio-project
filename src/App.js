import React from 'react'
import Header from './components/header/Header.js'
import Nav from './components/nav/Nav.js'
import About from './components/about/About.js'
import Experience from './components/experience/Experience.js'
import Services from './components/services/Services.js'
import Portfolio from './components/portfolio/Portfolio.js'
import Testimonials from './components/testimonials/Testimonials.js'
import Contact from './components/contact/Contact.js'
import Footer from './components/footer/Footer.js'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
