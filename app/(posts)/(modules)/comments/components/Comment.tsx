import {IComment} from "@/app/(posts)/(modules)/comments/lib/interfaces/IComment";
import {usersService} from "@/app/(authentication)/lib/services/UsersService";

type CommentProps = {
    comment: IComment
}

export const Comment = async (props: CommentProps) => {
    const author = await usersService.getUserById(props.comment.authorId);

    if (!author) return null;

    return (
        <div className="bg-white p-4 rounded shadow-md w-3/4 mx-auto">
            <div className="flex items-center mb-2">
                <div className="bg-gray-300 rounded-full w-8 h-8 mr-2"></div>
                <div className="text-xl font-bold">{author?.name}</div>
            </div>
            <div className="text-gray-700">
                {props.comment.content}
            </div>
        </div>
    )
}