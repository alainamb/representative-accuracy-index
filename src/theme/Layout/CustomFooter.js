import React from 'react';
import Link from '@docusaurus/Link';

export default function CustomFooter() {
  return (
    <footer className="bg-[#303846] text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <nav className="mb-4 space-x-4">
          <Link 
            to="https://github.com/alainamb/representative-accuracy-index"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </Link>
          <Link 
            to="/privacy"
            className="hover:underline"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms"
            className="hover:underline"
          >
            Terms of Service
          </Link>
        </nav>
        <p className="text-sm">
          © {new Date().getFullYear()} Alaina Brandt. Representative Accuracy Index. Built with Docusaurus.
        </p>
      </div>
    </footer>
  );
}