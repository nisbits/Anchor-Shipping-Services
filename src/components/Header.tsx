import { useEffect } from 'react'
import logo from '../assets/logo1.png'
import './styles/Header.css'

export default function Header() {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          const headerOffset = 0 // No offset needed since sections are full screen
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    const navLinks = document.querySelectorAll('.nav-menu a')
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <img src={logo} alt="Anchor Shipping Services" className="logo-image" />
            <div className="logo-text">
              <h1>Anchor Shipping Services</h1>
              <p>India's Trusted Logistics Partner</p>
            </div>
          </div>
          <nav className="nav-menu">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#why-choose-us" className="nav-link">About Us</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#map" className="nav-link">Location</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
