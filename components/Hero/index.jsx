import React from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <Image
        className={styles.bgImage}
        src='/static/main-bg.jpg'
        alt='picture'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
      <div className={styles.heroText}>
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
