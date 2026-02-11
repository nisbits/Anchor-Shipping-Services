import { useState, useRef, useEffect } from 'react'
import './styles/Gallery.css'

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)

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
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevImage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToImage = (index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentImageIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Touch/Swipe handling
  useEffect(() => {
    const galleryElement = galleryRef.current
    if (!galleryElement) return

    let startX = 0
    let startY = 0
    let isDragging = false

    const handleStart = (e: TouchEvent | MouseEvent) => {
      isDragging = true
      startX = 'touches' in e ? e.touches[0].clientX : e.clientX
      startY = 'touches' in e ? e.touches[0].clientY : e.clientY
    }

    const handleMove = (e: TouchEvent | MouseEvent) => {
      if (!isDragging) return
      e.preventDefault()
    }

    const handleEnd = (e: TouchEvent | MouseEvent) => {
      if (!isDragging) return
      isDragging = false

      const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX
      const endY = 'changedTouches' in e ? e.changedTouches[0].clientY : e.clientY
      const diffX = endX - startX
      const diffY = endY - startY

      // Only trigger swipe if horizontal movement is greater than vertical
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          prevImage() // Swipe right - previous image
        } else {
          nextImage() // Swipe left - next image
        }
      }
    }

    // Touch events
    galleryElement.addEventListener('touchstart', handleStart, { passive: false })
    galleryElement.addEventListener('touchmove', handleMove, { passive: false })
    galleryElement.addEventListener('touchend', handleEnd, { passive: false })

    // Mouse events for desktop
    galleryElement.addEventListener('mousedown', handleStart, { passive: false })
    galleryElement.addEventListener('mousemove', handleMove, { passive: false })
    galleryElement.addEventListener('mouseup', handleEnd, { passive: false })
    galleryElement.addEventListener('mouseleave', handleEnd, { passive: false })

    return () => {
      galleryElement.removeEventListener('touchstart', handleStart)
      galleryElement.removeEventListener('touchmove', handleMove)
      galleryElement.removeEventListener('touchend', handleEnd)
      galleryElement.removeEventListener('mousedown', handleStart)
      galleryElement.removeEventListener('mousemove', handleMove)
      galleryElement.removeEventListener('mouseup', handleEnd)
      galleryElement.removeEventListener('mouseleave', handleEnd)
    }
  }, [isTransitioning])

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Our Work Gallery</h2>
        <p className="section-subtitle">Showcasing our successful transportation projects across India</p>
        
        <div className="gallery-container">
          <div className="gallery-scroll" ref={galleryRef}>
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

          <div className="gallery-dots">
            {galleryImages.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
