import type { NextPage } from 'next'
import Welcome from '../components/Welcome'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title> Home | Ojude | IleYoruba.org</title>
        <meta name="description" content="ile yoruba aim is to become the digital library dedicated toward the preservation of the Yoruba culture" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="flex justify-center">
        <Welcome />
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}

export default Home
