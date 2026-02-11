import carImage from '../assets/car.png'
import bikeImage from '../assets/bike.png'
import goodsImage from '../assets/goods.png'
import heavyImage from '../assets/heavy.png'
import industrialImage from '../assets/industrailequipments.png'
import panIndiaImage from '../assets/panindia.png'
import houseImage from '../assets/householding.png'
import './styles/Services.css'

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <img src={carImage} alt="Car Transport" />,
      title: 'Car Transport',
      description: 'Safe & secure car transportation across all Indian states with GPS tracking and insurance coverage'
    },
    {
      id: 2,
      icon: <img src={bikeImage} alt="Bike Transport" />,
      title: 'Bike Transport',
      description: 'Professional bike and motorcycle transport with special packaging for inter-city moves'
    },
    {
      id: 3,
      icon: <img src={goodsImage} alt="Goods Transport" />,
      title: 'Goods Transport',
      description: 'Reliable goods and parcel delivery service for businesses and individuals across India'
    },
    {
      id: 4,
      icon: <img src={heavyImage} alt="Heavy Vehicle Transport" />,
      title: 'Heavy Vehicle Transport',
      description: 'Specialized transport for trucks, buses and commercial vehicles with expert handling'
    },
    {
      id: 5,
      icon: <img src={industrialImage} alt="Industrial Equipment" />,
      title: 'Industrial Equipment',
      description: 'Heavy machinery and industrial equipment transport with proper permits and safety measures'
    },
    {
      id: 6,
      icon: <img src={panIndiaImage} alt="Pan India Network" />,
      title: 'Pan India Network',
      description: 'Extensive network covering all major cities, towns and villages across India'
    },
    {
      id: 7,
      icon: <img src={houseImage} alt="Household Shifting" />,
      title: 'Household Shifting',
      description: 'Complete household relocation services with professional packing, loading, and unpacking for stress-free moving'
    },
    {
      id: 8,
      icon: <img src={goodsImage} alt="Local Shifting" />,
      title: 'Local Shifting',
      description: 'Quick and reliable local shifting services within city limits with affordable pricing and timely delivery'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Logistics Services</h2>
        <p className="section-subtitle">Comprehensive transportation solutions tailored for Indian businesses and individuals</p>
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
