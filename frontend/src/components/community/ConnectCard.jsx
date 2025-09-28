// src/components/community/ConnectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ConnectCard = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="group flex flex-col gap-3 text-center p-4 bg-background-dark/50 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 sm:p-6">
      <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-lg bg-primary/10 text-primary sm:w-12 sm:h-12">
        {icon}
      </div>
      <h4 className="text-base font-bold text-white sm:text-lg">{title}</h4>
      <p className="text-xs text-gray-300 sm:text-sm">{description}</p>
    </Link>
  );
};

export default ConnectCard;