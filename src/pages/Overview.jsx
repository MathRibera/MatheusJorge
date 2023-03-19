import React from 'react';
import styles from './css/Overview.module.css';
function Overview() {
  return (
    <section className={styles.skills}>
      <div className={styles.habilidades}>
        <div>
          <h3>Skills Overview</h3>
        </div>
        <h3>Aqui está alguns dos meus conhecimentos</h3>
      </div>
      <div className={styles.container}>
        <div className={styles['container-habilidades']}>
          <div className={styles.frontend}>
            <img src='../images/html.png' width='100px' alt='frontend' />
            <div>
              <ul style={ { listStyle: 'none' }}>
                <h4>FrontEnd</h4>
                <li>React/Redux/Context API</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Html</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
          <div className={styles.backend}>
            <img src='../images/backend.png' width='100px' alt='backend' />
            <div>
              <ul style={ { listStyle: 'none' }}>
                <h4>BackEnd</h4>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
