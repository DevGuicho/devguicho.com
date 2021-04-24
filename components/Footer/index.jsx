import React from 'react'
import SocialNav from '../SocialNav'
import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.container}>
        <Link href='/'>
          <a>
            {'<'}
            <span>Dev</span>
            {'guicho />'}
          </a>
        </Link>
        <p>Hecho con 💚 por Luis Vazquez con Next.js</p>
        <div>
          <SocialNav />
        </div>
      </div>
    </footer>
  )
}

export default Footer
