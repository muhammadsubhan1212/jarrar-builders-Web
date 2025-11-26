import './AboutUs.css'
import Footer from '../../components/Footer/Footer'
import StatsSection from '../../components/StatsSection/StatsSection'

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Your trusted partner in Karachi's real estate market
          </p>
        </div>
      </div>

      <section className="about-content-section">
        <div className="about-container">
          <div className="about-intro">
            <h2>LEAVING OUR JARRAR BUILDERS SINCE 2010</h2>
            <p>
              What sets us apart is our ability to leverage state-of-the-art technology, 
              cutting-edge data, and the human element to provide unmatched real estate 
              guidance and full-scope support.
            </p>
          </div>

          <StatsSection />

          <div className="about-story">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Jarrar Builders & Developers has been a leading force in Karachi's real estate market 
                for over 15 years. We pride ourselves on offering a wide range of services 
                to meet our client's needs. Superior value and continuous pursuit of 
                excellence guide our services to be at the forefront of the industry.
              </p>
              <p>
                The real estate business is rooted deeply in the communities where it is 
                located, therefore it is crucial to understand the local market, as well 
                as the historical and current market trends, property knowledge, and 
                customs for success. With years of established local presence 
                and thousands of sales and leasing transactions successfully closed, that 
                is exactly what we offer!
              </p>
            </div>
          </div>

          <div className="about-services">
            <h2>Our Services</h2>
            <p>
              Jarrar Builders & Developers prides itself in offering a wide range of services to meet 
              our client's needs. Superior value and continuous pursuit of excellence guide 
              our services to be at the forefront of the industry.
            </p>
            <div className="services-grid">
              <div className="service-item">
                <div className="service-icon">🏠</div>
                <h3>Property Sales</h3>
                <p>Expert guidance for buying and selling luxury properties in Karachi</p>
              </div>
              <div className="service-item">
                <div className="service-icon">🔑</div>
                <h3>Property Rentals</h3>
                <p>Comprehensive rental services for residential and commercial properties</p>
              </div>
              <div className="service-item">
                <div className="service-icon">💼</div>
                <h3>Investment Advisory</h3>
                <p>Strategic investment advice backed by market data and expertise</p>
              </div>
              <div className="service-item">
                <div className="service-icon">📋</div>
                <h3>Property Management</h3>
                <p>Full-service property management for owners and investors</p>
              </div>
              <div className="service-item">
                <div className="service-icon">🏗️</div>
                <h3>Project Promotion</h3>
                <p>Marketing and promotion services for new developments</p>
              </div>
              <div className="service-item">
                <div className="service-icon">📊</div>
                <h3>Market Analysis</h3>
                <p>In-depth market research and trend analysis for informed decisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutUs

