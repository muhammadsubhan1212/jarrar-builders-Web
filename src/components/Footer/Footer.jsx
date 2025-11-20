import './Footer.css'
import jbdLogo from '../../assets/images/JBD logo_2.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={jbdLogo} alt="Jarrar Builders & Developers" className="footer-logo-image" />
            </div>
            <div className="footer-address">
              <h3>Address</h3>
              <p>
                Shop no 1 R31 Sector 5A2 North Karachi<br />
                Nearest to 4k Chowrangi, Karachi, Pakistan
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
              <li><a href="/projects/north-karachi-residency">North Karachi Residency</a></li>
              <li><a href="/projects/commercial-plaza">Sector 5A2 Commercial Plaza</a></li>
              <li><a href="/projects/karachi-heights">Karachi Heights Apartments</a></li>
              <li><a href="/projects/business-complex">Jarrar Business Complex</a></li>
              <li><a href="/projects/riverside">Riverside Residences</a></li>
              <li><a href="/projects/garden-villas">Garden View Villas</a></li>
              <li><a href="/projects/metro-point">Metro Point Commercial</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            ©2025 Jarrar Builders. All Rights Reserved.
          </p>
          <p className="footer-powered">
            Powered by Jarrar Builders & Developers.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

