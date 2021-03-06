import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import toast, { Toaster } from 'react-hot-toast'
import copy from 'copy-to-clipboard'
import animated from '../styles/Animations.module.css'
import React, { useState } from "react"
import Header from './components/Header'

export default function Home() {
  const installButton = () => {
    copy('npx run-docked');
    toast.success('Copied to clipboard!')
  }

  return (
    <div className={styles.container}>
       <Header></Header>
      <Head>
        <title>Docked</title>
        <meta name="description" content="Literally the easiest way to terminate your macOS applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.introContainer}>
        <h1 className={styles.title}>
        Transforming<br/>
        Containers.
        </h1>
    <h1 className={styles.subtitle}>Docked is the easiest way to to view your docker containers straight from the CLI.</h1>
    </div>
  <div className={styles.buttonContainer}>
    <a href="/auth">
        <button>
          Get started →
        </button>
    </a>
  </div>
  <div className={animated.square}></div>
  <div className={animated.circle}></div>
  <div className={animated.triangle}></div>
  <div className={animated.square0}></div>
  <div className={animated.circle0}></div>
  <div className={animated.triangle0}></div>

<p className={styles.githubDirect}>This project is open sourced on <a href="https://github.com/anddddrew/hackathon-website">github</a>.</p>

      <div className={styles.getStartedContainer}>
       <button
         onClick={installButton} className={styles.getStarted}>
         npx run-docked <b idName="clipboard">📋</b>
       </button>
      </div>

      <h1 className={styles.secOneTitle}>WHAT IS DOCKED?</h1>

      <div className={styles.secOneContainer}>
        <h2>Super fast performance.</h2>
        <p>Docked delivers your container information and statuses in a matter of seconds. 
          We use tight intergation with docker to provide real-time and accurate information immediately. 
          For free.</p>
      </div>

       <Toaster position="bottom-left" />
   </div>
  )
}
