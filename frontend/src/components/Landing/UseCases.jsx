// src/components/UseCases.jsx
import React from 'react';

const UseCases = () => {
  const useCases = [
    {
      title: "For Market Researchers",
      description: "Identify emerging consumer trends and shifts in market sentiment by analyzing data from social media and news sources in real-time."
    },
    {
      title: "For Financial Analysts",
      description: "Track stock market-related keywords and public sentiment to inform investment strategies and predict market movements."
    },
    {
      title: "For Content Creators",
      description: "Discover viral topics and trending hashtags to create relevant and timely content that resonates with your audience."
    }
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">Use Cases</h2>
          <p className="mt-3 text-base text-gray-300 sm:text-lg lg:mt-4 lg:text-xl">
            Discover how different professionals leverage our API to gain a competitive edge.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCaseCard = ({ title, description }) => (
  <div className="rounded-xl border border-primary/20 bg-background-dark/50 p-4 shadow-lg shadow-primary/10 sm:p-6">
    <h3 className="text-lg font-bold text-primary sm:text-xl">{title}</h3>
    <p className="mt-2 text-sm text-gray-300 sm:text-base">{description}</p>
  </div>
);

export default UseCases;