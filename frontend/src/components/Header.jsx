import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background-light/80 dark:bg-background-dark/80 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to='/' className="flex items-center gap-2" href="#">
          <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
          </svg>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">Multi-platform Trend Aggregator</h1>
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to='/docs' className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">Docs</Link>
          <Link to='/api' className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">API</Link>
          <Link to='/examples' className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">Examples</Link>
          <Link to='/pricing' className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">Pricing</Link>
          <Link to='/community' className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">Community</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to='/get-started'>
          <button className="rounded bg-primary px-4 py-2 text-sm font-bold text-background-dark shadow-lg shadow-primary/20 transition-transform hover:scale-105">
            Get Started
          </button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <nav className="flex flex-col space-y-4">
            <Link to='/docs' className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors px-4 py-2">Docs</Link>
            <Link to='/api' className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors px-4 py-2">API</Link>
            <Link to='/examples' className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors px-4 py-2">Examples</Link>
            <Link to='/pricing' className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors px-4 py-2">Pricing</Link>
            <Link to='/community' className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors px-4 py-2">Community</Link>
            <div className="flex flex-col space-y-2 px-4">
              <Link to='/get-started'>
              <button className="rounded bg-primary px-4 py-2 text-sm font-bold text-background-dark shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                Get Started
              </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;