import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between '>
       {/* LEFT */}
       <div className="">
        <Link href="/" className='text-blue-600 font-bold text-xl'>B.C.S</Link>
       </div>
       {/* CENTER */}
       <div className="hidden">
        {/* LINKS */}
        <div className="">
          <Link href="/">
            {/* <Image /> */}
          </Link>
        </div>
       </div>
        {/* RIGHT */}
       <div className="">
        <MobileMenu />
       </div>
    </div>
  )
}

export default Navbar