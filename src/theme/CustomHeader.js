import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { GitHubLogoIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../css/modules/header.module.css';

export default function CustomHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerControls}>
          <button 
            onClick={toggleDarkMode}
            className={styles.iconButton}
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun /> : <Moon />}
          </button>
          <a 
            href="https://github.com/alainamb/representative-accuracy-index"
            className={styles.iconButton}
          >
            <Github />
          </a>
        </div>
        <Link to="/" className={styles.siteTitle}>
          {siteConfig.title}
        </Link>
        <nav className={styles.nav}>
          <Link to="/calculator">Calculator</Link>
          <Link to="/about">About</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}