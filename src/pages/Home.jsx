import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import CTASection from '../components/CTA Section';
import Benefits from '../components/Benefits';
import Contact from '../components/Contact Section';
import Footer from '../components/Footer';

const Home = () => {
  return <div>

    <Navbar />
    <HeroSection />
    <CTASection />
    <Benefits />
    <Contact/>
    <Footer />
  </div>;
}

export default Home;
