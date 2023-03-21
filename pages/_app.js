import Layout from '@/components/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
