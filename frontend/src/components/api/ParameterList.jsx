// src/components/api/ParameterList.jsx
import React from 'react';

const ParameterList = ({ parameters }) => {
  if (!parameters || parameters.length === 0) {
    return (
      <div className="text-sm text-gray-400 p-4 border border-dashed border-primary/20 rounded-lg">
        No parameters required for this endpoint.
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {parameters.map((param, index) => (
        <div key={index}>
          <div className="flex items-center gap-2">
            <code className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded">
              {param.name}
            </code>
            <span className="text-sm text-gray-400">{param.type}</span>
            {param.required && (
              <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">required</span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">{param.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ParameterList;