import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import ListOfProjects from '../components/ListOfProjects'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Bienvenido a mi portafolio' />
        <title>Devguicho</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <ListOfProjects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
