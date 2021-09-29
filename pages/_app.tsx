import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="yandex-verification" content="fcdf20173d84f1e2" />
    </Head>
    <Component {...pageProps} />
  </>
}
export default MyApp
