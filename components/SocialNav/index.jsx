import React from 'react'
import styles from './SocialNav.module.scss'

const SocialNav = () => {
  return (
    <ul className={styles.SocialNav}>
      <li className={styles.SocialNavItem}>
        <a href='https://www.facebook.com/DevGuicho/'>
          <i></i>
        </a>
      </li>
      <li className={styles.SocialNavItem}>
        <a href='https://twitter.com/DevGuicho'>
          <i></i>
        </a>
      </li>
      <li className={styles.SocialNavItem}>
        <a href='https://www.instagram.com/devguicho/'>
          <i></i>
        </a>
      </li>
      <li className={styles.SocialNavItem}>
        <a href=''>
          <i></i>
        </a>
      </li>
      <li className={styles.SocialNavItem}>
        <a href='https://github.com/DevGuicho'>
          <i></i>
        </a>
      </li>
    </ul>
  )
}

export default SocialNav
