// src/components/api/EndpointSection.jsx
import React from 'react';
import ParameterList from './ParameterList.jsx';
import CodeExample from './CodeExample.jsx';

const EndpointSection = ({ 
  title, 
  description, 
  method = 'GET', 
  endpoint, 
  parameters = [], 
  exampleResponse 
}) => {
  const getMethodColor = (method) => {
    const colors = {
      GET: 'text-green-500',
      POST: 'text-blue-500',
      PUT: 'text-yellow-500',
      DELETE: 'text-red-500',
      PATCH: 'text-purple-500'
    };
    return colors[method] || 'text-gray-500';
  };

  return (
    <section className="mb-8 sm:mb-12">
      <div className="border-b border-primary/20 pb-4 mb-6">
        <h3 className="text-xl font-bold text-white sm:text-2xl">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Endpoint</label>
            <div className="relative">
              <span className={`absolute inset-y-0 left-0 flex items-center pl-3 text-xs font-bold ${getMethodColor(method)}`}>
                {method}
              </span>
              <input 
                className="w-full pl-14 pr-4 py-3 rounded-lg bg-background-dark/50 border border-primary/20 focus:ring-primary focus:border-primary text-gray-200"
                readOnly 
                type="text" 
                value={endpoint}
              />
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Parameters</h4>
            <ParameterList parameters={parameters} />
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-2">Example Response</h4>
          <CodeExample code={exampleResponse} />
        </div>
      </div>
    </section>
  );
};

export default EndpointSection;