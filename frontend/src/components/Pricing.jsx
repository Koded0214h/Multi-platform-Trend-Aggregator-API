// src/components/Pricing.jsx
import React from 'react';

const Pricing = () => {
  const features = [
    { name: "API Requests", free: "100/day", pro: "Coming Soon" },
    { name: "Supported Platforms", free: "Core platforms", pro: "Coming Soon" },
    { name: "Advanced Analytics", free: false, pro: "Coming Soon" },
    { name: "Support", free: "Community", pro: "Coming Soon" }
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">Pricing Plans</h2>
          <p className="mt-3 text-base text-gray-300 sm:text-lg lg:mt-4 lg:text-xl">
            Choose a plan that fits your needs. Start for free and scale as you grow.
          </p>
        </div>
        <div className="mt-8 overflow-x-auto sm:mt-12 lg:mt-16">
          {/* Mobile Cards View */}
          <div className="lg:hidden space-y-6">
            <PricingCardMobile 
              title="Free (v1)" 
              features={features} 
              isFree={true}
            />
            <PricingCardMobile 
              title="Pro (v2)" 
              features={features} 
              isFree={false}
            />
          </div>
          
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <table className="w-full max-w-4xl mx-auto border-collapse text-left">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="p-4 text-lg font-bold text-white">Feature</th>
                  <th className="p-4 text-lg font-bold text-white text-center">Free (v1)</th>
                  <th className="p-4 text-lg font-bold text-white text-center">Pro (v2)</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <PricingRow key={index} {...feature} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingRow = ({ name, free, pro }) => (
  <tr className="border-b border-primary/20">
    <td className="p-4 text-gray-300">{name}</td>
    <td className="p-4 text-gray-300 text-center">
      {typeof free === 'boolean' ? (
        <svg className="mx-auto h-6 w-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        free
      )}
    </td>
    <td className="p-4 text-center">
      <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">{pro}</span>
    </td>
  </tr>
);

const PricingCardMobile = ({ title, features, isFree }) => (
  <div className="rounded-xl border border-primary/20 bg-background-dark/50 p-6">
    <h3 className="text-xl font-bold text-primary text-center mb-6">{title}</h3>
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex justify-between items-center border-b border-primary/10 pb-4 last:border-b-0 last:pb-0">
          <span className="text-gray-300 text-sm">{feature.name}</span>
          <span className="text-gray-300 text-sm font-medium">
            {isFree ? (
              typeof feature.free === 'boolean' ? (
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                feature.free
              )
            ) : (
              <span className="rounded-full bg-primary/20 px-2 py-1 text-xs font-semibold text-primary">
                {feature.pro}
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Pricing;