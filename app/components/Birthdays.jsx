import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Birthdays = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      {/* BOTTOM */}
      <div className="flex item-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/20367778/pexels-photo-20367778/free-photo-of-brunette-in-coat-and-hat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            height={40}
            width={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold gap-4">Gary Filton</span>
        </div>

        <div className="flex gap-3 justify-end">
          <div className="flex items-center gap-2">
           <button className='bg-blue-500 text-white px-2 py-1 rounded-md'>Celebrate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Birthdays