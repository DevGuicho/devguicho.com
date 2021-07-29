import React from 'react'
import styles from './SocialNav.module.scss'

const SocialNav = () => {
  return (
    <ul className={styles.SocialNav}>
      <li className={styles.SocialNavItem}>
        <a
          href='https://www.facebook.com/DevGuicho/'
          target='_blank'
          rel='noreferrer'
        >
          <i></i>
        </a>
      </li>
      <li className={styles.SocialNavItem}>
        <a
          href='https://twitter.com/DevGuicho'
          target='_blank'
          rel='noreferrer'
        >
          <i></i>
        </a>
      </li>
      <li className={styles.SocialNavItem}>
        <a
          href='https://www.linkedin.com/in/luis-v%C3%A1zquez-3a94191aa/'
          target='_blank'
          rel='noreferrer'
        >
          <i></i>
        </a>
      </li>
      <li className={styles.SocialNavItem}>
        <a href='https://github.com/DevGuicho' target='_blank' rel='noreferrer'>
          <i></i>
        </a>
      </li>
    </ul>
  )
}

export default SocialNav
