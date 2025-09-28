// src/components/community/ContributeSection.jsx
import React from 'react';
import ContributeCard from './ContributeCard.jsx';

const ContributeSection = () => {
  const contributeItems = [
    {
      icon: (
        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
        </svg>
      ),
      title: "Contribution Guidelines",
      description: "Learn how you can contribute to the project, from code to documentation."
    },
    {
      icon: (
        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
        </svg>
      ),
      title: "Code of Conduct",
      description: "We are committed to a welcoming and inspiring community. Please read our code of conduct."
    }
  ];

  return (
    <section>
      <h3 className="text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-3 sm:text-2xl">
        <svg className="text-primary" fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M149.66,138.34,168,120,112,64,56,120l18.34,18.34,24-24V192h13.32V114.34ZM224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Zm-16,0a80,80,0,1,0-80,80A80,80,0,0,0,208,128Z"></path>
        </svg>
        Contribute
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-6">
        {contributeItems.map((item, index) => (
          <ContributeCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ContributeSection;