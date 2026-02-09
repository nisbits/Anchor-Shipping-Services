import { useState } from 'react'
import './styles/QuoteFormModal.css'

interface QuoteFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteFormModalFallback({ isOpen, onClose }: QuoteFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    pickup: '',
    delivery: '',
    message: ''
  })
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowConfirmation(true)
  }

  const copyToClipboard = () => {
    const quoteDetails = `
Quote Request Details:
======================
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Pickup: ${formData.pickup}
Delivery: ${formData.delivery}
Message: ${formData.message}

Contact us at: +91 98765 43210 or info@anchorshipping.com
    `.trim()
    
    navigator.clipboard.writeText(quoteDetails)
    alert('Quote details copied to clipboard! You can now send this to us via WhatsApp or email.')
  }

  const sendWhatsApp = () => {
    const message = encodeURIComponent(`
Hi Anchor Shipping Services! I need a quote for:
- Service: ${formData.service}
- Pickup: ${formData.pickup}
- Delivery: ${formData.delivery}
- Contact: ${formData.name}, ${formData.phone}
${formData.message ? `- Details: ${formData.message}` : ''}
    `.trim())
    
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank')
  }

  const sendEmail = () => {
    const subject = encodeURIComponent('Quote Request - Anchor Shipping Services')
    const body = encodeURIComponent(`
Hi Anchor Shipping Services,

I would like to request a quote for your transportation services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Type: ${formData.service}
Pickup Location: ${formData.pickup}
Delivery Location: ${formData.delivery}

${formData.message ? `Additional Details: ${formData.message}` : ''}

Please contact me with your best rates and service timeline.

Thank you!
    `.trim())
    
    // Update with your actual email and add proper from parameter
    const yourEmail = 'pathakpriyanka774@gmail.com'
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${yourEmail}&su=${subject}&body=${body}&from=${encodeURIComponent(formData.email)}`, '_blank')
    
    // Show clear instructions
    alert(`Opening Gmail to send your quote from: ${formData.email}\nTo: ${yourEmail}\n\nPlease make sure to click "Send" in Gmail to deliver your request!\n\nYour quote has been prepared and will be sent once you click "Send" in Gmail.`)
    
    // Auto-redirect to home after 5 seconds
    setTimeout(() => {
      window.location.href = '#hero'
    }, 5000)
  }

  if (!isOpen) return null

  if (showConfirmation) {
    return (
      <div className="quote-modal-overlay" onClick={onClose}>
        <div className="quote-modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="quote-modal-header">
            <h3>Quote Request Ready!</h3>
            <button className="close-modal" onClick={onClose}>×</button>
          </div>
          
          <div className="quote-confirmation">
            <div className="confirmation-icon">✓</div>
            <h4>Your quote request is ready!</h4>
            <p>Choose how you'd like to send us your request:</p>
            
            <div className="contact-options">
              <button className="contact-btn whatsapp-btn" onClick={sendWhatsApp}>
                <span className="btn-icon">📱</span>
                Send via WhatsApp
              </button>
              
              <button className="contact-btn email-btn" onClick={sendEmail}>
                <span className="btn-icon">📧</span>
                Send via Email
              </button>
              
              <button className="contact-btn copy-btn" onClick={copyToClipboard}>
                <span className="btn-icon">📋</span>
                Copy Details
              </button>
            </div>
            
            <div className="direct-contact">
              <p><strong>Or call us directly:</strong></p>
              <a href="tel:+919876543210" className="phone-link">+91 98765 43210</a>
            </div>
            
            <button className="back-btn" onClick={() => setShowConfirmation(false)}>
              ← Back to Form
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="quote-modal-header">
          <h3>Get Instant Quote</h3>
          <button className="close-modal" onClick={onClose}>×</button>
        </div>
        
        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Type *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="car-transport">Car Transport</option>
                <option value="bike-transport">Bike Transport</option>
                <option value="goods-transport">Goods Transport</option>
                <option value="vehicle-transport">Vehicle Transport</option>
                <option value="cargo-transport">Cargo Transport</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="pickup">Pickup Location *</label>
              <input
                type="text"
                id="pickup"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                required
                placeholder="Enter pickup city/address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="delivery">Delivery Location *</label>
              <input
                type="text"
                id="delivery"
                name="delivery"
                value={formData.delivery}
                onChange={handleChange}
                required
                placeholder="Enter delivery city/address"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Any special requirements or details about your shipment..."
            />
          </div>

          <button type="submit" className="submit-quote-btn">
            Get Quote Options
          </button>
          
          <div className="form-note">
            <p>📱 We'll show you multiple ways to send your quote request!</p>
          </div>
        </form>
      </div>
    </div>
  )
}
