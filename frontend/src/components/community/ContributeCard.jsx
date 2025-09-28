// src/components/community/ContributeCard.jsx
import React from 'react';

const ContributeCard = ({ icon, title, description }) => {
  return (
    <div className="bg-background-dark/50 rounded-xl border border-primary/20 p-4 flex items-start gap-3 sm:p-6">
      <div className="text-primary mt-1 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-base font-bold text-white sm:text-lg">{title}</h4>
        <p className="text-xs text-gray-300 mt-1 sm:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ContributeCard;