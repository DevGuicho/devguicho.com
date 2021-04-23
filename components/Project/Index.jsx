import React from 'react'
import Image from 'next/image'
import styles from './Project.module.scss'

const Project = () => {
  return (
    <article className={styles.Project}>
      <picture>
        <Image
          src='/static/p1.JPG'
          alt='Project cover'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </picture>
      <div className={styles.ProjectBody}>
        <h3>Giffy</h3>
        <p className={styles.ProjectBodyText}>
          Giffy es un sitio creado con create-react-app que utiliza API de Giphy
          para obtener los gifs asi como las busquedas más populares del
          momento, te permite iniciar sesión para guardar tus gifs favoritos y
          verlos en otro momento
        </p>
      </div>

      <a href='https://giffy-flax.vercel.app/' className={styles.btn}>
        View Project
      </a>
    </article>
  )
}

export default Project
