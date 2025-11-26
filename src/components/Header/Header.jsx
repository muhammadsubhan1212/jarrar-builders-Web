import { useState } from 'react'
import { Link } from 'react-router-dom'
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
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/projects" className="nav-link">Projects</Link></li>
            <li><Link to="/for-sale" className="nav-link">For Sale</Link></li>
            <li><Link to="/for-rent" className="nav-link">For Rent</Link></li>
            <li><Link to="/our-teams" className="nav-link">Our Teams</Link></li>
            <li><Link to="/about-us" className="nav-link">About Us</Link></li>
            <li><Link to="/contact-us" className="nav-link">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="header-contact">
          <div className="contact-email">info@jarrarbuilders.com</div>
          <div className="contact-phone">
            <span className="phone-icon">📞</span>
            0314 8038964
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
            <li><Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/projects" className="mobile-nav-link" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/for-sale" className="mobile-nav-link" onClick={closeMenu}>For Sale</Link></li>
            <li><Link to="/for-rent" className="mobile-nav-link" onClick={closeMenu}>For Rent</Link></li>
            <li><Link to="/our-teams" className="mobile-nav-link" onClick={closeMenu}>Our Teams</Link></li>
            <li><Link to="/about-us" className="mobile-nav-link" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/contact-us" className="mobile-nav-link" onClick={closeMenu}>Contact Us</Link></li>
          </ul>
        </nav>
        <div className="mobile-contact">
          <div className="mobile-contact-email">info@jarrarbuilders.com</div>
          <div className="mobile-contact-phone">
            <span className="phone-icon">📞</span>
            0314 8038964
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

