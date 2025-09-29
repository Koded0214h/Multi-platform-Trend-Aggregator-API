// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
// import Docs from './pages/Docs.jsx';
import Introduction from './pages/API.jsx';
import Endpoints from './pages/api/Endpoints.jsx';
import Authentication from './pages/api/Authentication.jsx';
import RateLimiting from './pages/api/Rate Limiting.jsx';
import Examples from './pages/api/Examples.jsx';
import Community from './pages/Community.jsx';
// import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/community" element={<Community />} />
          <Route path="/api" element={<Introduction />} />
          <Route path="/api/introduction" element={<Introduction />} />
          <Route path="/api/endpoints" element={<Endpoints />} />
          <Route path="/api/authentication" element={<Authentication />} />
          <Route path="/api/rate-limiting" element={<RateLimiting />} />
          <Route path="/api/examples" element={<Examples />} />
          {/* <Route path="/api/endpoints" element={<API />} /> */}
          {/* <Route path="/docs" element={<Docs />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;