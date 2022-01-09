import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <Head>
      <meta name="yandex-verification" content="fcdf20173d84f1e2" />
    </Head>
    <Component {...pageProps} />
  </Layout>
}
export default MyApp
