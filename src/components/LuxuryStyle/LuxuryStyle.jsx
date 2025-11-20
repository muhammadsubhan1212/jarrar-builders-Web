import './LuxuryStyle.css'
import karachiHeightsImg from '../../assets/images/karachi-heights.png'
import businessComplexImg from '../../assets/images/business-complex.png'

const LuxuryStyle = () => {
  return (
    <section className="luxury-style-section">
      <div className="luxury-style-container">
        <div className="luxury-style-content">
          <h2 className="luxury-style-title">The Luxury Style</h2>
          <p className="luxury-style-description">
            Dive into Karachi's Real Estate Market To Find Your Perfect Home.
          </p>
          <div className="luxury-style-images">
            <div className="luxury-image-item">
              <img src={karachiHeightsImg} alt="Luxury Property" className="luxury-image-img" />
            </div>
            <div className="luxury-image-item">
              <img src={businessComplexImg} alt="Luxury Property" className="luxury-image-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LuxuryStyle

