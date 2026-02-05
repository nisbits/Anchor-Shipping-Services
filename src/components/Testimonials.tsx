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
      name: 'John Smith',
      company: 'ABC Manufacturing',
      text: 'Excellent service! Our goods arrived on time and in perfect condition. The team was professional and courteous throughout.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Tech Solutions Ltd',
      text: 'Reliable and affordable transportation service. We have been using them for our monthly shipments and never disappointed.',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Chen',
      company: 'Automotive Supplies Co',
      text: 'Great experience! The tracking system is very helpful and the drivers are careful with the cargo.',
      rating: 4
    },
    {
      id: 4,
      name: 'Emma Williams',
      company: 'Retail Express',
      text: 'Fast delivery, competitive pricing, and excellent customer support. Highly recommended for all shipping needs.',
      rating: 5
    },
    {
      id: 5,
      name: 'David Martinez',
      company: 'Construction Materials',
      text: 'Outstanding service for heavy equipment transport. They handled our machinery with utmost care.',
      rating: 5
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      company: 'Logistics Partners',
      text: 'Professional team, reliable schedules, and transparent communication. Perfect for bulk shipments.',
      rating: 4
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
        <h2>What Our Customers Say</h2>
        <p className="section-subtitle">Real feedback from satisfied clients - Drag to see more</p>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
