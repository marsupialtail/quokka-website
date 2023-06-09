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
      <div className="row">
        <h1 className="pt-0 subpixel-antialiased mx-auto font-display sm:text-6xl text-4xl font-[Inter,sans-serif] 
        font-semibold tracking-tight text-slate-900" style={{ lineHeight: '1.1' }}>
          The Open Source<br></br>
          <span className="" style={{ color: 'var(--ifm-color-primary-dark)' }}>
            Security Lake Platform
          </span> for AWS
        </h1>
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
      <div className="signup_container">
        <div className="row">
            <h1 className="title">Join the Waitlist. </h1>
            <div className="form_container">
            <SignupForm />
      </div>
      </div>
      
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
