import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.scss'

const Navigation = () => {
  const [isChecked, setIsChecked] = useState(false)
  const handleChangle = (e) => {
    console.log(e.target.checked)
    setIsChecked(e.target.checked)
  }
  return (
    <nav className={styles.Navigation}>
      <label className={styles.toggle} htmlFor='bar'>
        <i className={styles.facebook}></i>
      </label>
      <input
        className={styles.check}
        type='checkbox'
        name='bar'
        id='bar'
        checked={isChecked}
        onChange={handleChangle}
      />
      <ul className={styles.list}>
        <li onClick={() => setIsChecked(false)}>
          <a href='#about'>About me</a>
        </li>
        <li onClick={() => setIsChecked(false)}>
          <a href='#projects'>Proyectos</a>
        </li>
        <li onClick={() => setIsChecked(false)}>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
