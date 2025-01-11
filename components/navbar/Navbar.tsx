import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '../ToggleBtn'

const Navbar = () => {
  return (
    <nav className='w-full z-[200] flex items-center justify-between max-w-5xl mx-auto px-4  py-5 fixed top-0 left-0 right-0 backdrop-blur-md '>
        <Link href='/' className=' text-3xl font-bold '>
            NO <span className='text-primary'>Name</span>
        </Link>
        {/* <ModeToggle/> */}
    </nav>
  )
}

export default Navbar