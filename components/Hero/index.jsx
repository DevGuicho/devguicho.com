import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div>
        <h2>Luis Vazquez Padilla</h2>
        <div className={styles.subtext}>
          <img
            src='/static/react.svg'
            alt='React logo'
            className={styles.logo}
          />
          <p>React Developer Jr</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
