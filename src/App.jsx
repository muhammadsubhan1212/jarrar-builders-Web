import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import Projects from './pages/Projects/Projects'
import ForSale from './pages/ForSale/ForSale'
import ForRent from './pages/ForRent/ForRent'
import OurTeams from './pages/OurTeams/OurTeams'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import FloatingButtons from './components/FloatingButtons/FloatingButtons'
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/for-sale" element={<ForSale />} />
          <Route path="/for-rent" element={<ForRent />} />
          <Route path="/our-teams" element={<OurTeams />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <FloatingButtons />
      </div>
    </Router>
  )
}

export default App

