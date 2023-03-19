import React from 'react';
import styles from './css/Projetos.module.css';

function Projetos() {
  return (
    <section>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2>Meus projetos</h2>
      </div>
      <div className={styles.projetos}>
        <div className={styles.trivia}>
          <a
            href='https://jogo-trivia-eosin.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img src='../images/trivia.png' alt='' />
            <h3 style={{ textAlign: 'center' }}>Tecnologias</h3>
          </a>
          <div styles={styles.techs}>
            <img
              src='https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white'
              alt='redux'
            />
            <img
              src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
              alt='react'
            />
            <img
              src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'
              alt='react router'
            />
            <img
              src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'
              alt='css3'
            />
            <img
              src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'
              alt='html5'
            />
          </div>
        </div>
        <div className={styles.trybewallet}>
          <a
            href='https://jogo-trivia-eosin.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img src='../images/trybewallet.png' alt='' />
            <h3 style={{ textAlign: 'center' }}>Tecnologias</h3>
          </a>
          <div styles={styles.techs}>
            <img
              src='https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white'
              alt='redux'
            />
            <img
              src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
              alt='react'
            />
            <img
              src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'
              alt='react router'
            />
            <img
              src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'
              alt='css3'
            />
            <img
              src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'
              alt='html5'
            />
          </div>
        </div>
        <div className={styles.receitas}>
          <a
            href='https://jogo-trivia-eosin.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img src='../images/receitas.png' alt='' />
            <h3 style={{ textAlign: 'center' }}>Tecnologias</h3>
          </a>
          <div styles={styles.techs}>
            <img
              src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
              alt='react'
            />
            <img
              src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'
              alt='react router'
            />
            <img
              src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'
              alt='css3'
            />
            <img
              src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'
              alt='html5'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
