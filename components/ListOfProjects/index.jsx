import React from 'react'
import Project from '../Project/index'
import styles from './ListOfProjects.module.scss'

const ListOfProjects = () => {
  return (
    <section className={styles.ListOfProjects} id='projects'>
      <div className={styles.container}>
        <h2>Proyectos</h2>
        <p className={styles.description}>
          En mi proceso de aprendizaje de las tecnologías frontend he realizado
          algunos proyectos donde he puesto en práctica mis conocimientos de
          HTML, CSS, Javascript, React, Node JS y MongoDB. Por el momento solo
          he realizado un proyecto demo completo sin embargo en mi prefil de
          Github estan todos los pequeños proyectos que he realizado.
        </p>
        <div className={styles.projectGrid}>
          <Project />
        </div>
      </div>
    </section>
  )
}

export default ListOfProjects
