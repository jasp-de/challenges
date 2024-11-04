import Profile from "../components/profile";
import Posts from "../components/posts/Posts";

import { getAllPosts } from "../lib/api";

export default async function Home() {
    const posts = await getAllPosts();

    return (
        <>
            <Profile />
            <Posts posts={posts} />
        </>
    );
}
