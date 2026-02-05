import truckImage from '../assets/Truck_car.png'
import './styles/WhyChooseUs.css'

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      icon: '✅',
      title: 'Reliability & Punctuality',
      description: 'We guarantee on-time delivery every single time. Our logistics network ensures your cargo reaches on schedule.'
    },
    {
      id: 2,
      icon: '🛡️',
      title: 'Safety & Security',
      description: 'Your goods are fully insured and handled with utmost care. GPS tracking ensures complete visibility.'
    },
    {
      id: 3,
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Best rates in the industry without compromising on quality. Transparent pricing with no hidden charges.'
    },
    {
      id: 4,
      icon: '👥',
      title: 'Expert Team',
      description: 'Trained professionals with 15+ years of experience. We know the roads and handle your cargo like our own.'
    },
    {
      id: 5,
      icon: '🚀',
      title: 'Fast & Efficient',
      description: 'Quick turnaround times with optimized routes. We value your time and deliver faster than competitors.'
    },
    {
      id: 6,
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock customer support available for any queries or emergencies. We are always here for you.'
    }
  ]

  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="container">
        <h2>Why Choose Us</h2>
        <p className="section-subtitle">Industry-leading transportation solutions with proven track record</p>
        
        <div className="why-choose-content">
          <div className="about-section">
            <img src={truckImage} alt="Truck" className="truck-image" />
            <div className="about-text">
              <h3>About Anchor Shipping Services</h3>
              <p>
                With over 15 years of experience in the transportation industry, Anchor Shipping Services has established itself as a trusted partner for businesses across various sectors. Our commitment to excellence, reliability, and customer satisfaction sets us apart from the competition.
              </p>
              <p>
                We specialize in goods and vehicle transportation, offering comprehensive logistics solutions tailored to meet your unique needs. Whether it's a single shipment or an ongoing contract, we deliver with precision and professionalism.
              </p>
              <p>
                Our fleet of modern vehicles, combined with our team of experienced professionals, ensures that your cargo is in safe hands from pickup to delivery.
              </p>
            </div>
          </div>

          <div className="reasons-grid">
            {reasons.map(reason => (
              <div key={reason.id} className="reason-card">
                <div className="reason-icon">{reason.icon}</div>
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
