import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './styles/Gallery.css'

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages = [
    {
      id: 1,
      src: '/src/assets/car.png',
      title: 'Car Transportation',
      description: 'Professional car transport service across all Indian states'
    },
    {
      id: 2,
      src: '/src/assets/bike.png',
      title: 'Bike Transportation',
      description: 'Safe and secure bike transport with special packaging'
    },
    {
      id: 3,
      src: '/src/assets/goods.png',
      title: 'Goods Transportation',
      description: 'Reliable goods and parcel delivery service'
    },
    {
      id: 4,
      src: '/src/assets/heavy.png',
      title: 'Heavy Vehicle Transport',
      description: 'Specialized transport for trucks and commercial vehicles'
    },
    {
      id: 5,
      src: '/src/assets/industrailequipments.png',
      title: 'Industrial Equipment',
      description: 'Heavy machinery and industrial equipment transport'
    },
    {
      id: 6,
      src: '/src/assets/panindia.png',
      title: 'Pan India Network',
      description: 'Extensive network across all major cities and villages'
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Our Work Gallery</h2>
        <p className="section-subtitle">Showcasing our successful transportation projects across India</p>
        
        <div className="gallery-container">
          <div className="gallery-scroll">
            <div 
              className="gallery-track"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {galleryImages.map((image) => (
                <div key={image.id} className="gallery-item">
                  <img src={image.src} alt={image.title} className="gallery-image" />
                  <div className="gallery-info">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-navigation">
            <button 
              className="nav-btn prev-btn"
              onClick={prevImage}
              disabled={currentImageIndex === 0}
            >
              <FaArrowLeft />
            </button>
            
            <div className="gallery-dots">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
            
            <button 
              className="nav-btn next-btn"
              onClick={nextImage}
              disabled={currentImageIndex === galleryImages.length - 1}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
