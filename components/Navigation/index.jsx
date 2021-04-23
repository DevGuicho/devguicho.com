import React from 'react'
import Link from 'next/link'
import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <span className={styles.Bar}>
        <i className={styles.facebook}></i>
      </span>
      <ul>
        <li>
          <a href='#about'>About me</a>
        </li>
        <li>
          <a href='#projects'>Proyectos</a>
        </li>
        <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
