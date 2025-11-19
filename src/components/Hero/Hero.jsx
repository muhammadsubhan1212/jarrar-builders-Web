import { useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "LET'S FIND YOUR",
      subtitle: "LUXURY PROPERTY IN DUBAI",
      description: "Welcome to SKS Real Estate, your ultimate destination for finding the most exclusive luxury properties in Dubai."
    }
    // Add more slides here if needed
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        {/* Background image will be added via CSS */}
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

