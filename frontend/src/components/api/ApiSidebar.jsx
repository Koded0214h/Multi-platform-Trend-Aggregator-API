// src/components/api/ApiSidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faKey, 
  faList, 
  faClock,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ApiSidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { 
      icon: faHome, 
      label: 'Introduction', 
      path: '/api/introduction'
    },
    { 
      icon: faKey, 
      label: 'Authentication', 
      path: '/api/authentication'
    },
    { 
      icon: faList, 
      label: 'Endpoints', 
      path: '/api/endpoints'
    },
    { 
      icon: faClock, 
      label: 'Rate Limiting', 
      path: '/api/rate-limiting'
    },
    { 
      icon: faCode, 
      label: 'Examples', 
      path: '/api/examples'
    }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-80 flex-shrink-0 bg-background-dark/50 p-6 flex flex-col justify-between border-r border-primary/20">
      <div>
        <Link to="/" className="flex items-center gap-2 mb-8">
          <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
          </svg>
          <h1 className="text-xl font-bold text-white">Multi-platform Trend Aggregator</h1>
        </Link>
        
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-primary/20 text-primary'
                  : 'text-gray-400 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <FontAwesomeIcon 
                icon={item.icon} 
                className={`w-4 h-4 ${isActive(item.path) ? 'text-primary' : 'text-gray-400'}`}
              />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="flex flex-col gap-2">
        <a 
          href="https://github.com/Koded0214h/Multi-platform-Trend-Aggregator-API" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-primary/10 hover:text-primary transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
          <span className="text-sm font-medium">GitHub</span>
        </a>
      </div>
    </aside>
  );
};

export default ApiSidebar;