// src/components/api/CodeExample.jsx
import React from 'react';

const CodeExample = ({ code, language = 'json' }) => {
  return (
    <div className="bg-gray-900 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto border border-gray-700">
      <pre className="text-gray-200 font-mono whitespace-pre-wrap break-words">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeExample;