// src/components/CTA.jsx
import React from 'react';

const CTA = () => {
  return (
    <section className="gradient-border-bottom relative py-12 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg lg:mt-4 lg:text-xl">
          Explore the documentation and start building with the most powerful trend aggregation API available.
        </p>
        <div className="mt-6 sm:mt-8">
          <button className="rounded-lg bg-primary px-6 py-3 text-base font-bold text-background-dark shadow-lg shadow-primary/30 transition-transform hover:scale-105 sm:px-8 sm:py-4 sm:text-lg">
            Explore the Docs
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;