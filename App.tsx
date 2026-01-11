import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustBar from './components/TrustBar';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-industrial-dark text-white selection:bg-safety-orange selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;