import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavbarTop from '../src/components/Navbar/Navbar'
import Signup from '../src/components/Signup/Signup'
import LandingPage from '../src/components/LandingPage'
import Login from '../src/components/LoginPage/LoginPage'
import Footer from '../src/components/Footer/Footer'
import './App.css';



export default function App() {
  return (


    <Router>
      <div>
        <NavbarTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/NavbarTop" element={<NavbarTop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )


}

// export default App;
