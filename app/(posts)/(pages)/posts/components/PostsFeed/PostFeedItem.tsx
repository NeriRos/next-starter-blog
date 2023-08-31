import { Post } from "@/app/(posts)/lib/models/Post"
import { Card } from "@/components/Card"
import { DeletePostButton } from "@/app/(posts)/components/DeletePostButton"
import { useState } from "react"
import { EditPostButton } from "@/app/(posts)/components/EditPostButton"

export const PostFeedItem = ({ post }: { post: Post }) => {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <Card
            title={post.title}
            description={post.content}
            actions={[
                <DeletePostButton postId={post.id} />,
                <EditPostButton post={post} />,
            ]}
        />
    )
}
