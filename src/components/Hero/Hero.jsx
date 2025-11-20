import { useState } from 'react'
import './Hero.css'
import mainSection1 from '../../assets/images/main_section_1.png'
import mainSection2 from '../../assets/images/main_section_2.png'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "LET'S BUILD YOUR",
      subtitle: "DREAM PROPERTY IN KARACHI",
      description: "Welcome to Jarrar Builders, your trusted partner for residential & commercial construction, real-estate development, and turnkey projects in Karachi.",
      image: mainSection1
    },
    {
      title: "LET'S BUILD YOUR",
      subtitle: "DREAM PROPERTY IN KARACHI",
      description: "Welcome to Jarrar Builders, your trusted partner for residential & commercial construction, real-estate development, and turnkey projects in Karachi.",
      image: mainSection2
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="hero">
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <button 
          className="hero-nav-button hero-nav-prev" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <div className="hero-text">
          <h1 className="hero-title">{slides[currentSlide].title}</h1>
          <h2 className="hero-subtitle">{slides[currentSlide].subtitle}</h2>
          <p className="hero-description">{slides[currentSlide].description}</p>
        </div>

        <button 
          className="hero-nav-button hero-nav-next" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default Hero

