import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../../css/modules/features.module.css';

const FeatureList = [
  {
    title: 'Measure Representation',
    description: (
      <>
        Use our calculator to assess how accurately your representatives reflect
        your district's demographics and political views.
      </>
    ),
  },
  {
    title: 'Access Resources',
    description: (
      <>
        Find comprehensive guides, research papers, and tools to understand
        political representation and its impact on democracy.
      </>
    ),
  },
  {
    title: 'Take Action',
    description: (
      <>
        Learn about concrete steps you can take to improve representation
        in your district and make your voice heard.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}