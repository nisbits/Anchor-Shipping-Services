import './styles/Services.css'

export default function Services() {
  const services = [
    {
      id: 1,
      icon: '🚗',
      title: 'Car Transport',
      description: 'Safe and secure transportation of automobiles to any destination'
    },
    {
      id: 2,
      icon: '🏍️',
      title: 'Bike & Motorcycle Transport',
      description: 'Professional handling and transport of bikes and motorcycles'
    },
    {
      id: 3,
      icon: '📦',
      title: 'Material Hauling',
      description: 'Efficient transportation of construction materials and bulk cargo'
    },
    {
      id: 4,
      icon: '🛣️',
      title: 'Heavy Equipment Transport',
      description: 'Specialized transport for machinery and heavy industrial equipment'
    },
    {
      id: 5,
      icon: '⏰',
      title: '24/7 Availability',
      description: 'Round-the-clock logistics support for urgent shipments'
    },
    {
      id: 6,
      icon: '📍',
      title: 'Pan-India Delivery',
      description: 'Nationwide coverage for all your transportation needs'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">Comprehensive goods and vehicle transportation solutions</p>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
