import { Link } from 'react-router-dom'
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
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/our-teams">Our Teams</Link></li>
              <li><Link to="/contact-us">Get Expert Help</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Our Projects</h3>
            <ul className="footer-links">
              <li><Link to="/projects">North Karachi Residency</Link></li>
              <li><Link to="/projects">Sector 5A2 Commercial Plaza</Link></li>
              <li><Link to="/projects">Karachi Heights Apartments</Link></li>
              <li><Link to="/projects">Jarrar Business Complex</Link></li>
              <li><Link to="/projects">Riverside Residences</Link></li>
              <li><Link to="/projects">Garden View Villas</Link></li>
              <li><Link to="/projects">Metro Point Commercial</Link></li>
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

