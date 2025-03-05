import React from 'react'
import ProfileCard from './ProfileCard'
import Link from 'next/link'
import Image from 'next/image'
import Advertisement from './Advertisement'

const LeftMenu = ({ type }) => {

  return (
    <div className='flex flex-col  gap-6'>
      {type === 'home' && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4 text-gray-500">
        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src='/posts.png' alt='' width={20} height={20}/>
          <span>Posts</span>
        </Link>
        <hr />

        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src='/activity.png' alt="" width={20} height={20}/>
          <span>Activity</span>
        </Link>
        <hr />

        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src='/market.png' alt="" width={20} height={20}/>
          <span>Marketplace</span>
        </Link>
        <hr />

        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src='/albums.png' alt="" width={20} height={20}/>
          <span>Events</span>
        </Link>
        <hr />

        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src='/videos.png' alt="" width={20} height={20}/>
          <span>Videos</span>
        </Link>
        <hr /> 

        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src='/news.png' alt="" width={20} height={20}/>
          <span>News</span>
        </Link>
        <hr /> 

        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src='/courses.png' alt="" width={20} height={20}/>
          <span>Courses</span>
        </Link>
        <hr /> 

        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src='/lists.png' alt="" width={20} height={20}/>
          <span>Lists</span>
        </Link>
        <hr />

        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
          <Image src='/settings.png' alt="" width={20} height={20}/>
          <span>Settings</span>
        </Link>
        <hr />  
      </div>

      <Advertisement size='sm' />
    </div>
  )
}

export default LeftMenu