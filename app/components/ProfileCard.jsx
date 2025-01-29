import React from "react";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6 text-gray-500">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/29739966/pexels-photo-29739966/free-photo-of-snow-covered-rocky-mountains-in-emirdag-turkiye.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="profile bg"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <Image
          src="https://images.pexels.com/photos/30421127/pexels-photo-30421127/free-photo-of-black-cat-with-party-hat-and-balloons.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="profile"
          width={48}
          height={48}
          objectFit="cover"
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Mike Ore!!!</span>

        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/30421127/pexels-photo-30421127/free-photo-of-black-cat-with-party-hat-and-balloons.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="profile"
              width={12}
              height={12}
              objectFit="cover"
              className="rounded-full w-3 h-3"
            />
            
         
          
            <Image
              src="https://images.pexels.com/photos/30421127/pexels-photo-30421127/free-photo-of-black-cat-with-party-hat-and-balloons.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="profile"
              width={12}
              height={12}
              objectFit="cover"
              className="rounded-full w-3 h-3"
            />
            
         
        
            <Image
              src="https://images.pexels.com/photos/30258591/pexels-photo-30258591/free-photo-of-confident-woman-in-pink-suit-sitting-on-steps-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="profile"
              width={12}
              height={12}
              objectFit="cover"
              className="rounded-full w-3 h-3"
            />
            
          </div>
          <span className="text-sm text-color-gray-500">500 followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md font-semibold  ">My Profile</button>
      </div>
    </div>
  );
};

export default ProfileCard;
