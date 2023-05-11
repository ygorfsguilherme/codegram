import '@/styles/cores.css'
import '@/styles/globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  weight: ['700', '600', '400'],
  style: ['normal'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  )
}
