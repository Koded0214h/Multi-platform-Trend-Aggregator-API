// src/components/api/ApiSidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faKey, 
  faList, 
  faClock,
  faCode,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ApiSidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-primary text-white shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="w-5 h-5" />
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-80 lg:w-64 xl:w-80
        bg-background-dark lg:bg-background-dark/50
        p-4 lg:p-6 
        border-r border-primary/20
        flex flex-col justify-between
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div>
          {/* Header */}
          <div className="flex items-center justify-between lg:block mb-6 lg:mb-8">
            <Link 
              to="/" 
              className="flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
              </svg>
              <h1 className="text-lg lg:text-xl font-bold text-white">Multi-platform Trend Aggregator</h1>
            </Link>
            
            {/* Close button for mobile */}
            <button
              className="lg:hidden p-1 text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-col gap-1 lg:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 lg:py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary/20 text-primary'
                    : 'text-gray-400 hover:bg-primary/10 hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon 
                  icon={item.icon} 
                  className="w-4 h-4 flex-shrink-0"
                />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
        
        {/* GitHub Link */}
        <div className="flex flex-col gap-2 mt-6 lg:mt-0">
          <a 
            href="https://github.com/Koded0214h/Multi-platform-Trend-Aggregator-API" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faGithub} className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default ApiSidebar;