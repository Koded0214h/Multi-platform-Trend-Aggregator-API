// src/components/api/ApiHeader.jsx
import React from 'react';

const ApiHeader = ({ title, description }) => {
  return (
    <header className="mb-6 sm:mb-8 lg:mb-12 pt-4 lg:pt-0">
      <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{title}</h2>
      {description && (
        <p className="mt-2 text-sm text-gray-300 sm:text-base lg:text-lg lg:mt-3">
          {description}
        </p>
      )}
    </header>
  );
};

export default ApiHeader;