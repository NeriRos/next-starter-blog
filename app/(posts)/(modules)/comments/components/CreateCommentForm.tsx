import { Button } from "@/components/Button"
import { commentsService } from "@/app/(posts)/(modules)/comments/lib/services/CommentsService"
import { IComment } from "@/app/(posts)/(modules)/comments/lib/interfaces/IComment"
import { IPost } from "@/app/(posts)/lib/interfaces/IPost"
import { authenticationService } from "@/app/(authentication)/lib/services/AuthenticationService"
import { TextArea } from "@/components/Form/TextArea"

type CreateCommentButtonProps = {
    post: IPost
}

export const CreateCommentForm = async (props: CreateCommentButtonProps) => {
    async function createComment(formData: FormData) {
        "use server"
        const author = await authenticationService.getCurrentUser()
        const content = formData.get("content") as string

        if (!author || !content || !props.post.id) {
            // TODO: show error
            return
        }

        const newComment: IComment = {
            postId: props.post.id,
            userId: Number(author.id),
            content,
        }

        await commentsService.createComment(newComment)
    }

    return (
        <div className="flex flex-col space-y-2">
            <form action={createComment}>
                <TextArea
                    name="content"
                    className="w-full"
                    placeholder={"Comment on the post"}
                />
                <Button
                    type="ghost"
                    className={"text-3xl text-black"}>
                    +
                </Button>
            </form>
        </div>
    )
}
