// components/api/EndpointSection.jsx
import React from 'react';

const EndpointSection = ({ title, description, method, endpoint, parameters, exampleResponse }) => {
  return (
    <section className="bg-background-dark/50 rounded-lg border border-primary/20 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">{title}</h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-mono font-bold ${
            method === 'GET' ? 'bg-green-500/20 text-green-400' : 
            method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
            method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
            method === 'DELETE' ? 'bg-red-500/20 text-red-400' :
            'bg-gray-500/20 text-gray-400'
          }`}>
            {method}
          </span>
          <code className="bg-background-dark text-primary rounded px-2 sm:px-3 py-1 text-xs sm:text-sm font-mono break-all">
            {endpoint}
          </code>
        </div>
      </div>

      {/* Parameters */}
      {parameters && parameters.length > 0 && (
        <div className="mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Parameters</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="py-2 px-3 sm:px-4 text-xs sm:text-sm font-bold text-white">Name</th>
                  <th className="py-2 px-3 sm:px-4 text-xs sm:text-sm font-bold text-white">Type</th>
                  <th className="py-2 px-3 sm:px-4 text-xs sm:text-sm font-bold text-white">Required</th>
                  <th className="py-2 px-3 sm:px-4 text-xs sm:text-sm font-bold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((param, index) => (
                  <tr key={index} className="border-b border-primary/10">
                    <td className="py-2 px-3 sm:px-4 text-xs sm:text-sm font-mono text-primary">{param.name}</td>
                    <td className="py-2 px-3 sm:px-4 text-xs sm:text-sm text-gray-300">{param.type}</td>
                    <td className="py-2 px-3 sm:px-4 text-xs sm:text-sm">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${
                        param.required 
                          ? 'bg-red-500/20 text-red-400' 
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {param.required ? 'Required' : 'Optional'}
                      </span>
                    </td>
                    <td className="py-2 px-3 sm:px-4 text-xs sm:text-sm text-gray-300">{param.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Example Response */}
      {exampleResponse && (
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Example Response</h3>
          <div className="bg-background-dark rounded-lg p-3 sm:p-4 border border-primary/20">
            <pre className="text-xs sm:text-sm text-white overflow-x-auto whitespace-pre-wrap break-words">
              <code>{exampleResponse}</code>
            </pre>
          </div>
        </div>
      )}
    </section>
  );
};

export default EndpointSection;