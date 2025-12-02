import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import Staff from './pages/Staff';
import Shop from './pages/Shop';
import Give from './pages/Give';
import Connect from './pages/Connect';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-charcoal">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/give" element={<Give />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
