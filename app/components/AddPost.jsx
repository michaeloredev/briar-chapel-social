import React from 'react'
import Image from 'next/image'

const AddPost = () => {
  return (
    <div className='p-4 bg-white border border-gray-200 rounded-lg flex gap-4 justify-between text-sm items-center'>
      {/* {AVATAR} */}
      <Image src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={48} width={48} className='w-12 h-12 rounded-full object-cover'/>
      {/* {POST} */}
      <div className="flex-1">
        <div className="flex gap-4">
          <textarea name="" id="" className='bg-slate-100 flex-1 p-2' placeholder='Whats on your mind?'></textarea>
          <Image src="/emoji.png" alt="" height={20} width={20} className='w-5 h-5 self-end'/>
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}

export default AddPost