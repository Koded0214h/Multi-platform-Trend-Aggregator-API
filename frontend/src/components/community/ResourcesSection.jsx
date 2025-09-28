// src/components/community/ResourcesSection.jsx
import React from 'react';

const ResourcesSection = () => {
  const resources = [
    {
      title: "Events & Meetups",
      description: "Join our virtual and in-person events to connect with other community members."
    },
    {
      title: "Showcase",
      description: "Share your projects and get featured in our community showcase."
    }
  ];

  return (
    <section>
      <h3 className="text-xl font-bold text-white mb-4 sm:mb-6 sm:text-2xl">Community Resources</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-background-dark/50 rounded-xl border border-primary/20 p-4 sm:p-6">
            <h4 className="text-base font-bold text-white mb-2 sm:text-lg">{resource.title}</h4>
            <p className="text-xs text-gray-300 sm:text-sm">{resource.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesSection;