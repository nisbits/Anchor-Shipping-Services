import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Map from './components/Map'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import FloatingCallButton from './components/FloatingCallButton'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Map />
      <Gallery />
      <Footer />
      <FloatingCallButton />
    </div>
  )
}

export default App
