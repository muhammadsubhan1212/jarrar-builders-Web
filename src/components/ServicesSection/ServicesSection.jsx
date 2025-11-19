import './ServicesSection.css'

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-content">
          <h2 className="services-title">Our Services</h2>
          <p className="services-description">
            SKS Real Estate® prides itself in offering a wide range of services to meet our 
            client's needs. Superior value and continuous pursuit of excellence guide our services 
            to be at the forefront of the industry.
          </p>
          <div className="services-grid">
            {/* Add service items here */}
            <div className="service-item">
              <h3 className="service-item-title">Property Sales</h3>
              <p className="service-item-description">
                Expert guidance for buying and selling luxury properties in Dubai.
              </p>
            </div>
            <div className="service-item">
              <h3 className="service-item-title">Property Rentals</h3>
              <p className="service-item-description">
                Comprehensive rental services for tenants and property owners.
              </p>
            </div>
            <div className="service-item">
              <h3 className="service-item-title">Property Management</h3>
              <p className="service-item-description">
                Full-service property management for investment properties.
              </p>
            </div>
            <div className="service-item">
              <h3 className="service-item-title">Consultation</h3>
              <p className="service-item-description">
                Expert real estate consultation and market analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

