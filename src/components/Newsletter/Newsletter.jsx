import { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', { email, phone })
    // Reset form
    setEmail('')
    setPhone('')
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p className="newsletter-description">
            Get a unique insight into the latest market updates, hottest listings & new investment opportunities.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            <button type="submit" className="newsletter-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

