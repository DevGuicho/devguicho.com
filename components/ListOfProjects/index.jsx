import React from 'react'
import Project from '../Project/index'
import styles from './ListOfProjects.module.scss'

const ListOfProjects = () => {
  return (
    <section className={styles.ListOfProjects} id='projects'>
      <div className={styles.container}>
        <h2>Projects</h2>
        <p className={styles.description}>
          En mi proceso de aprendizaje de las tecnologías frontend he realizado
          algunos proyectos donde puse en práctica mis conocimientos de HTML,
          CSS, Javascript, React, Node JS y MongoDB
        </p>
        <div className={styles.projectGrid}>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  )
}

export default ListOfProjects
