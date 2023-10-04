import Script from 'next/script'
import Layout from '../components/layout'
import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>
      Brandstart - Crafting your online sucess
      </title>
      <meta
        name="description"
        content="Your brand&apos;s digital journey begins with BrandStart. Contact us today, and let&apos;s embark on the path to making your brand unforgettable."
        key="desc"
      />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
