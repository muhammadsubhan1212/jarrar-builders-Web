import './ListWithUs.css'

const ListWithUs = () => {
  return (
    <section className="list-with-us-section">
      <div className="list-with-us-container">
        <div className="list-with-us-content">
          <div className="list-with-us-badge">WORK WITH US</div>
          <h2 className="list-with-us-title">
            Partner With Karachi's Leading Construction & Development Company!
          </h2>
          <p className="list-with-us-description">
            Looking to build, develop, or invest in property? We will provide you with unparalleled 
            service for residential & commercial construction, real-estate development, and turnkey 
            projects so that you can achieve your goals without any of the stress and hassle often 
            associated with the process.
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

