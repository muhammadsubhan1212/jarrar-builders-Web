import './ServicesSection.css'

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-content">
          <h2 className="services-title">Our Services</h2>
          <p className="services-description">
            Jarrar Builders prides itself in offering a wide range of services to meet our 
            client's needs. We specialize in residential & commercial construction, real-estate 
            development, and turnkey projects. Superior value and continuous pursuit of excellence 
            guide our services to be at the forefront of the industry.
          </p>
          <div className="services-grid">
            {/* Add service items here */}
            <div className="service-item">
              <h3 className="service-item-title">Residential Construction</h3>
              <p className="service-item-description">
                Expert construction services for residential properties in Karachi, from planning to completion.
              </p>
            </div>
            <div className="service-item">
              <h3 className="service-item-title">Commercial Construction</h3>
              <p className="service-item-description">
                Comprehensive commercial construction services for offices, retail spaces, and business complexes.
              </p>
            </div>
            <div className="service-item">
              <h3 className="service-item-title">Real Estate Development</h3>
              <p className="service-item-description">
                Full-service real estate development from land acquisition to project completion.
              </p>
            </div>
            <div className="service-item">
              <h3 className="service-item-title">Turnkey Projects</h3>
              <p className="service-item-description">
                Complete turnkey project solutions, handling every aspect from design to final delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

