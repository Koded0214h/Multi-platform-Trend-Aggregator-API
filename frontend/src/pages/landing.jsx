// src/pages/Landing.jsx
import React from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';
import UseCases from '../components/UseCases.jsx';
import FAQ from '../components/FAQ.JSX';
import Pricing from '../components/Pricing.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';
import Roadmap from '../components/Roadmap.jsx';

const Landing = () => {
  return (
    <div className="dark min-h-screen bg-background-dark font-display text-gray-200">
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Features />
          <UseCases />
          <FAQ />
          <Roadmap />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;