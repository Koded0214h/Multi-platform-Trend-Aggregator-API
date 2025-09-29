// src/components/api/CodeExample.jsx (With syntax highlighting ready)
import React from 'react';

const CodeExample = ({ code, language = 'json' }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto border border-gray-700">
      <pre className="text-gray-200 font-mono">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeExample;