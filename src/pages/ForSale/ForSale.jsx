import './ForSale.css'
import PropertyCards from '../../components/PropertyCards/PropertyCards'
import Footer from '../../components/Footer/Footer'

const ForSale = () => {
  return (
    <div className="for-sale-page">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">Properties For Sale</h1>
          <p className="page-subtitle">
            Explore our premium selection of properties available for purchase in Karachi
          </p>
        </div>
      </div>
      <PropertyCards />
      <Footer />
    </div>
  )
}

export default ForSale

