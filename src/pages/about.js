import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './about.module.css';

export default function About() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="About"
      description="About the Representative Accuracy Index">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--10 col--offset-1">
            {/* Hero Section */}
            <div className="margin-bottom--xl">
              <h1 className="hero__title">About the Representative Accuracy Index</h1>
              <p className="hero__subtitle">
                A data-driven framework measuring demographic representativeness of decision-making bodies relative to the populations they serve.
              </p>
            </div>

            {/* Research Insights */}
            <div className="row margin-bottom--lg">
              <div className="col col--6">
                <div className="card">
                  <div className="card__header">
                    <h2>Research Insights</h2>
                  </div>
                  <div className="card__body">
                    <p>Studies have shown that homogeneous decision-making groups tend to:</p>
                    <ul>
                      <li>Be less accurate in their recollection and application of facts</li>
                      <li>Experience more groupthink that reinforces confidence in inaccurate decisions</li>
                      <li>Be less innovative and consider fewer alternative solutions</li>
                      <li>Show higher confidence in incorrect answers compared to diverse groups</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col col--6">
                <div className="card">
                  <div className="card__header">
                    <h2>Our Methodology</h2>
                  </div>
                  <div className="card__body">
                    <p>The index calculates representative accuracy through:</p>
                    <ol>
                      <li>Gathering demographic data for decision-making bodies and impacted populations</li>
                      <li>Calculating representation gaps across key demographic dimensions</li>
                      <li>Generating accuracy scores where 100% represents perfect alignment</li>
                      <li>Tracking changes in representative accuracy over time</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Implementation */}
            <div className="card margin-bottom--lg">
              <div className="card__header">
                <h2>Current Implementation</h2>
              </div>
              <div className="card__body">
                <p>Our initial implementation focuses on binary sex representation, with planned expansions to include:</p>
                <div className="row">
                  <div className="col col--4">
                    <div className="card padding--md">
                      <h3>Gender Spectrum</h3>
                      <p>Including non-binary and transgender populations</p>
                    </div>
                  </div>
                  <div className="col col--4">
                    <div className="card padding--md">
                      <h3>Demographics</h3>
                      <p>Race, ethnicity, disability status, and age</p>
                    </div>
                  </div>
                  <div className="col col--4">
                    <div className="card padding--md">
                      <h3>Analysis</h3>
                      <p>Intersectional factors and additional metrics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Involved */}
            <div className="card">
              <div className="card__header">
                <h2>Get Involved</h2>
              </div>
              <div className="card__body">
                <p>We welcome contributions to expand the index's capabilities and improve its methodology.</p>
                <div className="row">
                  <div className="col col--6">
                    <div className="card padding--md">
                      <h3>Technical Contributions</h3>
                      <ul>
                        <li>Adding support for additional demographic dimensions</li>
                        <li>Improving statistical methodologies</li>
                        <li>Contributing population datasets</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col col--6">
                    <div className="card padding--md">
                      <h3>Documentation & Analysis</h3>
                      <ul>
                        <li>Creating analysis notebooks</li>
                        <li>Enhancing documentation</li>
                        <li>Providing example implementations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}