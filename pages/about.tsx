import Link from 'next/link'

export default function about() {
  return (
    <div>
      <h2>This is the about page</h2>
      <Link href='/'>Go to the home page</Link>
    </div>
  )
}
