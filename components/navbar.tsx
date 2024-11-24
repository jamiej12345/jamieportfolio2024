import Link from 'next/link'
import Image from 'next/image'
import myImage from '../images/infoicon-removebg-preview.png'

const Navbar = () => {
  return (
    <nav className='w-9/12 flex justify-between m-auto mt-6'>
      <div>
        <Link href='/'>
          <Image src={myImage} alt='this is my image' width={35} height={35} />
        </Link>
      </div>
      <ul className='flex space-x-4'>
        <li>
          <Link href='/about' className='mb-4 mr-4'>
            about
          </Link>
        </li>
        <li>
          <Link href='/contact' className='mb-4'>
            contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
