import React from 'react'
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom'
import { NavbarTop } from '../src/components/Navbar/Navbar'
import Signup from '../src/components/Signup/Signup'
import LandingPage from '../src/components/LandingPage'
import Login from '../src/components/Signup/Signup'
import './App.css';



export default function App() {
  return (
    <Router>
            <div>
                <Routes>
                    <Route path="/" element={ <LandingPage/> }/>
                    <Route path="/NavbarTop" element={ <NavbarTop/> }/>
                    <Route path="/login" element={ <Login/> }/>
                    <Route path="/register" element={ <Signup/> }/>
                    {/* <Route path="/register" component={ RegisterPage } /> */}
                    
                </Routes>    
            </div>
        </Router>
  )
}

// export default App;
