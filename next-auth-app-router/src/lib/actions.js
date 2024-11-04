"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deletePost, createPost } from "@/lib/api";

export const handleDelete = async (id) => {
    await deletePost(id);
    revalidatePath("/user/posts");
};

export const handleAdd = async (data) => {
    const post = Object.fromEntries(data);
    const newPost = await createPost(post);

    if (newPost.success) {
        redirect("/user/posts");
    }

    return { error: newPost.message };
};
