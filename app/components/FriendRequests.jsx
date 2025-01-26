import React from "react";
import Link from "next/link";
import Image from "next/image";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Request</span>
        <Link href="/" className="text-blue-500 text-sm">
          See All
        </Link>
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
            <Image
              src="/accept.png"
              alt=""
              height={20}
              width={20}
              className="cursor-pointer w-5 h-5"
            />
            <Image
              src="/reject.png"
              alt=""
              height={20}
              width={20}
              className="cursor-pointer w-5 h-5"
            />
          </div>
        </div>
      </div>

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
            <Image
              src="/accept.png"
              alt=""
              height={20}
              width={20}
              className="cursor-pointer w-5 h-5"
            />
            <Image
              src="/reject.png"
              alt=""
              height={20}
              width={20}
              className="cursor-pointer w-5 h-5"
            />
          </div>
        </div>
      </div>

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
            <Image
              src="/accept.png"
              alt=""
              height={20}
              width={20}
              className="cursor-pointer w-5 h-5"
            />
            <Image
              src="/reject.png"
              alt=""
              height={20}
              width={20}
              className="cursor-pointer w-5 h-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
