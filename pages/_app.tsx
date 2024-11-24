import '@/styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('preline/dist/preline').catch((error: string) => {
        console.error('Failed to log preline: ', error)
      })
    }
  })
  return (
    <div className='relative h-full w-full min-h-screen'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
