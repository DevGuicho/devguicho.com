import React from 'react'
import Navigation from '../Navigation'
import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.container}>
        <h1>
          <Link href='/'>
            <a>{'<Devguicho />'}</a>
          </Link>
        </h1>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
