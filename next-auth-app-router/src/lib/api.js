import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";

export const getAllPosts = async () => {
    await dbConnect();

    const posts = await Post.find();
    return posts;
};

export const getUserPosts = async (id) => {
    await dbConnect();

    const posts = await Post.find({ userId: id });
    return posts;
};

export const createPost = async (newPost) => {
    try {
        await dbConnect();

        const posts = await Post.create(newPost);
        return { success: true, message: "Post created successfully" };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Something went wrong" };
    }
};

export const deletePost = async (postId) => {
    await dbConnect();

    const posts = await Post.findByIdAndDelete(postId);
    return { success: true, message: "Post deleted successfully" };
};
