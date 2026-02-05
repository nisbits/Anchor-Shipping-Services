import { CSSProperties } from 'react'
import bannerImage from '../assets/Banner.png'
import './styles/Hero.css'

export default function Hero() {
  const heroStyle: CSSProperties = {
    backgroundImage: `linear-gradient(rgba(30, 33, 45, 0.6), rgba(40, 25, 55, 0.6)), url(${bannerImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <section className="hero" style={heroStyle}>
      <div className="container">
        <div className="hero-content">
          <h2>Fast & Reliable Goods & Vehicle Transportation</h2>
          <p>Transport your vehicles, materials, and cargo safely and on time</p>
          <button className="hero-btn">Get a Quote Now</button>
        </div>
      </div>
    </section>
  )
}
