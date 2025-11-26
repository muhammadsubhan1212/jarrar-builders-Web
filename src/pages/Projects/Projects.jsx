import './Projects.css'
import PropertyListings from '../../components/PropertyListings/PropertyListings'
import Footer from '../../components/Footer/Footer'

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">Our Projects</h1>
          <p className="page-subtitle">
            Discover our exclusive collection of luxury properties in Karachi
          </p>
        </div>
      </div>
      <PropertyListings />
      <Footer />
    </div>
  )
}

export default Projects

