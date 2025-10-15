import React, { useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Recommendations from './components/Recommendations'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectGit from "./components/ProjectGit";
import Website from "./components/Website";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import AnalyticsTracker from './components/AnalyticsTracker';
import Home from './pages/Home';
import DetallesProyecto from './pages/DetallesProyecto';



export default function App() {
  useEffect(() => {
    ReactGA.initialize("G-D28155BNK4"); // 👈 tu ID real de Google Analytics
  }, []);



  return (
    <Router>
      <AnalyticsTracker />
      <Routes>
        <Route path="/CV" element={<Home />} />
        <Route path="/detallesproyecto" element={<DetallesProyecto />} />
      </Routes>
    </Router>
  );
}


