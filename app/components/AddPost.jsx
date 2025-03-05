import React from "react";
import Image from "next/image";
import { auth } from '@clerk/nextjs/server';
import { prisma } from "@/lib/client";

const AddPost = () => {




  return (
    <div className="p-4 bg-white border border-gray-200 shadow-md rounded-lg flex gap-4 justify-between text-sm items-center">
      {/* {AVATAR} */}
      <Image
        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        height={48}
        width={48}
        className="w-12 h-12 rounded-full object-cover"
      />
      {/* {POST} */}
      <div className="flex-1">
        <form action="">
        <div className="flex gap-4">
          <textarea
            name="description"
            id=""
            className="bg-slate-100 flex-1 p-2"
            placeholder="Whats on your mind?"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            height={20}
            width={20}
            className="w-5 h-5 self-end"
          />
          <button>Send</button>
          
        </div>
        </form>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 font-bold cursor-pointer">
            <Image src="/addimage.png" alt="" height={20} width={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 font-bold cursor-pointer">
            <Image src="/addVideo.png" alt="" height={20} width={20} />
            Video
          </div>
          <div className="flex items-center gap-2 font-bold cursor-pointer">
            <Image src="/addevent.png" alt="" height={20} width={20} />
            Event
          </div>
          <div className="flex items-center gap-2 font-bold cursor-pointer">
            <Image src="/poll.png" alt="" height={20} width={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
