import {Post} from "@/app/(posts)/lib/models/Post";
import {Card} from "@/components/Card";

export const PostFeedItem = ({post}: { post: Post }) => {
    return (
        <Card title={post.title} description={post.content} />
    )
}