import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

// sections
import Section1 from '../components/Section1/Section1'
import Section2 from '../components/Section2/Section2'

export default function Home() {
  const [scale, setScale] = useState(1)

  // scale
  useEffect(() => {
    window.addEventListener('resize', () => {
      setScale(innerWidth / 1366)
    })
  }, [])

  // initial scale
  useEffect(() => {
    setScale(innerWidth / 1366)
  }, [])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Totoriu sodai test' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='preload'
          href='/fonts/19-PRALight.otf'
          as='font'
          crossOrigin=''
        />
      </Head>

      <main className={styles.main}>
        <Section1 scale={scale} />
        <Section2 scale={scale} />
      </main>
    </div>
  )
}
