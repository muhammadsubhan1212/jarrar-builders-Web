import './PropertyCards.css'
import karachiHeightsImg from '../../assets/images/karachi-heights.png'
import northKarachiImg from '../../assets/images/north-karachi.png'
import commercialPlazaImg from '../../assets/images/commercial-plaza.png'
import businessComplexImg from '../../assets/images/business-complex.png'

const PropertyCards = () => {
  const properties = [
    {
      title: 'Luxury Urban Living',
      type: 'Apartment',
      bedrooms: '1, 2, 3',
      price: 'PKR 25,000,000',
      size: '775 to 1,787 Sq Ft',
      image: karachiHeightsImg
    },
    {
      title: 'Modern Apartment',
      type: 'Apartment',
      bedrooms: '1, 2, 3',
      price: 'PKR 28,000,000',
      size: '752 to 1,533 Sq Ft',
      image: northKarachiImg
    },
    {
      title: 'Skyline Penthouse',
      type: 'Apartment',
      bedrooms: '1, 1.5 & 2',
      price: 'PKR 35,000,000',
      size: '609 to 888 Sq Ft',
      image: karachiHeightsImg
    },
    {
      title: 'Urban Residence',
      type: 'Apartment',
      bedrooms: '1, 2, 3',
      price: 'PKR 30,000,000',
      size: '762 to 1,772 Sq Ft',
      image: northKarachiImg
    },
    {
      title: 'City Luxe',
      type: 'Apartment',
      bedrooms: '1, 2, 3',
      price: 'PKR 32,000,000',
      size: '708 to 4,510 Sq Ft',
      image: commercialPlazaImg
    },
    {
      title: 'Contempo Home',
      type: 'Apartment',
      bedrooms: '1, 2 & 3 Bedrooms',
      price: 'PKR 22,000,000',
      size: '609 to 1,098 Sq Ft',
      image: businessComplexImg
    },
    {
      title: 'Garden View',
      type: 'Apartment',
      bedrooms: '1 & 2',
      price: 'PKR 20,000,000',
      size: '674 to 1,145 Sq Ft',
      image: karachiHeightsImg
    },
    {
      title: 'Nova Heights',
      type: 'Apartment',
      bedrooms: 'Studio, 1, 2 & 3 Bedrooms',
      price: 'PKR 18,000,000',
      size: '397 to 2,705 Sq Ft',
      image: northKarachiImg
    }
  ]

  return (
    <section className="property-cards-section">
      <div className="property-cards-container">
        <div className="property-cards-grid">
          {properties.map((property, index) => (
            <div key={index} className="property-card-item">
              <div className="property-card-image">
                <img src={property.image} alt={property.title} className="property-card-img" />
              </div>
              <div className="property-card-content">
                <h3 className="property-card-title">{property.title}</h3>
                <div className="property-card-details">
                  <div className="property-detail">
                    <span className="detail-label">Type:</span>
                    <span className="detail-value">{property.type}</span>
                  </div>
                  <div className="property-detail">
                    <span className="detail-label">Bedrooms:</span>
                    <span className="detail-value">{property.bedrooms}</span>
                  </div>
                  <div className="property-detail">
                    <span className="detail-label">Price:</span>
                    <span className="detail-value price">{property.price}</span>
                  </div>
                  <div className="property-detail">
                    <span className="detail-label">Size:</span>
                    <span className="detail-value">{property.size}</span>
                  </div>
                </div>
                <a href="/for-sale" className="property-card-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PropertyCards

