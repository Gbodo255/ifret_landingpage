import React from 'react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

const Landing = () => {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Landing;
