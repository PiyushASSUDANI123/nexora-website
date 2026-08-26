import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import CoursesPage from './pages/CoursesPage';
import Contact from './pages/Contact';
import Loader from './components/Loader';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Loader />
      <div className="app-container">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
