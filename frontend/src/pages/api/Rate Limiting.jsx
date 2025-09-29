// src/pages/api/RateLimiting.jsx
import React from 'react';
import ApiSidebar from '../../components/api/ApiSidebar.jsx';
import ApiHeader from '../../components/api/ApiHeader.jsx';

const RateLimiting = () => {
  const rateLimits = [
    { limit: "Requests per minute", value: "100" },
    { limit: "Requests per hour", value: "500" },
    { limit: "Requests per day", value: "2000" }
  ];

  const rateLimitHeaders = [
    { 
      header: "X-RateLimit-Limit", 
      description: "The maximum number of requests allowed within the current time window." 
    },
    { 
      header: "X-RateLimit-Remaining", 
      description: "The number of requests remaining in the current time window." 
    },
    { 
      header: "X-RateLimit-Reset", 
      description: "The timestamp (in seconds since epoch) when the rate limit will reset." 
    }
  ];

  const bestPractices = [
    "Implement proper error handling to gracefully handle 429 errors.",
    "Use the X-RateLimit-* headers to monitor your usage and avoid exceeding limits.",
    "Consider implementing a retry mechanism with exponential backoff to handle temporary rate limit errors."
  ];

  return (
    <div className="dark min-h-screen bg-background-dark font-display text-gray-200">
      <div className="flex min-h-screen">
        <ApiSidebar />
        <main className="flex-1 p-6 sm:p-10 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <ApiHeader 
              title="Rate Limiting" 
              description="To ensure fair usage and prevent abuse, the Multi-platform Trend Aggregator API enforces rate limits. These limits restrict the number of requests a user or application can make within a specific time frame. Exceeding these limits will result in temporary suspension of access to the API."
            />
            
            <div className="space-y-8 sm:space-y-10">
              {/* Understanding Rate Limits Section */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 sm:mb-6 sm:text-3xl">Understanding Rate Limits</h2>
                <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                  Rate limits are calculated on a per-user or per-application basis. Each user or application has a specific quota of requests they can make within a given time window. The API uses a sliding window algorithm to track and enforce these limits.
                </p>
              </section>

              {/* Current Rate Limits Section */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 sm:mb-6 sm:text-3xl">Current Rate Limits</h2>
                <div className="border border-primary/20 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 p-4 border-b border-primary/20 bg-background-dark/50">
                    <p className="text-gray-300 font-medium col-span-1">Limit</p>
                    <p className="text-white font-medium col-span-2">Value</p>
                  </div>
                  {rateLimits.map((item, index) => (
                    <div 
                      key={index}
                      className={`grid grid-cols-3 gap-4 sm:gap-6 p-4 ${
                        index < rateLimits.length - 1 ? 'border-b border-primary/20' : ''
                      }`}
                    >
                      <p className="text-gray-300 col-span-1">{item.limit}</p>
                      <p className="text-white col-span-2 font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Handling Rate Limit Errors Section */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 sm:mb-6 sm:text-3xl">Handling Rate Limit Errors</h2>
                <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                  When a rate limit is exceeded, the API will return an HTTP <code className="bg-background-dark/50 px-2 py-1 rounded text-primary font-mono text-sm">429 Too Many Requests</code> error. The response will include the following headers:
                </p>
                <div className="border border-primary/20 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 p-4 border-b border-primary/20 bg-background-dark/50">
                    <p className="text-gray-300 font-medium col-span-1">Header</p>
                    <p className="text-white font-medium col-span-2">Description</p>
                  </div>
                  {rateLimitHeaders.map((item, index) => (
                    <div 
                      key={index}
                      className={`grid grid-cols-3 gap-4 sm:gap-6 p-4 ${
                        index < rateLimitHeaders.length - 1 ? 'border-b border-primary/20' : ''
                      }`}
                    >
                      <p className="text-gray-300 col-span-1 font-mono text-sm">{item.header}</p>
                      <p className="text-white col-span-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Example Response Section */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4 sm:mb-6 sm:text-2xl">Example Rate Limit Response</h3>
                <div className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto border border-gray-700">
                  <pre className="text-gray-200 font-mono">
                    <code>
{`HTTP/1.1 429 Too Many Requests
Content-Type: application/json
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1704067200

{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Please try again in 60 seconds.",
    "retry_after": 60
  }
}`}
                    </code>
                  </pre>
                </div>
              </section>

              {/* Best Practices Section */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 sm:mb-6 sm:text-3xl">Best Practices</h2>
                <div className="space-y-4">
                  {bestPractices.map((practice, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded border border-primary/50 bg-primary/20 flex items-center justify-center">
                          <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                        {practice.includes("X-RateLimit") ? (
                          <>
                            Use the <code className="bg-background-dark/50 px-1 py-0.5 rounded text-primary font-mono text-sm">X-RateLimit-*</code> headers to monitor your usage and avoid exceeding limits.
                          </>
                        ) : (
                          practice
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Code Example Section */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4 sm:mb-6 sm:text-2xl">Example: Handling Rate Limits in JavaScript</h3>
                <div className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto border border-gray-700">
                  <pre className="text-gray-200 font-mono">
                    <code>
{`async function makeRequestWithRetry(url, options = {}, retries = 3) {
  try {
    const response = await fetch(url, options);
    
    if (response.status === 429) {
      const retryAfter = response.headers.get('Retry-After') || 60;
      const resetTime = response.headers.get('X-RateLimit-Reset');
      
      console.log(\`Rate limited. Retrying after \${retryAfter} seconds\`);
      
      if (retries > 0) {
        await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
        return makeRequestWithRetry(url, options, retries - 1);
      }
    }
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
}

// Usage
const apiKey = 'YOUR_API_KEY';
const url = 'https://api.trendaggregator.com/v1/trends';

makeRequestWithRetry(url, {
  headers: {
    'Authorization': \`Bearer \${apiKey}\`
  }
})
.then(data => console.log(data))
.catch(error => console.error('Final error:', error));`}
                    </code>
                  </pre>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RateLimiting;