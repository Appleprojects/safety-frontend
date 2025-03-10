import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Industry from './pages/Industry';
import AboutUs from './pages/AboutUs';
import AiDetect from './pages/AiDetect';
import Upcoming from './pages/Upcoming';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/ai-detect" element={<AiDetect />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;