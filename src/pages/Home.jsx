import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import CTASection from '../components/CTA Section';
import Benefits from '../components/Benefits';
import Contact from '../components/Contact Section';
import CoachProfile from '../components/Coach Profile';
import Footer from '../components/Footer';
import PlayerProfileCardSection from '../components/Player Profile';
import ClubProfileSection from '../components/Club Profile';
import PricingSection from '../components/Pricing';

const Home = () => {
  return <div>

    <Navbar />
    <HeroSection />
    <CTASection />
    <Benefits />
    <ClubProfileSection/>
    <CoachProfile/>
    <PlayerProfileCardSection/>
    <PricingSection/>
    <Contact/>
    <Footer />
  </div>;
}

export default Home;
