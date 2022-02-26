import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.introContainer}>
        <h1 className={styles.title}>
          Whack
        </h1>
    <h1 className={styles.subtitle}>Literally the easiest way to terminate your macOS applications.</h1>
    </div>
  <div className={styles.buttonContainer}>
    <a Link="/">
        <button>
          Get started. →
        </button>
    </a>
  </div>
  <code className={styles.getStarted}>npx whack</code>
    </div>
  )
}
