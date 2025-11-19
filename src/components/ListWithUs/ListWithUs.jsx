import './ListWithUs.css'

const ListWithUs = () => {
  return (
    <section className="list-with-us-section">
      <div className="list-with-us-container">
        <div className="list-with-us-content">
          <div className="list-with-us-badge">LIST WITH US</div>
          <h2 className="list-with-us-title">
            List Your UAE Property With UAE's Top Real Estate Company!
          </h2>
          <p className="list-with-us-description">
            Looking to sell or rent your property? We will provide you with unparalleled 
            service so that you can enjoy high returns on your property without any of the 
            stress and hassle often associated with the process.
          </p>
          <a href="/contact-us" className="list-with-us-button">
            Call to Action
          </a>
        </div>
      </div>
    </section>
  )
}

export default ListWithUs

