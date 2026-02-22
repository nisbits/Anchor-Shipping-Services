import { useState, useRef, useEffect } from 'react'
import './styles/Gallery.css'
import gallery1 from '../assets/gallery1.jpeg'
import gallery2 from '../assets/gallery2.jpeg'
import gallery3 from '../assets/gallery3.jpeg'
import gallery4 from '../assets/gallery4.jpeg'
import gallery5 from '../assets/gallery5.jpeg'
import gallery6 from '../assets/gallery6.jpeg'
import gallery7 from '../assets/gallery7.jpeg'
import gallery8 from '../assets/gallery8.jpeg'
import gallery9 from '../assets/gallery9.jpeg'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import video3 from '../assets/video3.mp4'
import video4 from '../assets/video4.mp4'
import video5 from '../assets/video5.mp4'
import video6 from '../assets/video6.mp4'

type GalleryMedia = {
  id: number
  src: string
  type: 'image' | 'video'
}

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)

  const imageMedia: GalleryMedia[] = [
    {
      id: 1,
      src: gallery1,
      type: 'image'
    },
    {
      id: 2,
      src: gallery2,
      type: 'image'
    },
    {
      id: 3,
      src: gallery3,
      type: 'image'
    },
    {
      id: 4,
      src: gallery4,
      type: 'image'
    },
    {
      id: 5,
      src: gallery5,
      type: 'image'
    },
    {
      id: 6,
      src: gallery6,
      type: 'image'
    },
    {
      id: 7,
      src: gallery7,
      type: 'image'
    },
    {
      id: 8,
      src: gallery8,
      type: 'image'
    },
    {
      id: 9,
      src: gallery9,
      type: 'image'
    }
  ]

  const videoMedia: GalleryMedia[] = [
    {
      id: 10,
      src: video1,
      type: 'video'
    },
    {
      id: 11,
      src: video2,
      type: 'video'
    },
    {
      id: 12,
      src: video3,
      type: 'video'
    },
    {
      id: 13,
      src: video4,
      type: 'video'
    },
    {
      id: 14,
      src: video5,
      type: 'video'
    },
    {
      id: 15,
      src: video6,
      type: 'video'
    }
  ]

  const galleryImages: GalleryMedia[] = []
  const maxLength = Math.max(imageMedia.length, videoMedia.length)

  for (let index = 0; index < maxLength; index += 1) {
    if (imageMedia[index]) {
      galleryImages.push(imageMedia[index])
    }
    if (videoMedia[index]) {
      galleryImages.push(videoMedia[index])
    }
  }

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
                  {image.type === 'video' ? (
                    <video
                      src={image.src}
                      className="gallery-media gallery-video"
                      autoPlay
                      loop
                      controls
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img src={image.src} alt="Gallery media" className="gallery-media gallery-image" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <button type="button" className="gallery-arrow gallery-arrow-left" onClick={prevImage} aria-label="Previous image">
            <span className="gallery-arrow-icon" aria-hidden="true">&#10094;</span>
          </button>
          <button type="button" className="gallery-arrow gallery-arrow-right" onClick={nextImage} aria-label="Next image">
            <span className="gallery-arrow-icon" aria-hidden="true">&#10095;</span>
          </button>

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
