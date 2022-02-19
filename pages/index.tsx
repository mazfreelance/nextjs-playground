import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Our Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="vh-100 d-flex justify-content-center align-items-center">
        {/* <LoginForm /> */}
        Home
      </main>
    </div>
  )
}

export default Home
