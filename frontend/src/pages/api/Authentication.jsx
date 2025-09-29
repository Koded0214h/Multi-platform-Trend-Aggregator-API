// src/pages/api/Authentication.jsx
import React from 'react';
import ApiSidebar from '../../components/api/ApiSidebar.jsx';
import ApiHeader from '../../components/api/ApiHeader.jsx';

const Authentication = () => {
  return (
    <div className="dark min-h-screen bg-background-dark font-display text-gray-200">
      <div className="flex min-h-screen">
        <ApiSidebar />
        <main className="flex-1 p-6 sm:p-8 md:p-12 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <ApiHeader 
              title="Authentication" 
              description="To access the Multi-platform Trend Aggregator API, you need to authenticate your requests. We support API key authentication, which allows you to securely access the API using a unique key associated with your account."
            />
            
            <div className="prose prose-invert max-w-none text-gray-300">
              {/* API Key Authentication Section */}
              <section className="mb-8 sm:mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 sm:mb-6 sm:text-3xl">API Key Authentication</h2>
                <p className="text-base sm:text-lg mb-4">
                  API key authentication is the primary method for accessing the Multi-platform Trend Aggregator API. Each user is assigned a unique API key, which must be included in the headers of every request. This key identifies your application and grants access to the API's resources.
                </p>
              </section>

              {/* Obtaining an API Key Section */}
              <section className="mb-8 sm:mb-12">
                <h3 className="text-xl font-bold text-white mb-4 sm:mb-6 sm:text-2xl">Obtaining an API Key</h3>
                <p className="text-base sm:text-lg mb-4">
                  To obtain an API key, you must first create an account on the Multi-platform Trend Aggregator platform. Once your account is set up, you can generate an API key from your account dashboard. This key is unique to your account and should be kept confidential.
                </p>
              </section>

              {/* Using the API Key Section */}
              <section className="mb-8 sm:mb-12">
                <h3 className="text-xl font-bold text-white mb-4 sm:mb-6 sm:text-2xl">Using the API Key</h3>
                <p className="text-base sm:text-lg mb-4">
                  To use your API key, include it in the <code className="bg-background-dark/50 text-primary rounded px-2 py-1 text-sm font-mono">Authorization</code> header of your HTTP requests. The header should follow the format: <code className="bg-background-dark/50 text-primary rounded px-2 py-1 text-sm font-mono">Authorization: Bearer YOUR_API_KEY</code>, where <code className="bg-background-dark/50 text-primary rounded px-2 py-1 text-sm font-mono">YOUR_API_KEY</code> is your actual API key.
                </p>
              </section>

              {/* Example Request Section */}
              <section className="mb-8 sm:mb-12">
                <h3 className="text-xl font-bold text-white mb-4 sm:mb-6 sm:text-2xl">Example Request (Python)</h3>
                <p className="text-base sm:text-lg mb-4">
                  Here's an example of how to include the API key in a request using Python's 'requests' library:
                </p>
                <div className="bg-background-dark/50 rounded-lg p-4 sm:p-6 my-4 border border-primary/20">
                  <pre className="text-sm text-white overflow-x-auto">
                    <code className="language-python">
{`import requests

api_key = 'YOUR_API_KEY'
url = 'https://api.trendaggregator.com/v1/trends'
headers = {
    'Authorization': f'Bearer {api_key}'
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print(response.json())
else:
    print(f'Error: {response.status_code}')`}
                    </code>
                  </pre>
                </div>
              </section>

              {/* Additional Examples */}
              <section className="mb-8 sm:mb-12">
                <h3 className="text-xl font-bold text-white mb-4 sm:mb-6 sm:text-2xl">Example Request (JavaScript)</h3>
                <div className="bg-background-dark/50 rounded-lg p-4 sm:p-6 my-4 border border-primary/20">
                  <pre className="text-sm text-white overflow-x-auto">
                    <code className="language-javascript">
{`const apiKey = 'YOUR_API_KEY';
const url = 'https://api.trendaggregator.com/v1/trends';

fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
                    </code>
                  </pre>
                </div>
              </section>

              {/* Security Considerations Section */}
              <section className="mb-8 sm:mb-12">
                <h3 className="text-xl font-bold text-white mb-4 sm:mb-6 sm:text-2xl">Security Considerations</h3>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg">
                    Keep your API key secure and do not expose it in client-side code or public repositories. If you suspect your API key has been compromised, regenerate it immediately from your account dashboard.
                  </p>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-400 mb-2">Important Security Tips:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-yellow-300">
                      <li>Never commit API keys to version control systems</li>
                      <li>Use environment variables to store API keys</li>
                      <li>Implement server-side proxying for client applications</li>
                      <li>Regularly rotate your API keys</li>
                      <li>Use the principle of least privilege when setting permissions</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Best Practices */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4 sm:mb-6 sm:text-2xl">Best Practices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="p-4 rounded-lg bg-background-dark/50 border border-primary/20">
                    <h4 className="font-bold text-white mb-2">Environment Variables</h4>
                    <p className="text-sm text-gray-300">
                      Store your API keys in environment variables to keep them secure and make your code more portable.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background-dark/50 border border-primary/20">
                    <h4 className="font-bold text-white mb-2">Rate Limiting</h4>
                    <p className="text-sm text-gray-300">
                      Be mindful of API rate limits and implement proper error handling for rate limit responses.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background-dark/50 border border-primary/20">
                    <h4 className="font-bold text-white mb-2">Error Handling</h4>
                    <p className="text-sm text-gray-300">
                      Implement robust error handling for authentication failures and other API errors.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background-dark/50 border border-primary/20">
                    <h4 className="font-bold text-white mb-2">Monitoring</h4>
                    <p className="text-sm text-gray-300">
                      Monitor your API usage and set up alerts for unusual activity or authentication failures.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Authentication;