// src/components/Roadmap.jsx
import React from 'react';

const Roadmap = () => {
  const roadmapItems = [
    {
      title: "Platform Expansion",
      description: "Adding support for Instagram, TikTok, and LinkedIn platforms",
      quarter: "Q4 2025",
      position: "left"
    },
    {
      title: "Advanced Analytics",
      description: "Machine learning-powered trend prediction and sentiment analysis",
      quarter: "Q1 2026",
      position: "right"
    },
    {
      title: "Customizable Alerts",
      description: "Real-time notifications for specific keywords and trends",
      quarter: "Q2 2026",
      position: "left"
    },
    {
      title: "Community Features",
      description: "User-generated trend reports and collaborative dashboards",
      quarter: "Q3 2026",
      position: "right"
    }
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Our Development Roadmap
          </h2>
          <p className="mt-3 text-base text-gray-300 sm:text-lg lg:mt-4 lg:text-xl">
            We are constantly innovating. Here's a look at what's coming next for the Multi-platform Trend Aggregator.
          </p>
        </div>
        
        {/* Mobile Timeline */}
        <div className="mt-8 lg:hidden">
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <MobileRoadmapItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>
        
        {/* Desktop Timeline */}
        <div className="mt-12 hidden lg:block">
          <div className="flow-root">
            <div className="-my-8">
              {roadmapItems.map((item, index) => (
                <DesktopRoadmapItem key={index} {...item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MobileRoadmapItem = ({ title, description, quarter, index }) => (
  <div className="relative">
    {/* Timeline dot */}
    <div className="absolute left-4 top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-background-dark">
      <svg fill="currentColor" height="12" viewBox="0 0 256 256" width="12" xmlns="http://www.w3.org/2000/svg">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"></path>
      </svg>
    </div>
    
    {/* Content */}
    <div className="ml-12 pl-4 border-l-2 border-primary/20">
      <div className="bg-background-dark/50 rounded-lg p-4 border border-primary/20">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{quarter}</p>
        <p className="text-sm text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  </div>
);

const DesktopRoadmapItem = ({ title, description, quarter, position, index }) => (
  <div className="relative py-8">
    {/* Timeline line */}
    <div className="absolute left-1/2 top-4 -ml-px h-full w-0.5 bg-primary/20"></div>
    
    <div className="relative flex items-center justify-between">
      {/* Left side content */}
      {position === "left" ? (
        <div className="w-2/5 text-right pr-8">
          <h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">{quarter}</p>
          <p className="text-sm text-gray-300 mt-2">{description}</p>
        </div>
      ) : (
        <div className="w-2/5"></div>
      )}
      
      {/* Timeline dot */}
      <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-background-dark">
        <svg fill="currentColor" height="16" viewBox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"></path>
        </svg>
      </div>
      
      {/* Right side content */}
      {position === "right" ? (
        <div className="w-2/5 text-left pl-8">
          <h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">{quarter}</p>
          <p className="text-sm text-gray-300 mt-2">{description}</p>
        </div>
      ) : (
        <div className="w-2/5"></div>
      )}
    </div>
  </div>
);

export default Roadmap;