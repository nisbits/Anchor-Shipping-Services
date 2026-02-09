import { useEffect } from 'react'
import './styles/Footer.css'

export default function Footer() {
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

    const footerLinks = document.querySelectorAll('.footer a')
    footerLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })

    return () => {
      footerLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Anchor Shipping Services</h3>
            <p>Your trusted partner for goods and vehicle transportation across the region and beyond.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#map">Locations</a></li>
              <li><a href="#why-choose-us">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Phone: +91 9996205357</li>
              <li>Email: info@anchorshipping.com</li>
              <li>Address: 123 Main Street, Melbourne</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#facebook" className="social-link">Facebook</a>
              <a href="#twitter" className="social-link">Twitter</a>
              <a href="#instagram" className="social-link">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Anchor Shipping Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
