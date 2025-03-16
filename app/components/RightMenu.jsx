import React from 'react'
import FriendRequests from './FriendRequests';
import Birthdays from './Birthdays';
import Advertisement from './Advertisement';
import UserInfoCard from './UserInfoCard';
import UserMediaCard from './UserMediaCard';

const RightMenu = ({user}) => {

console.log(user, 'this is user!!!!');

  return (
    <div className=''>
      <div className="flex flex-col gap-6">
        {user && (
          <>
          <UserInfoCard user={user} />
          <UserMediaCard user={user} />
          </>
        )}
        <FriendRequests  />
        <Birthdays />
        <Advertisement size="md"/>
      </div>
    </div>
  )
}

export default RightMenu