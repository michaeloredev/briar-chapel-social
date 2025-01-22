import React from "react";
import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/30309178/pexels-photo-30309178/free-photo-of-vibrant-parrot-perched-on-a-balcony-railing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={32}
          height={32}
          className="object-cover w-8 h-8 rounded-full ring-2"
        />
        <div className="flex items-center gap-4 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="w-full p-2 bg-gray-100 rounded-md"
          />
          <div className="">
            <Image
              src="/emoji.png"
              alt="emoji"
              height={16}
              width={16}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* COMMENT */}
      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          <Image
            src="https://images.pexels.com/photos/30309178/pexels-photo-30309178/free-photo-of-vibrant-parrot-perched-on-a-balcony-railing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="object-cover w-10 h-10 rounded-full ring-2"
          />

          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Bart Rothcoe</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              magni hic mollitia, quidem ipsum, possimus iste voluptas tempora
              fuga fugiat illum alias adipisci consequuntur dolores libero autem
              temporibus. Ratione, optio.
            </p>

            <div className="flex items-center gap-8 text-xs test-gray-500 mt-4">
                <div className="flex items-center gap-4">
                    <Image
                        src="/like.png"
                        alt="like"
                        height={16}
                        width={16}
                        className="cursor-pointer h-4 w-4"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">24 Likes</span>
                </div>
                <div className=" ">Reply</div>
            </div>
          </div>

          <div className="">
            <Image
              src="/more.png"
              alt="more"
              height={16}
              width={16}
              className="w-4 h-4 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
