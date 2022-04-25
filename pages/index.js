import React from 'react';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Hemant</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Homepage />
      <About />
      <Skills />
      <Work />
      <Contact />

    </div>
  )
}
