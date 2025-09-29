// src/pages/api/Introduction.jsx
import React from 'react';
import ApiSidebar from '../components/api/ApiSidebar.jsx';
import ApiHeader from '../components/api/ApiHeader.jsx';

const Introduction = () => {
  const keyFeatures = [
    {
      icon: (
        <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
        </svg>
      ),
      title: "Unified API",
      description: "Access real-time trend data from multiple social media platforms through a single, consistent API."
    },
    {
      icon: (
        <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"></path>
        </svg>
      ),
      title: "Standardized Data",
      description: "Retrieve trend data in a standardized format, making it easy to integrate into your applications."
    },
    {
      icon: (
        <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z"></path>
        </svg>
      ),
      title: "Flexible Queries",
      description: "Customize your trend queries with filters for location, time range, and more."
    },
    {
      icon: (
        <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
        </svg>
      ),
      title: "Developer-Friendly",
      description: "Comprehensive documentation and examples to help you get started quickly."
    }
  ];

  const useCases = [
    {
      icon: (
        <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
      ),
      title: "Social Media Monitoring",
      description: "Track trending topics and hashtags to understand current conversations and sentiments."
    },
    {
      icon: (
        <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
        </svg>
      ),
      title: "Content Strategy",
      description: "Identify emerging trends and patterns to inform your content strategy and campaigns."
    },
    {
      icon: (
        <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path>
        </svg>
      ),
      title: "Market Research",
      description: "Analyze trend data to gain insights into market dynamics and consumer behavior."
    },
    {
      icon: (
        <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM80,84A12,12,0,1,1,68,72,12,12,0,0,1,80,84Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,120,84Z"></path>
        </svg>
      ),
      title: "Application Development",
      description: "Integrate trend data into your applications to provide users with real-time insights."
    }
  ];

  return (
    <div className="dark min-h-screen bg-background-dark font-display text-gray-200">
      <div className="flex min-h-screen">
        <ApiSidebar />
        <main className="flex-1 p-6 sm:p-10 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <ApiHeader 
              title="Introduction" 
              description="Multi-platform Trend Aggregator is a powerful tool designed to simplify the process of tracking and analyzing trends across various social media platforms. By providing a unified API, it allows developers to easily integrate trend data into their applications, enabling them to stay ahead of the curve and make data-driven decisions."
            />
            
            {/* Key Features Section */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 sm:mb-6 sm:text-3xl">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background-dark/50 border border-primary/20">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-primary/20 text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1 text-base sm:text-lg">{feature.title}</h3>
                      <p className="text-sm text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases Section */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 sm:mb-6 sm:text-3xl">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background-dark/50 border border-primary/20">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-primary/20 text-primary">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1 text-base sm:text-lg">{useCase.title}</h3>
                      <p className="text-sm text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Introduction;