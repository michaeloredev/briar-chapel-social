import React from "react";
import Link from "next/link";
import Image from "next/image";

const UserInfoCard = ({ userId }) => {
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
          <span className="text-lg text-black">Mike Ore</span>
          <span className="text-sm">@orebot21</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          deleniti consectetur consequuntur? Laborum dicta deleniti itaque quae
          rem voluptate neque? Neque porro aspernatur optio incidunt. Inventore
          iste tempora earum!
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" height={20} width={20} />
          <span>Living in Chapel Hill NC</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" height={20} width={20} />
          <span>Attended SCAD</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" height={20} width={20} />
          <span>Works at Mosaic Learning</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/link.png" alt="" height={20} width={20} />
            <a href="https://jdrock.com" className="text-blue-500 font-medium">
              JD ROCK
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/date.png" alt="" height={20} width={20} />
            <span>Started June 17 2007</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md py-2 font-medium">Follow</button>
        <span className="text-red-400 text-sm cursor-pointer self-end">Block User</span>
      </div>
    </div>
  );
};

export default UserInfoCard;
