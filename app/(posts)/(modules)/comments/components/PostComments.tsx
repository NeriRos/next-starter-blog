import {IPost} from "@/app/(posts)/lib/interfaces/IPost";
import {commentsService} from "@/app/(posts)/(modules)/comments/lib/services/CommentsService";
import {Comment} from "@/app/(posts)/(modules)/comments/components/Comment";

type CommentProps = {
    post: IPost
}

export const PostComments = async (props: CommentProps) => {
    if (!props.post.id) return null;

    const comments = await commentsService.getAllComments(props.post.id);

    return (
        <div className="flex flex-col space-y-2">
            {comments.map(comment => (
                <Comment comment={comment} key={comment.id}/>
            ))}
        </div>
    )
}