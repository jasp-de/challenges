import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Posts from "@/components/posts/Posts";
import { getServerSession } from "next-auth";

import { getUserPosts } from "@/lib/api";

export default async function UserPosts() {
    // console.log("session: ", session);
    const session = await getServerSession(authOptions);

    const userPosts = await getUserPosts(session.user.userId);

    return <Posts posts={userPosts} />;
}
