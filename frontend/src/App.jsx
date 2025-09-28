// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
// import Docs from './pages/Docs.jsx';
// import API from './pages/API.jsx';
// import Examples from './pages/Examples.jsx';
import Community from './pages/Community.jsx';
// import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/community" element={<Community />} />
          {/* <Route path="/docs" element={<Docs />} />
          <Route path="/api" element={<API />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;