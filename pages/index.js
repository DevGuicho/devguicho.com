import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import ListOfProjects from '../components/ListOfProjects'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Sans+JP:wght@100;400;700&family=Open+Sans:wght@300;400;600;700&family=Roboto+Mono:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        <title>Devguicho</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <ListOfProjects />
      </main>
    </>
  )
}

export default Home
