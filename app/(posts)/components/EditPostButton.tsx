"use client"

import { Button } from "@/components/Button"
import { Post } from "@/app/(posts)/lib/models/Post"
import { PostEditModal } from "@/app/(posts)/components/PostEditModal"
import { useState } from "react"

export const EditPostButton = (props: { post: Post }) => {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <div>
            <Button
                onClick={() => setIsEditing(true)}
                type="ghost"
                className={"text-3xl text-black"}>
                Edit
            </Button>
            <PostEditModal
                post={props.post}
                isEditing={isEditing}
                onClose={() => setIsEditing(false)}
            />
        </div>
    )
}
