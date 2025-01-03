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
    <div className='relative h-full w-full min-h-screen bg-slate-950'>
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
