import './LogoCarousel.css'

const LogoCarousel = () => {
  // Logo data - you can replace with actual logo images
  const logos = Array.from({ length: 14 }, (_, i) => `Logo ${i + 1}`)

  return (
    <section className="logo-carousel-section">
      <div className="logo-carousel-container">
        <div className="logo-carousel-track">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <div className="logo-placeholder">{logo}</div>
            </div>
          ))}
          {/* Duplicate for infinite scroll effect */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-item">
              <div className="logo-placeholder">{logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoCarousel

