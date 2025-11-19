import './PropertyCards.css'

const PropertyCards = () => {
  const properties = [
    {
      title: 'Luxury Urban Living',
      type: 'Apartment',
      bedrooms: '1, 2, 3',
      price: 'AED 1,600,000',
      size: '775 to 1,787 Sq Ft'
    },
    {
      title: 'Modern Apartment',
      type: 'Apartment',
      bedrooms: '855 to 1,279 Sq Ft',
      price: 'AED 1,700,000',
      size: '752–1,533'
    },
    {
      title: 'Skyline Penthouse',
      type: 'Apartment',
      bedrooms: '1, 1.5 & 2',
      price: 'AED 1,500,000',
      size: '609 to 888 Sq Ft'
    },
    {
      title: 'Urban Residence',
      type: 'Apartment',
      bedrooms: '1, 2, 3',
      price: 'AED 1,710,000',
      size: '762 to 1,772 Sq Ft'
    },
    {
      title: 'City Luxe',
      type: 'Apartment',
      bedrooms: '1, 2, 3',
      price: 'AED 1,700,000',
      size: '708 to 4,510 Sq Ft.'
    },
    {
      title: 'Contempo Home',
      type: 'Apartment',
      bedrooms: '1, 2 & 3 Bedrooms',
      price: 'AED 882,048',
      size: '609 to 1,098 Sq Ft'
    },
    {
      title: 'Contempo Home',
      type: 'Apartment',
      bedrooms: '1 & 2',
      price: 'AED 979,000',
      size: '674 to 1,145 Sq Ft'
    },
    {
      title: 'Nova Heights',
      type: 'Apartment',
      bedrooms: 'Studio, 1, 2 & 3 Bedrooms',
      price: 'AED 599,000',
      size: '397.51 to 2705.83 Sq Ft'
    }
  ]

  return (
    <section className="property-cards-section">
      <div className="property-cards-container">
        <div className="property-cards-grid">
          {properties.map((property, index) => (
            <div key={index} className="property-card-item">
              <div className="property-card-image">
                <div className="property-card-placeholder">
                  {property.title}
                </div>
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

