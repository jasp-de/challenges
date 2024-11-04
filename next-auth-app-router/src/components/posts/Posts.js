import { postsList } from "./Posts.module.css";
import Post from "../post/Post";

export default async function Posts({ posts }) {
    return (
        <div className={postsList}>
            <h1>Posts</h1>
            {posts?.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
}
