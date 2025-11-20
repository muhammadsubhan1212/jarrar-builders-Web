import './PropertyListings.css'
import northKarachiImg from '../../assets/images/north-karachi.png'
import commercialPlazaImg from '../../assets/images/commercial-plaza.png'
import karachiHeightsImg from '../../assets/images/karachi-heights.png'
import businessComplexImg from '../../assets/images/business-complex.png'
import karachiHeightsImg2 from '../../assets/images/karachi-heights.png'
import northKarachiImg2 from '../../assets/images/north-karachi.png'
import commercialPlazaImg2 from '../../assets/images/commercial-plaza.png'

const PropertyListings = () => {
  const properties = [
    {
      id: 1,
      name: 'North Karachi Residency',
      price: 'PKR 45,000,000',
      description: 'A serene residential enclave in North Karachi, offering modern living with excellent connectivity to 4K Chowrangi and major city areas.',
      image: northKarachiImg
    },
    {
      id: 2,
      name: 'Sector 5A2 Commercial Plaza',
      price: 'PKR 85,000,000',
      description: 'Premium commercial development in Sector 5A2, North Karachi, featuring retail spaces and offices in a prime location near 4K Chowrangi.',
      image: commercialPlazaImg
    },
    {
      id: 3,
      name: 'Karachi Heights Apartments',
      price: 'PKR 25,000,000',
      description: 'Modern luxury apartments in North Karachi, exemplifying contemporary living with upscale amenities and strategic location.',
      image: karachiHeightsImg
    },
    {
      id: 4,
      name: 'Jarrar Business Complex',
      price: 'PKR 120,000,000',
      description: 'A premier commercial project in North Karachi, featuring state-of-the-art facilities for businesses and retail establishments.',
      image: businessComplexImg
    },
    {
      id: 5,
      name: 'Riverside Residences',
      price: 'PKR 55,000,000',
      description: 'Luxury residential project offering a perfect blend of modern architecture and serene living in North Karachi.',
      image: karachiHeightsImg2
    },
    {
      id: 6,
      name: 'Garden View Villas',
      price: 'PKR 35,000,000',
      description: 'Exclusive villas featuring intelligently planned layouts with 3-4 bedrooms, perfect for families seeking luxury living.',
      image: northKarachiImg2
    },
    {
      id: 7,
      name: 'Metro Point Commercial',
      price: 'PKR 95,000,000',
      description: 'Strategic commercial development located in the heart of North Karachi, offering prime retail and office spaces.',
      image: commercialPlazaImg2
    }
  ]

  return (
    <section className="property-listings-section">
      <div className="property-listings-container">
        <div className="property-listings-grid">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                <img src={property.image} alt={property.name} className="property-image-img" />
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

