// src/components/Hero.jsx
import React, { useState } from 'react';

const Hero = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const codeExamples = {
    javascript: {
      code: `import TrendAggregator from '@mta/sdk';

const client = new TrendAggregator({
  apiKey: 'YOUR_API_KEY',
});

async function getSocialTrends() {
  const trends = await client.get({
    platforms: ['twitter', 'reddit'],
    limit: 10,
  });
  console.log(trends);
}

getSocialTrends();`,
      language: 'javascript'
    },
    python: {
      code: `from mta_sdk import TrendAggregator

client = TrendAggregator(api_key='YOUR_API_KEY')

async def get_social_trends():
    trends = await client.get(
        platforms=['twitter', 'reddit'],
        limit=10
    )
    print(trends)

get_social_trends()`,
      language: 'python'
    },
    curl: {
      code: `curl -X GET \\
  'https://api.trendaggregator.com/v1/trends?platforms=twitter,reddit&limit=10' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json'`,
      language: 'bash'
    }
  };

  return (
    <section className="relative py-12 sm:py-20 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6 lg:gap-8 text-center lg:text-left">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Unify trends. Amplify insights.
          </h1>
          <p className="max-w-xl text-base text-gray-300 sm:text-lg lg:text-xl">
            Aggregate real-time data from diverse platforms into a single, powerful API. Track trends, analyze data, and build innovative applications with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">
            <button className="flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-background-dark shadow-lg shadow-primary/30 transition-transform hover:scale-105 sm:px-6 sm:py-3 sm:text-base">
              Start Building for Free
            </button>
            <button className="flex items-center justify-center rounded-lg border border-primary/30 bg-primary/20 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/30 sm:px-6 sm:py-3 sm:text-base">
              Explore Documentation
            </button>
          </div>
        </div>
        
        {/* Right Content - Code Example */}
        <CodeExample 
          selectedLanguage={selectedLanguage} 
          setSelectedLanguage={setSelectedLanguage}
          codeExamples={codeExamples}
        />
      </div>
    </section>
  );
};

const CodeExample = ({ selectedLanguage, setSelectedLanguage, codeExamples }) => (
  <div className="relative h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] rounded-xl border border-primary/20 bg-background-dark/50 p-4 shadow-2xl shadow-primary/10">
    {/* Window Controls */}
    <div className="absolute inset-x-4 top-4 flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-red-400 sm:h-3 sm:w-3"></span>
      <span className="h-2 w-2 rounded-full bg-yellow-400 sm:h-3 sm:w-3"></span>
      <span className="h-2 w-2 rounded-full bg-green-400 sm:h-3 sm:w-3"></span>
    </div>
    
    {/* Language Selector */}
    <div className="absolute top-12 right-4 flex gap-2">
      {Object.keys(codeExamples).map((lang) => (
        <button
          key={lang}
          onClick={() => setSelectedLanguage(lang)}
          className={`px-3 py-1 text-xs rounded-full border transition-colors ${
            selectedLanguage === lang 
              ? 'bg-primary/20 border-primary text-primary' 
              : 'border-gray-600 text-gray-400 hover:border-gray-500'
          }`}
        >
          {lang === 'javascript' ? 'JS' : lang === 'python' ? 'Python' : 'cURL'}
        </button>
      ))}
    </div>
    
    {/* Code Display */}
    <div className="mt-12 h-full w-full overflow-auto rounded-lg bg-background-dark/50 p-4">
      <pre className="text-xs sm:text-sm text-gray-400 font-mono whitespace-pre-wrap">
        <code>
          {codeExamples[selectedLanguage].code.split('\n').map((line, index) => (
            <div key={index} className="flex">
              <span className="text-gray-500 select-none mr-4">{index + 1}</span>
              <span className="flex-1">
                {line.split(' ').map((word, wordIndex) => {
                  // Simple syntax highlighting
                  if (['import', 'from', 'async', 'function', 'def', 'await', 'const', 'new'].includes(word)) {
                    return <span key={wordIndex} className="text-purple-400">{word} </span>;
                  }
                  if (['TrendAggregator', 'client', 'getSocialTrends', 'get_social_trends'].includes(word)) {
                    return <span key={wordIndex} className="text-yellow-300">{word} </span>;
                  }
                  if (word.includes('@mta/sdk') || word.includes('mta_sdk') || word.includes('YOUR_API_KEY') || word.includes("'twitter'") || word.includes("'reddit'")) {
                    return <span key={wordIndex} className="text-green-400">{word} </span>;
                  }
                  if (word === '10') {
                    return <span key={wordIndex} className="text-orange-400">{word} </span>;
                  }
                  return <span key={wordIndex}>{word} </span>;
                })}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  </div>
);

export default Hero;