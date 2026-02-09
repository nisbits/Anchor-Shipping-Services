import { useRef } from 'react'
import './styles/Testimonials.css'

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'Delhi Manufacturing Co.',
      text: 'Excellent service! My goods arrived on time and in perfect condition. The team was very professional and helpful.',
      rating: 5,
      location: 'Delhi NCR'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'Mumbai Tech Solutions',
      text: 'Reliable and affordable service. We use them for our monthly shipments across Maharashtra and never disappointed.',
      rating: 5,
      location: 'Mumbai'
    },
    {
      id: 3,
      name: 'Amit Patel',
      company: 'Ahmedabad Automotive',
      text: 'Great experience! The GPS tracking system is very helpful and drivers handle vehicles with utmost care.',
      rating: 5,
      location: 'Gujarat'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      company: 'Bangalore Retail Express',
      text: 'Fast delivery, competitive pricing, and excellent customer support. Best logistics partner in South India!',
      rating: 5,
      location: 'Bangalore'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      company: 'Punjab Construction',
      text: 'Outstanding service for heavy machinery transport. They handled our equipment with professional expertise.',
      rating: 5,
      location: 'Ludhiana'
    },
    {
      id: 6,
      name: 'Anjali Nair',
      company: 'Kerala Spices Export',
      text: 'Professional team, reliable schedules, and transparent communication. Perfect for our export shipments.',
      rating: 5,
      location: 'Kochi'
    }
  ]

  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true
    startXRef.current = e.pageX - (carouselRef.current?.offsetLeft || 0)
    scrollLeftRef.current = carouselRef.current?.scrollLeft || 0
  }

  const handleMouseLeave = () => {
    isDraggingRef.current = false
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return
    e.preventDefault()
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = (x - startXRef.current) * 2
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeftRef.current - walk
    }
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>Customer Testimonials</h2>
        <p className="section-subtitle">Real feedback from our satisfied Indian clients - Drag to see more</p>
        <div
          className="testimonials-carousel"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating">{renderStars(testimonial.rating)}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p className="company">{testimonial.company}</p>
                <p className="location">📍 {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
