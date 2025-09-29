// src/pages/api/Examples.jsx
import React, { useState } from 'react';
import ApiSidebar from '../../components/api/ApiSidebar.jsx';
import ApiHeader from '../../components/api/ApiHeader.jsx';

const Examples = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('Get trending topics');
  const [selectedPlatform, setSelectedPlatform] = useState('Twitter');
  const [response, setResponse] = useState('');

  const endpoints = [
    'Get trending topics',
    'Get topic details', 
    'Search topics'
  ];

  const platforms = [
    'Twitter',
    'Youtube',
    'Google Trends',
    'Reddit'
  ];

  const exampleResponses = {
    'Get trending topics': `{
  "data": [
    {
      "id": "trend_1",
      "topic": "#AIForGood",
      "platform": "${selectedPlatform}",
      "volume": "1.2M",
      "growth": "+15%",
      "sentiment": "positive",
      "timestamp": "2024-01-15T10:30:00Z"
    },
    {
      "id": "trend_2", 
      "topic": "Sustainable Tech",
      "platform": "${selectedPlatform}",
      "volume": "850k",
      "growth": "+8%",
      "sentiment": "neutral",
      "timestamp": "2024-01-15T10:25:00Z"
    }
  ],
  "meta": {
    "total": 2,
    "platform": "${selectedPlatform}",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}`,
    'Get topic details': `{
  "data": {
    "id": "trend_1",
    "topic": "#AIForGood",
    "platform": "${selectedPlatform}",
    "volume": "1.2M",
    "growth": "+15%",
    "sentiment": "positive",
    "related_topics": ["AI Ethics", "Machine Learning", "Tech for Good"],
    "geographic_distribution": {
      "US": "45%",
      "EU": "30%", 
      "Asia": "20%",
      "Other": "5%"
    },
    "demographics": {
      "age_18_24": "25%",
      "age_25_34": "40%",
      "age_35_44": "20%",
      "age_45_plus": "15%"
    },
    "timestamp": "2024-01-15T10:30:00Z"
  }
}`,
    'Search topics': `{
  "data": [
    {
      "id": "search_1",
      "topic": "Serverless Architecture",
      "platform": "${selectedPlatform}",
      "relevance": "95%",
      "volume": "320k",
      "sentiment": "positive",
      "timestamp": "2024-01-15T09:45:00Z"
    },
    {
      "id": "search_2",
      "topic": "#Serverless",
      "platform": "${selectedPlatform}", 
      "relevance": "89%",
      "volume": "280k",
      "sentiment": "neutral",
      "timestamp": "2024-01-15T09:30:00Z"
    }
  ],
  "meta": {
    "query": "serverless",
    "total_results": 2,
    "platform": "${selectedPlatform}",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}`
  };

  const handleRunRequest = () => {
    // Simulate API call delay
    setTimeout(() => {
      setResponse(exampleResponses[selectedEndpoint]);
    }, 500);
  };

  const handleCopyResponse = () => {
    navigator.clipboard.writeText(response);
    // You could add a toast notification here
  };

  return (
    <div className="dark min-h-screen bg-background-dark font-display text-gray-200">
      <div className="flex">
        <ApiSidebar />
        <main className="flex-1 lg:ml-0 min-h-screen p-4 sm:p-6 lg:p-8 xl:p-10 overflow-auto">
          <div className="max-w-4xl mx-auto w-full">
            <ApiHeader 
              title="Examples" 
              description="Test the API directly from your browser with interactive examples."
            />
            
            <div className="mt-6 sm:mt-8 lg:mt-10 xl:mt-12 space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Controls Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2" htmlFor="endpoint">
                    Endpoint
                  </label>
                  <select 
                    className="w-full appearance-none rounded-lg border border-primary/20 bg-background-dark/50 px-3 sm:px-4 py-2.5 sm:py-3 pr-8 sm:pr-10 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    id="endpoint"
                    name="endpoint"
                    value={selectedEndpoint}
                    onChange={(e) => setSelectedEndpoint(e.target.value)}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%231dc9c9' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em'
                    }}
                  >
                    {endpoints.map((endpoint) => (
                      <option key={endpoint} value={endpoint}>
                        {endpoint}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2" htmlFor="platform">
                    Platform
                  </label>
                  <select 
                    className="w-full appearance-none rounded-lg border border-primary/20 bg-background-dark/50 px-3 sm:px-4 py-2.5 sm:py-3 pr-8 sm:pr-10 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    id="platform"
                    name="platform"
                    value={selectedPlatform}
                    onChange={(e) => setSelectedPlatform(e.target.value)}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%231dc9c9' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em'
                    }}
                  >
                    {platforms.map((platform) => (
                      <option key={platform} value={platform}>
                        {platform}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Run Button */}
              <div>
                <button 
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark transition-all hover:scale-105 active:scale-95"
                  type="button"
                  onClick={handleRunRequest}
                >
                  Run Request
                </button>
              </div>

              {/* Response Section */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Response</h2>
                  {response && (
                    <button
                      className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg bg-primary/20 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-primary hover:bg-primary/30 transition-colors w-fit"
                      onClick={handleCopyResponse}
                    >
                      <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Response
                    </button>
                  )}
                </div>
                
                <div className="relative">
                  <textarea 
                    className="w-full rounded-lg border border-primary/20 bg-gray-900 p-3 sm:p-4 font-mono text-xs sm:text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                    placeholder="API response will appear here..."
                    readOnly
                    rows={10}
                    value={response}
                  />
                  
                  {!response && (
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="text-center">
                        <svg className="mx-auto h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="mt-2 text-xs sm:text-sm text-gray-400">Select options and click "Run Request" to see the response</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Code Examples Section */}
              <div className="mt-6 sm:mt-8 lg:mt-10 pt-6 sm:pt-8 border-t border-primary/20">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">Code Examples</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-gray-300 mb-2 text-sm sm:text-base">JavaScript</h4>
                    <div className="bg-gray-900 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto border border-gray-700">
                      <pre className="text-gray-200 font-mono whitespace-pre-wrap break-words">
                        <code>
{`fetch('https://api.trendaggregator.com/v1/trends', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}
                        </code>
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-300 mb-2 text-sm sm:text-base">Python</h4>
                    <div className="bg-gray-900 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto border border-gray-700">
                      <pre className="text-gray-200 font-mono whitespace-pre-wrap break-words">
                        <code>
{`import requests

response = requests.get(
  'https://api.trendaggregator.com/v1/trends',
  headers={'Authorization': 'Bearer YOUR_API_KEY'}
)
print(response.json())`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Examples;