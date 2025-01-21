import React from "react";
import Image from "next/image";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/19101356/pexels-photo-19101356/free-photo-of-young-brunette-in-a-white-shirt-sitting-on-a-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            height={40}
            width={40}
            className="h-10 w-10 rounded-full"
          />
          <span className="font-medium">Cherry Smith</span>
        </div>

        <Image
          src="/more.png"
          alt=""
          height={20}
          width={20}
          className="h-5 w-5 rounded-full"
        />
      </div>
      {/* DESCRIPTION */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/13482140/pexels-photo-13482140.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          incidunt provident aliquid dolorum a earum, maxime accusamus in ipsam
          non culpa quidem eveniet adipisci eligendi aliquam autem magni
          dignissimos illum.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <Image
            src="/like.png"
            alt=""
            height={16}
            width={16}
            className="cursor-pointer"
          />
          <span className="text-gray-500">|</span>
          <span className="text-gray-500">231</span>
          <Image
            src="/comment.png"
            alt=""
            height={20}
            width={20}
            className="h-5 w-5"
          />
          <Image
            src="/share.png"
            alt=""
            height={20}
            width={20}
            className="h-5 w-5"
          />
        </div>
        <Image
          src="/bookmark.png"
          alt=""
          height={20}
          width={20}
          className="h-5 w-5"
        />
      </div>
    </div>
  );
};

export default Post;
