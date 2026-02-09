import { useState } from 'react'
import './styles/QuoteFormModal.css'

interface QuoteFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteFormModalSimple({ isOpen, onClose }: QuoteFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      
      // Try multiple Formspree endpoints for better reliability
      const endpoints = [
        'https://formspree.io/f/xqapwzaw',
        'https://formspree.io/f/mgepjkka',
        'https://formspree.io/f/xkbnayjw'
      ]
      
      let response = null
      let lastError = null
      
      // Try each endpoint until one works
      for (const endpoint of endpoints) {
        try {
          console.log(`Trying endpoint: ${endpoint}`)
          response = await fetch(endpoint, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json',
            },
          })
          
          if (response.ok) {
            console.log('Success with endpoint:', endpoint)
            break
          } else {
            const errorData = await response.json()
            lastError = errorData.error || `HTTP ${response.status}`
            console.log(`Failed with endpoint ${endpoint}:`, lastError)
          }
        } catch (error) {
          lastError = error
          console.log(`Error with endpoint ${endpoint}:`, error)
          continue
        }
      }

      if (response && response.ok) {
        setSubmitStatus('success')
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
          form.reset()
        }, 3000)
      } else {
        // If all endpoints fail, show a helpful message
        console.error('All endpoints failed. Last error:', lastError)
        throw new Error('Form submission service temporarily unavailable. Please try again or call us directly.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
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
                required
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Type *</label>
              <select
                id="service"
                name="service"
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
              rows={4}
              placeholder="Any special requirements or details about your shipment..."
            />
          </div>

          <input type="hidden" name="_subject" value="New Quote Request from Anchor Shipping Services" />
          <input type="hidden" name="_template" value="table" />

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
