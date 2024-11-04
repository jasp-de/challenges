import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import DeleteButton from "../delete-button/DeleteButton";

export default async function Post({ post }) {
    const session = await getServerSession(authOptions);

    const postId = String(post._id);
    const userId = String(post.userId);

    return (
        <div key={postId}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {session
                ? userId === session.user.userId && (
                      <DeleteButton postId={postId} />
                  )
                : null}
        </div>
    );
}
