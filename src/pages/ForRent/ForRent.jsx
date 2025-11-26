import './ForRent.css'
import PropertyCards from '../../components/PropertyCards/PropertyCards'
import Footer from '../../components/Footer/Footer'

const ForRent = () => {
  return (
    <div className="for-rent-page">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">Properties For Rent</h1>
          <p className="page-subtitle">
            Find your perfect rental property in Karachi's most desirable locations
          </p>
        </div>
      </div>
      <PropertyCards />
      <Footer />
    </div>
  )
}

export default ForRent

