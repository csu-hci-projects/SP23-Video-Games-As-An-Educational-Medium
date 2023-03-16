import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component className={inter.className} {...pageProps} />
    </Layout>
  )
}
