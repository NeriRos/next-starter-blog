import { Button } from "@/components/Button"
import { Input } from "@/components/Form/Input/Input"
import { TextArea } from "@/components/Form/TextArea"
import { IPost } from "@/app/(posts)/lib/interfaces/IPost"
import { postsService } from "@/app/(posts)/lib/services/PostsService"
import { revalidatePath } from "next/cache"

export const PostEditForm = (props: { post: IPost }) => {
    const editPost = async (formData: FormData) => {
        "use server"
        if (!props.post.id) return null

        await postsService.updatePost(props.post.id, {
            title: formData.get("title") as string,
            content: formData.get("content") as string,
        })

        revalidatePath("/posts")
    }

    return (
        <form action={editPost}>
            <div className="flex flex-col space-y-2 p-3">
                <Input
                    defaultValue={props.post.title}
                    type="text"
                    name={"title"}
                />
                <TextArea
                    defaultValue={props.post.content}
                    name={"content"}
                    rows={5}
                />
                <Button
                    type="ghost"
                    className={"text-3xl text-black"}>
                    Save
                </Button>
            </div>
        </form>
    )
}