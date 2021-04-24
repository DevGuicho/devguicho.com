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
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@300;400;500;700&family=Roboto+Mono:wght@400;700&display=swap'
          rel='stylesheet'
        />
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
