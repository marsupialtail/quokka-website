import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: JSX.Element;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Free to Explore',
    Svg: (
        <div style={{textAlign: 'center'}}>
          <img src= {require('@site/static/img/pepe_astronaut.jpeg').default} width="300" height="300" alt="JPEG Image" />
        </div>
      ), 
    description: (
      <ul>
        <li> Limitless indicators for free. </li>
        <li> Optimize and backtest strategies for free. </li>
        <li> Second-level resolution for free. </li>
      </ul>
    ),
  },
  {
    title: 'Deploy with One Click',
    Svg: (
        <div style={{textAlign: 'center'}}>
          <img src= {require('@site/static/img/pepe_trader.jpeg').default} width="300" height="300" alt="JPEG Image" />
        </div>
      ), 
    description: (
        <ul>
        <li> Deploy profitable strategies in real time. </li>
        <li> Only $10/month for each strategy. </li>
        <li> Second-level resolution for free. </li>
      </ul>
    ),
  },
  {
    title: 'Powered by Open Source',
    Svg: (
        <div>
          <img src="/path/to/your/image.jpg" alt="JPEG Image" />
        </div>
      ), 
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <p>{Svg}</p>
      <div className="padding-horiz--md" style={{textAlign: 'left'}}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
