import React from 'react'
import style from './AboutMe.module.scss'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <section className={style.AboutMe} id='about'>
      <div className={style.container}>
        <h2>About Me</h2>
        <div className={style.AboutMeGrid}>
          <Image src='/static/me.jpg' alt='My Face' width={350} height={350} />
          <div>
            <p>
              La ciencia y la tecnología siempre me han apasionado por eso
              estudié el bachillerato técnico en Sistemas Digitales y
              actualmente me encuentro estudiando la carrera de Ingeniería
              Telemática en la UPIITA del IPN.
            </p>
            <p>
              En julio de 2020 descubrí el mundo del desarrollo web y desde
              entonces no he parado de buscar y aprender acerca de las
              tecnologías que hoy mueven al mundo como HTML, CSS, JS, React y
              Node.js principalmente.
            </p>
            <p>
              Además de la programación, la música de The beatles, el clima frio
              y la naturaleza me hacen muy feliz.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
