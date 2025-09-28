// src/pages/Community.jsx
import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CommunityHero from '../components/community/CommunityHero.jsx';
import ConnectSection from '../components/community/ConnectSection.jsx';
import ContributeSection from '../components/community/ContributeSection.jsx';
import ResourcesSection from '../components/community/ResourcesSection.jsx';

const Community = () => {
  return (
    <div className="dark min-h-screen bg-background-dark font-display text-gray-200">
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-1 py-8 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <CommunityHero />
            
            <div className="space-y-8 sm:space-y-12">
              <ConnectSection />
              <ContributeSection />
              <ResourcesSection />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Community;