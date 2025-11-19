import Hero from '../Hero/Hero'
import LogoCarousel from '../LogoCarousel/LogoCarousel'
import StatsSection from '../StatsSection/StatsSection'
import PropertyListings from '../PropertyListings/PropertyListings'
import PropertyCards from '../PropertyCards/PropertyCards'
import LuxuryStyle from '../LuxuryStyle/LuxuryStyle'
import ListWithUs from '../ListWithUs/ListWithUs'
import CommunitiesSection from '../CommunitiesSection/CommunitiesSection'
import ServicesSection from '../ServicesSection/ServicesSection'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'

const HomePage = () => {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <StatsSection />
      <PropertyListings />
      <PropertyCards />
      <LuxuryStyle />
      <ListWithUs />
      <CommunitiesSection />
      <ServicesSection />
      <Newsletter />
      <Footer />
    </>
  )
}

export default HomePage

