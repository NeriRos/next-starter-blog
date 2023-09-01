"use client"

import { Post } from "@/app/(posts)/lib/models/Post"
import { Card } from "@/components/Card"
import { DeletePostButton } from "@/app/(posts)/components/DeletePostButton"
import { EditPostButtonWithModal } from "@/app/(posts)/components/EditPostButtonWithModal"

export const PostFeedItem = ({ post }: { post: Post }) => {
    return (
        <Card
            className={"w-full max-w-lg"}
            title={post.title}
            description={post.content}
            actions={[
                <DeletePostButton
                    key={"delete"}
                    postId={post.id}
                />,
                <EditPostButtonWithModal
                    key={"edit"}
                    post={post}
                />,
            ]}
        />
    )
}
