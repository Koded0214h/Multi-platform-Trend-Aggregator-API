// src/components/api/ApiHeader.jsx
import React from 'react';

const ApiHeader = ({ title, description }) => {
  return (
    <header className="mb-8 sm:mb-12">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-2 text-gray-300 sm:text-lg">{description}</p>
      )}
    </header>
  );
};

export default ApiHeader;