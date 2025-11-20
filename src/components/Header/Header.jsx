import { useState } from 'react'
import './Header.css'
import jbdLogo from '../../assets/images/JBD logo_2.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <img src={jbdLogo} alt="Jarrar Builders & Developers" className="logo-image" />
        </div>

        {/* Navigation */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/projects" className="nav-link">Projects</a></li>
            <li><a href="/for-sale" className="nav-link">For Sale</a></li>
            <li><a href="/for-rent" className="nav-link">For Rent</a></li>
            <li><a href="/our-teams" className="nav-link">Our Teams</a></li>
            <li><a href="/about-us" className="nav-link">About Us</a></li>
            <li><a href="/contact-us" className="nav-link">Contact Us</a></li>
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="header-contact">
          <div className="contact-email">info@jarrarbuilders.com</div>
          <div className="contact-phone">
            <span className="phone-icon">📞</span>
            +92 312 2248654
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            <li><a href="/" className="mobile-nav-link" onClick={closeMenu}>Home</a></li>
            <li><a href="/projects" className="mobile-nav-link" onClick={closeMenu}>Projects</a></li>
            <li><a href="/for-sale" className="mobile-nav-link" onClick={closeMenu}>For Sale</a></li>
            <li><a href="/for-rent" className="mobile-nav-link" onClick={closeMenu}>For Rent</a></li>
            <li><a href="/our-teams" className="mobile-nav-link" onClick={closeMenu}>Our Teams</a></li>
            <li><a href="/about-us" className="mobile-nav-link" onClick={closeMenu}>About Us</a></li>
            <li><a href="/contact-us" className="mobile-nav-link" onClick={closeMenu}>Contact Us</a></li>
          </ul>
        </nav>
        <div className="mobile-contact">
          <div className="mobile-contact-email">info@jarrarbuilders.com</div>
          <div className="mobile-contact-phone">
            <span className="phone-icon">📞</span>
            +92 312 2248654
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

