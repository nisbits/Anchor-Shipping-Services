import { useState } from 'react'
import { sendEmail, type EmailData } from '../services/emailService'
import './styles/QuoteFormModal.css'

interface QuoteFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteFormModal({ isOpen, onClose }: QuoteFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    pickupLocation: '',
    deliveryLocation: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create email content
      const emailData: EmailData = {
        to: 'info@anchorshipping.com', // Replace with actual website owner email
        subject: `New Quote Request from ${formData.name}`,
        body: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Pickup Location: ${formData.pickupLocation}
Delivery Location: ${formData.deliveryLocation}
Message: ${formData.message}

---
This quote request was submitted from the Anchor Shipping Services website.
        `
      }

      // Send email using the configured email service
      const result = await sendEmail(emailData)
      
      if (result.success) {
        setSubmitStatus('success')
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            pickupLocation: '',
            deliveryLocation: '',
            message: ''
          })
        }, 3000)
      } else {
        throw new Error((result.error as string) || 'Failed to send email')
      }
    } catch (error) {
      console.error('Email sending error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

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
              <label htmlFor="pickupLocation">Pickup Location *</label>
              <input
                type="text"
                id="pickupLocation"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                required
                placeholder="Enter pickup city/address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="deliveryLocation">Delivery Location *</label>
              <input
                type="text"
                id="deliveryLocation"
                name="deliveryLocation"
                value={formData.deliveryLocation}
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

          <button 
            type="submit" 
            className="submit-quote-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Get Quote'}
          </button>

          {submitStatus === 'success' && (
            <div className="success-message">
              ✓ Quote request sent successfully! We'll contact you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="error-message">
              ✗ Failed to send request. Please try again or call us directly.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
