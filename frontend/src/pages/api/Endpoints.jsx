import React from 'react';
import ApiSidebar from '../../components/api/ApiSidebar.jsx';
import ApiHeader from '../../components/api/ApiHeader.jsx';
import EndpointSection from '../../components/api/EndpointSection.jsx';

const Endpoints = () => {
  const endpoints = [
    {
      title: "Trending Topics",
      description: "Retrieve the current trending topics across multiple platforms.",
      method: "GET",
      endpoint: "/api/v1/trends/topics",
      parameters: [],
      exampleResponse: `{
  "data": [
    {
      "topic": "#AIForGood",
      "platform": "Twitter",
      "volume": "1.2M"
    },
    {
      "topic": "Sustainable Tech",
      "platform": "Google",
      "volume": "850k"
    }
  ]
}`
    },
    {
      title: "Search Trends",
      description: "Search for trends related to a specific keyword.",
      method: "GET",
      endpoint: "/api/v1/trends/search",
      parameters: [
        {
          name: "q",
          type: "string",
          required: true,
          description: "The keyword to search for."
        },
        {
          name: "platform",
          type: "string",
          required: false,
          description: "Filter by platform (e.g., 'twitter', 'google')."
        }
      ],
      exampleResponse: `{
  "data": [
    {
      "topic": "Serverless Architecture",
      "platform": "Google",
      "relevance": "95%"
    },
    {
      "topic": "#Serverless",
      "platform": "Twitter",
      "relevance": "89%"
    }
  ]
}`
    }
  ];

  return (
    <div className="dark min-h-screen bg-background-dark font-display text-gray-200">
      <div className="flex">
        <ApiSidebar />
        <main className="flex-1 lg:ml-0 min-h-screen p-4 sm:p-6 lg:p-8 xl:p-10 overflow-auto">
          <div className="max-w-4xl mx-auto w-full">
            <ApiHeader 
              title="Endpoints" 
              description="Explore all available API endpoints for the Multi-platform Trend Aggregator."
            />
            
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {endpoints.map((endpoint, index) => (
                <EndpointSection key={index} {...endpoint} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Endpoints;