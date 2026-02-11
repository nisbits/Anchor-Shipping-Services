import { useEffect } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
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
          <div className="footer-section company-section">
            <div className="footer-logo">
              <h3>Anchor Shipping Services</h3>
              <p className="tagline">India's Trusted Logistics Partner</p>
            </div>
            <p className="company-description">
              With over 15 years of excellence in transportation, we provide reliable, safe, and efficient logistics solutions across India. Your cargo is our priority, delivered with precision and care.
            </p>
            <div className="certification-badges">
              <span className="badge">ISO Certified</span>
              <span className="badge">Govt. Approved</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#why-choose-us">About Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#map">Locations</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#services">Car Transport</a></li>
              <li><a href="#services">Bike Transport</a></li>
              <li><a href="#services">Goods Transport</a></li>
              <li><a href="#services">Heavy Vehicle</a></li>
              <li><a href="#services">Industrial Equipment</a></li>
              <li><a href="#services">Pan India Network</a></li>
            </ul>
          </div>

          <div className="footer-section contact-section">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div className="contact-details">
                  <span className="contact-label">Call Us</span>
                  <a href="tel:+919996205357" className="contact-value">+91 99962 05357</a>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-details">
                  <span className="contact-label">Email Us</span>
                  <a href="mailto:info@anchorshipping.com" className="contact-value">info@anchorshipping.com</a>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-details">
                  <span className="contact-label">Head Office</span>
                  <span className="contact-value">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; 2026 Anchor Shipping Services. All rights reserved.</p>
              <p className="disclaimer">Designed with ❤️ for Indian logistics excellence</p>
            </div>
            
            <div className="footer-social">
              <h5>Follow Us</h5>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <FaLinkedin />
                </a>
                <a href="https://wa.me/919996205357" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
