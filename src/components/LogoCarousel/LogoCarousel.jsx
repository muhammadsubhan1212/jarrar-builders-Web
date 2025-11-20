import './LogoCarousel.css'
import partnerConstructionMaterials from '../../assets/images/partner-construction-materials.png'
import partnerBankFinancial from '../../assets/images/partner-bank-financial.png'
import partnerArchitectureFirm from '../../assets/images/partner-architecture-firm.png'

const LogoCarousel = () => {
  // Logo images array
  const logos = [
    partnerConstructionMaterials,
    partnerBankFinancial,
    partnerArchitectureFirm
  ]

  // Repeat logos to fill the carousel (5 times for smooth scrolling)
  const repeatedLogos = Array.from({ length: 5 }, () => logos).flat()

  return (
    <section className="logo-carousel-section">
      <div className="logo-carousel-container">
        <div className="logo-carousel-track">
          {repeatedLogos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo} alt="Partner logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          ))}
          {/* Duplicate for infinite scroll effect */}
          {repeatedLogos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-item">
              <img src={logo} alt="Partner logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoCarousel

