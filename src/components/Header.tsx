import logo from '../assets/logo1.png'
import './styles/Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <img src={logo} alt="Anchor Shipping Services" className="logo-image" />
            <div className="logo-text">
              <h1>Anchor Shipping Services</h1>
              <p>Your Trusted Goods & Vehicle Transportation Partner</p>
            </div>
          </div>
          <nav className="nav-menu">
            <a href="#services">Services</a>
            <a href="#why-choose-us">About Us</a>
            <a href="#map">Location</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
