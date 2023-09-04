"use client"

import { Button } from "@/components/Button"
import { PostEditModal } from "@/app/(posts)/components/PostEditModal"
import { useState } from "react"
import { IPost } from "@/app/(posts)/lib/interfaces/IPost"

export const EditPostButtonWithModal = (props: { post: IPost }) => {
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
