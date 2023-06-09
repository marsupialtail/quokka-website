import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SignupForm from '../components/HomepageFeatures/signup';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className="row" style={{ backgroundColor: '#EAF6FF', padding: '40px', borderRadius: '10px' }}>
        <h1 className="pt-0 subpixel-antialiased mx-auto font-display sm:text-7xl text-5xl font-[Inter,sans-serif] 
            font-semibold tracking-tight text-slate-900" style={{ lineHeight: '1.2', marginLeft: '20px' }}>
            The Professional<br />
            <span className="" style={{ color: 'var(--ifm-color-primary-dark)', fontSize: '28px' }}>
            Crypto/Stocks/Options/Futures
            </span>  Trading Engine for Every Pepe
        </h1>
        <div className="signup_container" style={{ marginTop: '40px' }}>
            <div className="row">
            <h1 className="title" style={{ fontSize: '28px', marginBottom: '20px' }}>Join the Waitlist</h1>
            <div className="form_container">
                <SignupForm />
            </div>
            </div>
        </div>
        </div>

    );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
