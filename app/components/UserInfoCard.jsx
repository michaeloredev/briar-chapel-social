import React from "react";
import Link from "next/link";
import Image from "next/image";

const UserInfoCard = async ({ user }) => {
  
  const createdDate = new Date(user.createdAt).toLocaleDateString();
  
  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-sm">
          See All
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-lg text-black">
            {user.name && user.surname
              ? user.name + " " + user.surname
              : user.username}
          </span>
          <span className="text-sm">@{user.username}</span>
        </div>
        {user.descriptiion && <p>{user.descriptiion}</p>}

        {user.city && (
          <div className="flex items-center gap-2">
            <Image src="/map.png" alt="" height={20} width={20} />
            <span>Living in {user.city}</span>
          </div>
        )}

        {user.school && (
          <div className="flex items-center gap-2">
            <Image src="/school.png" alt="" height={20} width={20} />
            <span>Attended {user.school}</span>
          </div>
        )}

        {user.work && (
          <div className="flex items-center gap-2">
            <Image src="/work.png" alt="" height={20} width={20} />
            <span>Works at {user.work}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          {user.website && (
            <div className="flex items-center gap-2">
              <Image src="/link.png" alt="" height={20} width={20} />
              <a
                href="https://jdrock.com"
                className="text-blue-500 font-medium"
              >
                {user.website}
              </a>
            </div>
          )}

          <div className="flex items-center gap-2">
            <Image src="/date.png" alt="" height={20} width={20} />
            <span>Joined at {createdDate}</span>
          </div>

        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md py-2 font-medium">
          Follow
        </button>
        <span className="text-red-400 text-sm cursor-pointer self-end">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
