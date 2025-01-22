import React from 'react'
import FriendRequests from './FriendRequests';
import Birthdays from './Birthdays';
import Advertisement from './Advertisement';

const RightMenu = ({userId}) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className="">
        <FriendRequests  />
        <Birthdays />
        <Advertisement />
      </div>
    </div>
  )
}

export default RightMenu