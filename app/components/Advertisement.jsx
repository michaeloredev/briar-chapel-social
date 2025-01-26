import React from "react";
import Image from "next/image";

const Advertisement = ({ size }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TITLE */}
      <div className="flex items-center justify-between font-medium">
        <span>Sponsored Ad</span>
        <Image src="/more.png" alt="" height={10} width={10} className="" />
      </div>
      {/* IMAGE */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/27127317/pexels-photo-27127317/free-photo-of-painting-of-flower-branch-leaf-and-stone-with-shadows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="ad image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27127317/pexels-photo-27127317/free-photo-of-painting-of-flower-branch-leaf-and-stone-with-shadows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="ad image"
            width={24}
            height={24}
            className="rounded-full object-cover h-6 w-6"
          />
          <span className="text-blue-500 font-medium">Flowers for you</span>
        </div>
        <p className={`${size === "sm" ? "text-xs" : "text-sm"} text-gray-500`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          malesuada, eros sit
        </p>
        <button className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Advertisement;
