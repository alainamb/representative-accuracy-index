import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures/HomepageFeatures.js';
import Heading from '@theme/Heading';
import styles from '..//css/modules/hero.module.css';
import LayoutTemplate from '../theme/LayoutTemplate.js';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="styles.hero__title">
          Representative Accuracy Index
        </Heading>
        <p className="styles.hero__subtitle">
          Measuring and improving the accuracy of political representation
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/calculator">
            Try the Calculator
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <LayoutTemplate
      title="Representative Accuracy Index"
      description="A tool for measuring and improving the accuracy of political representation">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </LayoutTemplate>
  );
}