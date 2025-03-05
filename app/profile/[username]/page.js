import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import Feed from "@/app/components/Feed";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

const ProfilePage = async ({ params }) => {
  // console.log(params, 'this is params');

  const resolvedParams = await params;
  const username = resolvedParams.username;

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    include: {
      _count: {
        select: { posts: true, followers: true, following: true },
      },
    },
  });

  if (!user) return notFound();
  const postCount = user._count.posts;
  const followerCount = user._count.followers;
  const followingCount = user._count.following;

  const { userId: currentUserId } = await auth();

  let isBlocked;

  if (currentUserId) {
    const resp = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });
    if (resp) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();

  return (
    <div className="flex gap-6 p-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image src={user?.cover} alt="" fill className="object-cover" />
              <Image
                src={user?.avatar ||  "noAvatar.png"}
                alt=""
                width={128}
                height={128}
                className="object-cover w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              {user.name ? user.name + " " + user.surname : user.username}
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-semibold">Posts</span>
                <span className="text-gray-500">{postCount}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold">Followers</span>
                <span className="text-gray-500">{followerCount}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold">Following</span>
                <span className="text-gray-500">{followingCount}</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
