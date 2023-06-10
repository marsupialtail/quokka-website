import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SignupForm from '../components/HomepageFeatures/signup';

import styles from './index.module.css';

const ScrollThroughValues: React.FC<{ values: string[] }> = ({ values }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
      }, 2000);
  
      return () => {
        clearInterval(timer);
      };
    }, [values]);
  
    return (
      <span className="" style={{ color: 'var(--ifm-color-primary-dark)', fontSize: '48px' }}>
      {values[currentIndex]}
      </span>  
    );
  };

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div
      className="row"
      style={{
        backgroundColor: '#EAF6FF',
        padding: '40px',
        borderRadius: '10px',
        display: 'flex',
      }}
    >
      
      <div className = "column">
      <h1
        className="pt-0 subpixel-antialiased mx-auto font-display sm:text-12xl text-9xl font-[Inter,sans-serif] font-semibold tracking-tight text-slate-900"
        style={{ lineHeight: '1.5',  marginLeft: '20px', flex: '1', fontSize: '48px' }}
      >
        The Professional<br />
        <ScrollThroughValues
          values={['Futures', 'Stocks', 'Crypto', 'Options']}
        />{' '}
        Trading Platform<br />
        for Every Pepe
      </h1>
      <div className="signup_container" style={{ lineHeight: '1.2',  marginLeft: '20px', flex: '1', fontSize: '40px' }}>
        <div className="row">
          <div style={{ fontSize: '28px', marginBottom: '20px', marginTop: '20px' }}>
            Join the Waitlist<br />
            <SignupForm />
          </div>
        </div>
      </div>
      </div>

      <div style={{ textAlign: 'right', marginLeft: 'auto', marginRight: '0' }}>
        <img
          src={require('@site/static/img/mockup.png').default}
          width="1000"
          height="670"
          alt="JPEG Image"
        />
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
