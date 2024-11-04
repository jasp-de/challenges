import { form, form_group, btn } from "./AddPost.module.css";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { handleAdd } from "@/lib/actions";

export default async function AddPost() {
    const session = await getServerSession(authOptions);

    return (
        <>
            <h1>Add new post</h1>
            <form className={form} action={handleAdd}>
                <div className={form_group}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter title"
                        name="title"
                        required
                    />
                </div>
                <div className={form_group}>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        rows="3"
                        name="content"
                        required
                    ></textarea>
                </div>
                <input
                    type="hidden"
                    name="userId"
                    value={session.user.userId}
                />
                <button type="submit" className={btn}>
                    Submit
                </button>
            </form>
        </>
    );
}
