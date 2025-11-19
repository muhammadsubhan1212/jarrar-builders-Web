import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-main">SKS</div>
              <div className="footer-logo-sub">REAL ESTATE</div>
            </div>
            <div className="footer-address">
              <h3>Address</h3>
              <p>
                Dubai Hills Estate Business Park 4th, Office 204no<br />
                Dubai – UAE, PO Box No : 453881
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">About Us</h3>
            <ul className="footer-links">
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/our-teams">Our Teams</a></li>
              <li><a href="/contact-us">Get Expert Help</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Our Projects</h3>
            <ul className="footer-links">
              <li><a href="/projects/aeon">Aeon</a></li>
              <li><a href="/projects/lagoon">Lagoon</a></li>
              <li><a href="/projects/48-parkside">48 Parkside</a></li>
              <li><a href="/projects/riverside-crescent">Riverside Crescent</a></li>
              <li><a href="/projects/sobha-verde">Sobha Verde</a></li>
              <li><a href="/projects/ocean-tower">Ocean Tower</a></li>
              <li><a href="/projects/orbis">Orbis Emaar</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            ©2025 SKS. All Rights Reserved.
          </p>
          <p className="footer-powered">
            Powered by SKS Real Estate.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

