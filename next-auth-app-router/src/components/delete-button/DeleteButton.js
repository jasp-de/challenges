"use client";
import { useState } from "react";
import { handleDelete } from "@/lib/actions";

export default function DeleteButton({ postId }) {
    const [loading, setLoading] = useState(false);

    return (
        <button
            onClick={async () => {
                setLoading(true);
                await handleDelete(postId);
            }}
            disabled={loading}
        >
            Delete
        </button>
    );
}
