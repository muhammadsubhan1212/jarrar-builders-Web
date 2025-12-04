import { useState } from 'react'
import './ContactUs.css'
import Footer from '../../components/Footer/Footer'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setIsSubmitting(true)

      // Use Vercel backend URL (from env) or fallback to localhost for development
      // VITE_API_URL should be set to your Vercel backend URL (e.g., https://your-backend.vercel.app)
      const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:3001' : '')
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong while sending your message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-us-page">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with our expert team for personalized real estate assistance
          </p>
        </div>
      </div>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get Expert Help</h2>
              <p>
                Looking to buy, sell, or rent a property in Karachi? Our team of certified 
                consultants is here to help you every step of the way.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-detail-content">
                    <h3>Email</h3>
                    <a href="mailto:info@jarrarbuilders.com">info@jarrarbuilders.com</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-detail-content">
                    <h3>Phone</h3>
                    <div className="phone-numbers">
                      <a href="tel:+923148038964">0314 8038964</a>
                      <a href="tel:+923148038963">0314 8038963</a>
                      <a href="tel:+923148038962">0314 8038962</a>
                    </div>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-detail-content">
                    <h3>Address</h3>
                    <p>
                      Shop no 1 R31 Sector 5A2 North Karachi<br />
                      Nearest to 4k Chowrangi, Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-hours">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Us a Message</h2>
                
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0314 8038964"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactUs

