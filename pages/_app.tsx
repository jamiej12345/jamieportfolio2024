import '@/styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('preline/dist/preline')
        .then((module) => {})
        .catch((error: string) => {
          console.error('Failed to log preline: ', error)
        })
    }
  })
  return <Component {...pageProps} />
}
