import './CommunitiesSection.css'
import karachiCommunitiesImg from '../../assets/images/karachi-communities.png'

const CommunitiesSection = () => {
  return (
    <section className="communities-section">
      <div className="communities-container">
        <div className="communities-content">
          <h2 className="communities-title">
            Explore Karachi's Most Attractive Communities
          </h2>
          <p className="communities-description">
            The construction and real estate business is rooted deeply in the communities where it is located, 
            therefore it is crucial to understand the local market, as well as the historical 
            and current market trends, property knowledge, and customs for success. With over 
            18 years of established local presence in Karachi and numerous successful construction and 
            development projects completed, that is exactly what we offer!
          </p>
          <div className="communities-image">
            <img src={karachiCommunitiesImg} alt="Karachi Communities" className="communities-image-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitiesSection

