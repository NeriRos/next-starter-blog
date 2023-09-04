import { Button } from "@/components/Button"
import { postsService } from "@/app/(posts)/lib/services/PostsService"
import { revalidatePath } from "next/cache"

export const DeletePostButton = (props: { postId: number }) => {
    const deletePost = async () => {
        "use server"
        await postsService.deletePost(props.postId)
        revalidatePath("/posts")
    }

    return (
        <div className="flex flex-col space-y-2">
            <form action={deletePost}>
                <Button
                    type="ghost"
                    className={"text-3xl text-black"}>
                    Delete
                </Button>
            </form>
        </div>
    )
}
