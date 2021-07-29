import React, { useState } from 'react'
import styles from './Navigation.module.scss'

const Navigation = () => {
  const [isChecked, setIsChecked] = useState(false)
  const handleChangle = (e) => {
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
          <a href='#about'>Acerca</a>
        </li>
        <li onClick={() => setIsChecked(false)}>
          <a href='#projects'>Proyectos</a>
        </li>
        <li onClick={() => setIsChecked(false)}>
          <a href='#contact'>Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
