import Link from 'next/link'

export default function about() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h2>This is the about page</h2>
      <Link href='/' className='mt-4 mb-4'>
        Go to the home page
      </Link>
      <Link href='/contact' className='mt-4 mb-4'>
        Go to the contact page
      </Link>
    </div>
  )
}
