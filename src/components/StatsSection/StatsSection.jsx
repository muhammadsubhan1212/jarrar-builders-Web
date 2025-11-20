import './StatsSection.css'

const StatsSection = () => {
  const stats = [
    {
      number: '18+',
      label: 'Years of Experience',
      description: 'LEADING JARRAR BUILDERS SINCE 2005'
    },
    {
      number: '0',
      label: 'Regional Offices'
    },
    {
      number: '0',
      label: 'Certified Consultants'
    },
    {
      number: '0+',
      label: 'Projects Promoted & Advised'
    }
  ]

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">LEADING JARRAR BUILDERS SINCE 2005</h2>
          <p className="stats-description">
            We specialize in residential & commercial construction, real-estate development, and turnkey projects. 
            What sets us apart is our ability to leverage state-of-the-art technology, cutting-edge expertise, 
            and the human element to provide unmatched construction and real estate services.
          </p>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="stats-footer">
          <a href="/about-us" className="discover-link">Discover our journey</a>
        </div>
      </div>
    </section>
  )
}

export default StatsSection

