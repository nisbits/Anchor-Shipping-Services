import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './styles/FloatingCallButton.css'

export default function FloatingCallButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleCall = () => {
    // In a real app, this would trigger a phone call or contact form
    window.location.href = 'tel:+919996205357'
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/919996205357', '_blank')
  }

  return (
    <div className="floating-call-container">
      <button
        className="floating-main-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Contact us"
      >
        <span className="icon">📞</span>
      </button>
      
      {isOpen && (
        <div className="floating-menu">
          <button className="floating-option" onClick={handleCall} title="Call us">
            <span className="option-icon">☎️</span>
            <span className="option-text">Call</span>
          </button>
          <button className="floating-option" onClick={handleWhatsApp} title="WhatsApp">
            <span className="option-icon"><FaWhatsapp /></span>
            <span className="option-text">WhatsApp</span>
          </button>
          <button className="floating-option" onClick={() => alert('Email: info@transportpro.com')} title="Email">
            <span className="option-icon">✉️</span>
            <span className="option-text">Email</span>
          </button>
        </div>
      )}
    </div>
  )
}
