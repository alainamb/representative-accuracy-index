import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from '../css/main.css';
import LayoutTemplate from '../theme/LayoutTemplate.js';

const RESOURCES = [
  {
    id: 1,
    title: "Why Diverse Teams Are Smarter",
    author: "David Rock and Heidi Grant",
    publication: "Harvard Business Review",
    year: 2016,
    type: "Academic",
    url: "https://hbr.org/2016/11/why-diverse-teams-are-smarter"
  },
  {
    id: 2,
    title: "The Trouble with Homogenous Teams",
    author: "Evan Apfelbaum",
    publication: "MIT Sloan Management Review",
    year: 2017,
    type: "Academic",
    url: "https://sloanreview.mit.edu/article/the-trouble-with-homogeneous-teams/"
  },
  {
    id: 3,
    title: "Projected Age Groups and Sex Composition",
    author: "U.S. Census Bureau",
    publication: "Population Division",
    year: 2017,
    type: "Government",
    url: "https://www.census.gov/data/tables/2017/demo/popproj/2017-summary-tables.html"
  },
  {
    id: 4,
    title: "Nonbinary LGBTQ Adults in the United States",
    author: "Bianca D.M. Wilson and Ilan H. Meyer",
    publication: "The Williams Institute, UCLA School of Law",
    year: 2021,
    type: "Academic",
    url: "https://williamsinstitute.law.ucla.edu/publications/nonbinary-lgbtq-adults-us/"
  }
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredResources = RESOURCES.filter(resource => 
    (selectedType === 'All' || resource.type === selectedType) &&
    (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     resource.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
     resource.publication.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <LayoutTemplate title="Resources">
      <div className="container margin-vert--lg">
        <h1>Research Resources</h1>
        
        <div className="margin-bottom--lg">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="margin-bottom--lg">
          <button 
            className={`button ${selectedType === 'All' ? 'button--primary' : 'button--outline'}`}
            onClick={() => setSelectedType('All')}
          >
            All
          </button>
          {['Academic', 'Government', 'Data'].map(type => (
            <button
              key={type}
              className={`button margin-left--sm ${selectedType === type ? 'button--primary' : 'button--outline'}`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div>
          {filteredResources.map(resource => (
            <div key={resource.id} className="card margin-bottom--md">
              <div className="card__header">
                <h3>{resource.title}</h3>
              </div>
              <div className="card__body">
                <p>
                  <strong>Author:</strong> {resource.author}<br />
                  <strong>Publication:</strong> {resource.publication}, {resource.year}<br />
                  <strong>Type:</strong> {resource.type}
                </p>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button button--secondary button--sm"
                >
                  View Resource
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutTemplate>
  );
}