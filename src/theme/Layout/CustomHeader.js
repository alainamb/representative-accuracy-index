import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { Github, Sun, Moon } from 'react-bootstrap-icons';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function CustomHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="custom-header">
      <div className="header-container">
        <div className="header-left">
          <button 
            onClick={toggleDarkMode} 
            className="mode-toggle"
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun /> : <Moon />}
          </button>
          <a 
            href="https://github.com/alainamb/representative-accuracy-index" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            <Github />
          </a>
        </div>
        <Link to="/" className="site-title">
          {siteConfig.title}
        </Link>
        <nav className="site-nav">
          <Link to="/calculator">Calculator</Link>
          <Link to="/about">About</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}