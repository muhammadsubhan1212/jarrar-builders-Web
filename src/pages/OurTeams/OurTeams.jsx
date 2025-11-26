import './OurTeams.css'
import Footer from '../../components/Footer/Footer'

const OurTeams = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ahmed Jarrar',
      position: 'Senior Real Estate Consultant',
      experience: '15+ Years',
      image: null
    },
    {
      id: 2,
      name: 'Fatima Jarrar',
      position: 'Property Investment Advisor',
      experience: '12+ Years',
      image: null
    },
    {
      id: 3,
      name: 'Mohammed Jarrar',
      position: 'Luxury Property Specialist',
      experience: '10+ Years',
      image: null
    },
    {
      id: 4,
      name: 'Sarah Khan',
      position: 'Commercial Real Estate Expert',
      experience: '8+ Years',
      image: null
    },
    {
      id: 5,
      name: 'Omar Ali',
      position: 'Residential Sales Director',
      experience: '14+ Years',
      image: null
    },
    {
      id: 6,
      name: 'Layla Hassan',
      position: 'Property Management Lead',
      experience: '9+ Years',
      image: null
    }
  ]

  return (
    <div className="our-teams-page">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">Our Teams</h1>
          <p className="page-subtitle">
            Meet our expert team of certified real estate consultants dedicated to finding your perfect property
          </p>
        </div>
      </div>

      <section className="teams-section">
        <div className="teams-container">
          <div className="teams-intro">
            <h2>Expert Real Estate Professionals</h2>
            <p>
              With years of established local presence and thousands of successful transactions, 
              our team brings unparalleled expertise to the Karachi real estate market. Our certified consultants 
              leverage state-of-the-art technology, cutting-edge data, and the human element to provide 
              unmatched real estate guidance and full-scope support.
            </p>
          </div>

          <div className="teams-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    <div className="team-placeholder">
                      <span>{member.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-experience">{member.experience} Experience</p>
                </div>
              </div>
            ))}
          </div>

          <div className="teams-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Certified Consultants</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Promoted</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Regional Offices</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OurTeams

