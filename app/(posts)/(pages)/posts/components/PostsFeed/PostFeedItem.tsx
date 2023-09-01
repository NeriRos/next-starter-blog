"use client"

import { Post } from "@/app/(posts)/lib/models/Post"
import { Card } from "@/components/Card"
import { DeletePostButton } from "@/app/(posts)/components/DeletePostButton"
import { EditPostButtonWithModal } from "@/app/(posts)/components/EditPostButtonWithModal"
import { useUserRole } from "@/app/(authentication)/context/UserContext"

export const PostFeedItem = ({ post }: { post: Post }) => {
    const { isAdmin } = useUserRole()

    return (
        <Card
            className={"w-full max-w-lg"}
            title={post.title}
            description={post.content}
            actions={
                isAdmin
                    ? [
                          <DeletePostButton
                              key={"delete"}
                              postId={post.id}
                          />,
                          <EditPostButtonWithModal
                              key={"edit"}
                              post={post}
                          />,
                      ]
                    : []
            }
        />
    )
}
