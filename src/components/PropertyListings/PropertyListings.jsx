import './PropertyListings.css'

const PropertyListings = () => {
  const properties = [
    {
      id: 1,
      name: 'Aeon',
      price: 'AED 1,710,000',
      description: 'Aeon, nestled within Dubai Creek Harbour, is a serene residential enclave that boasts breathtaking views of the Dubai skyline.',
      image: 'aeon'
    },
    {
      id: 2,
      name: 'NAYA Lagoon Villas',
      price: 'AED 1,700,000',
      description: 'NAYA Lagoon Villas offer an exclusive living experience within the prestigious District One, featuring 3-bedroom villas that blend opulence with a serene lifestyle.',
      image: 'naya-lagoon'
    },
    {
      id: 3,
      name: '48 Parkside',
      price: 'AED 882,048',
      description: '48 Parkside, located in Arjan (Al Barsha South), Dubai, exemplifies modern luxury living with its upscale apartments.',
      image: '48-parkside'
    },
    {
      id: 4,
      name: 'Sobha Verde',
      price: 'AED 1,600,000',
      description: 'Verde by Sobha is the premier residential project by Sobha Realty in Jumeirah Islands. This 58-story luxury landmark, situated opposite Jumeirah Islands, boasts a plethora of top-tier leisure and entertainment facilities.',
      image: 'sobha-verde'
    },
    {
      id: 5,
      name: 'Ocean Tower',
      price: 'AED 1,700,000',
      description: 'Nested in the heart of the Dubai Islands, it\'s the epitome of coastal living. Experience the pulse of city life with stunning ocean views.',
      image: 'ocean-tower'
    },
    {
      id: 6,
      name: 'Orbis',
      price: 'AED 958,000',
      description: 'Explore the meticulously crafted residences at SOBHA ORBIS, featuring intelligently planned apartments available in 1-2 bedroom layouts.',
      image: 'orbis'
    },
    {
      id: 7,
      name: '360 Riverside Crescent',
      price: 'AED 1,500,000',
      description: '360 Riverside Crescent Located in the heart of Sobha Hartland II, 360 Riverside Crescent is the latest jewel to grace this vibrant community.',
      image: '360-riverside'
    }
  ]

  return (
    <section className="property-listings-section">
      <div className="property-listings-container">
        <div className="property-listings-grid">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                <div className="property-image-placeholder">
                  {property.image}
                </div>
              </div>
              <div className="property-content">
                <h3 className="property-name">{property.name}</h3>
                <div className="property-price">{property.price}</div>
                <p className="property-description">{property.description}</p>
                <a href={`/projects/${property.name.toLowerCase().replace(/\s+/g, '-')}`} className="property-link">
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

export default PropertyListings

