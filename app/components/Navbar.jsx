import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { ClerkLoading, ClerkLoaded, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between ">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="text-blue-600 font-bold text-xl">
          B.C.S
        </Link>
      </div>

      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600 ">
          <Link href="/" className="flex gap-2  items-center">
            <Image
              src="/home.png"
              alt="Homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Home</span>
          </Link>

          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/friends.png"
              alt="Friends"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>

          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/stories.png"
              alt="Stories"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>

        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-lg"> 
          <input type="search" placeholder="Search..." className="bg-transparent outline-none"/>
          <Image src="/search.png" alt="Search Bar" width={14} height={14}/>
        </div>

      </div>

      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className='class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"'></div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt='Signed In' height={16} width={16} />
            </div>
            <div className="cursor-pointer">
              <Image src="/messages.png" alt='Signed In' height={16} width={16} />
            </div>
            <div className="cursor-pointer">
              <Image src="/notifications.png" alt='Signed In' height={16} width={16} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex gap-2 items-center hidden md:flex">
              <Image src="/noAvatar.png" alt="Log In" width={16} height={16}/>
              <Link href="/sign-in" className="text-blue-600 font-medium">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
