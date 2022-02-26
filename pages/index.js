import Head from 'next/head'
import styles from '../styles/Home.module.css'
import toast, { Toaster } from 'react-hot-toast'
import copy from 'copy-to-clipboard'
import animated from '../styles/Animations.module.css'

export default function Home() {
  const installButton = () => {
    copy('npx run-whack');
    toast.success('Copied to clipboard.');
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Whack</title>
        <meta name="description" content="Literally the easiest way to terminate your macOS applications." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.introContainer}>
        <h1 className={styles.title}>
          Whack
        </h1>
    <h1 className={styles.subtitle}>Literally the <em> easiest </em>way to terminate your macOS applications.</h1>
    </div>
  <div className={styles.buttonContainer}>
    <a Link="/">
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

<p className={styles.githubDirect}>This project is open sourced at <a href="https://github.com/anddddrew/hackathon-website">github</a>.</p>

      <div className={styles.getStartedContainer}>
       <button
         onClick={installButton} className={styles.getStarted}>
         npx run-whack 📋
       </button>
      </div>
       <Toaster />
   </div>
  )
}
