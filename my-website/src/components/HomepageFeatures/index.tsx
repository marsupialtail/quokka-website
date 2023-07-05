import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: JSX.Element;
  description: JSX.Element;
};

type ChartItem = {
  title: string;
  Svg: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Free to Explore',
    Svg: (
        <div style={{textAlign: 'center'}}>
          <img src= {require('@site/static/img/pepe_astronaut_rounded.png').default} width="300" height="300" alt="JPEG Image" />
        </div>
      ), 
    description: (
      <ul>
        <li><b>Unlimited</b> indicators and charts, for free.</li>
        <li>Build strategies, backtest on <b>unlimited</b> bars, optimize parameters, for free.</li>
        <li>Detect complex patterns in seconds <u>with PhD research</u>, no scripting required.</li>
        <li>Second-level resolution for $15 a month.</li>
      </ul>
    ),
  },
  {
    title: 'Deploy with One Click',
    Svg: (
        <div style={{textAlign: 'center'}}>
          <img src= {require('@site/static/img/pepe_trader_rounded.jpeg').default} width="300" height="300" alt="JPEG Image" />
        </div>
      ), 
    description: (
      <ul>
        <li> Deploy profitable strategies with one click to Interactive Brokers, Coinbase or even Uniswap! </li>
        <li> Flexible pricing scheme -- fixed cost per strategy or free until profits </li>
      </ul>
    ),
  },
  {
    title: 'Built by PhDs and Professionals',
    Svg: (
        <div style={{textAlign: 'center'}}>
          <img src={require('@site/static/img/pepe_phd_rounded.png').default} width="300" height="300" alt="JPEG Image"/>
        </div>
      ), 
    description: (
     <ul>
        <li> Built with love by Stanford and NUST PhD students and experienced traders. </li>
        <li> Tools used by professional trading firms. </li>
        <li>Read <a href="">why</a> we are making Rottnest.</li>
      </ul>
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

const ChartList: ChartItem[] = [
  {
    title: 'Why pay $50 a month for a shovel when you can get a sledgehammer for $15?',
    Svg: (
        <div>
          <img src= {require('@site/static/img/comparison-table.png').default} alt="JPEG Image" />
        </div>
      )
  },
];

function Chart({title, Svg}: ChartItem) {
  return (
    // <div className={clsx('row justify-content-center')}>
    <div>
      <h3 style={{textAlign: 'center', padding: "100px"}} >{title}</h3>
      <p  style={{textAlign: 'center', paddingLeft: "50px"}}>{Svg}</p>
   </div>
  );``
}


export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="gradient">
      <div className="row"
      style={{
        paddingTop: "100px",
        backgroundImage: 'url(data:image/png;base64,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)',
      }}>

      {/* Pepe Bill */}
      <div style={{ transform: "translate(-200px, -100px) rotate(-10deg)" }}>      
        <img src= {require('@site/static/img/pepe-bill.png').default} width="493" height="208" alt="JPEG Image"/>
      </div>
   
   <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>

      {/* Pepe Bill */}
      <div style={{ transform: "translate(1100px, 200px) rotate(15deg)" }}>      
        <img src= {require('@site/static/img/pepe-bill.png').default} width="493" height="208" alt="JPEG Image"/>
      </div>

          <div className="row" style={{textAlign: 'center'}}>
            {ChartList.map((props, idx) => (
                <Chart key={idx} {...props} />
              ))}
          </div>

      {/* Pepe Bill */}
      <div style={{ transform: "translate(-300px, 200px) rotate(24deg)" }}>      
        <img src= {require('@site/static/img/pepe-bill.png').default} width="493" height="208" alt="JPEG Image"/>
      </div>

            {/* Pepe Bill */}
            <div style={{ transform: "translate(-500px,-400px) rotate(-87deg)" }}>      
        <img src= {require('@site/static/img/pepe-bill.png').default} width="493" height="208" alt="JPEG Image"/>
      </div>

            {/* Pepe Bill */}
            <div style={{ transform: "translate(1000px,-500px) rotate(-39deg)" }}>      
        <img src= {require('@site/static/img/pepe-bill.png').default} width="493" height="208" alt="JPEG Image"/>
      </div>

        </div>
    </section>
    </div>
    </section>
  );
}
