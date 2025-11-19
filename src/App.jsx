import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import FloatingButtons from './components/FloatingButtons/FloatingButtons'
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes here for Projects, For Sale, For Rent, etc. */}
        </Routes>
        <FloatingButtons />
      </div>
    </Router>
  )
}

export default App

