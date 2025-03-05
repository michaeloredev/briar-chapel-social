import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";


const ProfileCard = async () => {

  const { userId } = await auth();
  console.log(userId, "userId")

  if(!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId
    },
    include: {
      _count: {
        select: {
          followers: true,
        }
      }
    }
  });

  console.log(user)


  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6 text-gray-500">
      <div className="h-20 relative">
        <Image
          src={user.cover || '/noCover.png'}
          alt="profile bg"
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={user.avatar || '/noAvatar.png'}
          alt="profile"
          width={48}
          height={48}
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">{(user.name && user.surname) ? user.name + " " + user.surname : user.username}</span>

        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/30421127/pexels-photo-30421127/free-photo-of-black-cat-with-party-hat-and-balloons.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="profile"
              width={24}
              height={24}
              className="rounded-full w-6 h-6 object-cover"
            />
            
         
          
            <Image
              src="https://images.pexels.com/photos/30421127/pexels-photo-30421127/free-photo-of-black-cat-with-party-hat-and-balloons.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="profile"
              width={24}
              height={24}
              className="rounded-full w-6 h-6 object-cover"
            />
            
         
        
            <Image
              src="https://images.pexels.com/photos/30258591/pexels-photo-30258591/free-photo-of-confident-woman-in-pink-suit-sitting-on-steps-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="profile"
              width={24}
              height={24}
              className="rounded-full w-6 h-6 object-cover"
            />
            
          </div>
          <span className="text-sm text-color-gray-500">{user._count.followers}</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md font-semibold  ">My Profile</button>
      </div>
    </div>
  );
};

export default ProfileCard;
