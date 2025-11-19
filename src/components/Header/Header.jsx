import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <div className="logo-main">SKS</div>
          <div className="logo-sub">REAL ESTATE</div>
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
          <div className="contact-email">info@sks.ae</div>
          <div className="contact-phone">
            <span className="phone-icon">📞</span>
            +971551519984
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header

