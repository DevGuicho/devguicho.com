import React from 'react'
import Link from 'next/link'
import styles from './Project.module.scss'

const Project = () => {
  return (
    <article className={styles.Project}>
      <img src='/static/p1.JPG' alt='Project cover' />
      <div className={styles.ProjectBody}>
        <h3>Giffy</h3>
        <p>
          Giffy es un sitio creado con create-react-app que utiliza API de Giphy
          para obtener los gifs asi como las busquedas más populares del
          momento, te permite iniciar sesión para guardar tus gifs favoritos y
          verlos en otro momento{' '}
        </p>
      </div>
      <Link href='/'>
        <a className={styles.btn}>View Project</a>
      </Link>
    </article>
  )
}

export default Project
