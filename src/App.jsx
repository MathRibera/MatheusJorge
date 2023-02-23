import styles from './App.module.css';
function App() {
  return (
    <div className={styles.background}>
      <div className={styles.imageProfile}>
        <img src='/maxresdefault.jpg' alt='perfil' width='200px' height='200px' />
      </div>
      <div className={styles.nome}>
        <h1>Matheus Jorge</h1>
        <h4>Web Development Student</h4>
      </div>
      <div>
        <div className={styles.container}>
          <a
            href='https://www.linkedin.com/in/matheus-jorge-0366631a4/'
            target='_blank'
          >
            <img width='40px' src='/linkedin.png' alt='' />
            <span>Linkedin</span>
          </a>
        </div>
        <div className={styles.container}>
          <a href='https://github.com/MathRibera' target='_blank'>
            <img width='40px' src='/github.png' alt='' />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div className={styles.projetos}>
        <h1>My Projects</h1>
      </div>
      <div className={styles.projects}>
        <div className={styles.containerProjects}>
          <h3>Game of Trivia</h3>
          <a href='https://jogo-trivia-eosin.vercel.app/' target='_blank'>
            <img width='200px' src='/trivia.png' alt='JogoTrivia' />
          </a>
          <h3>Techs</h3>
          <div className={styles.techs}>
            <img
              src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
              alt='react'
            />
            <img
              src='https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white'
              alt='redux'
            />
            <img
              src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'
              alt='RTL'
            />
          </div>
        </div>
        <div className={styles.containerProjects}>
          <h3>TrybeWallet</h3>
          <a
            href='https://project-trybewallet-rouge.vercel.app/'
            target='_blank'
          >
            <img width='200px' src='/trybewallet.png' alt='JogoTrivia' />
          </a>
          <h3>Techs</h3>
          <div className={styles.techs}>
            <img
              src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
              alt='react'
            />
            <img
              src='https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white'
              alt='redux'
            />
            <img
              src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'
              alt='RTL'
            />
          </div>
        </div>
      </div>
      <footer className={styles.footer}>Developed by Matheus Jorge</footer>
    </div>
  );
}

export default App;
