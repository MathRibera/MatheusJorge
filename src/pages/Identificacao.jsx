import React from 'react'
import styles from './css/Identificacao.module.css'

function Identificacao() {
  return (
    <div className={styles['container-perfil']}>
      <div className={styles.perfil}>
        <img src="https://png.pngtree.com/background/20210714/original/pngtree-pure-black-dark-background-wallpaper-picture-image_1218983.jpg" height='240px' width='240px' alt="" />
        <div className={styles['sobre-mim']}>
          <div>Hello, my name is</div>
          <h2>Matheus jorge</h2>
          <div className={styles.bio}>
            <p>Desenvolvedor FullStack</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Identificacao