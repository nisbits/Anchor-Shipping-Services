import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import bannerImage from '../assets/Banner.png'
import QuoteFormModalFallback from './QuoteFormModalFallback'
import './styles/Hero.css'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLButtonElement
      if (target.classList.contains('hero-btn')) {
        e.preventDefault()
        setIsModalOpen(true)
      }
    }

    const heroButton = document.querySelector('.hero-btn')
    if (heroButton) {
      heroButton.addEventListener('click', handleSmoothScroll)
    }

    return () => {
      if (heroButton) {
        heroButton.removeEventListener('click', handleSmoothScroll)
      }
    }
  }, [])

  const openQuoteModal = () => {
    setIsModalOpen(true)
  }

  const closeQuoteModal = () => {
    setIsModalOpen(false)
  }

  const heroStyle: CSSProperties = {
    backgroundImage: `linear-gradient(rgba(231, 76, 60, 0.85), rgba(41, 128, 185, 0.9)), url(${bannerImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }

  return (
    <>
      <section className="hero" style={heroStyle}>
        <div className="container">
          <div className="hero-content">
            <h2>Fast & Reliable Transportation Across India</h2>
            <p>Vehicles, Materials & Cargo Delivered Safely & On Time - Your Trusted Logistics Partner</p>
            <button className="hero-btn" onClick={openQuoteModal}>Get Instant Quote</button>
          </div>
        </div>
      </section>
      <QuoteFormModalFallback isOpen={isModalOpen} onClose={closeQuoteModal} />
    </>
  )
}
