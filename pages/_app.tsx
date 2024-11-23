import '@/styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('preline/dist/preline')
    }
  })
  return <Component {...pageProps} />
}
