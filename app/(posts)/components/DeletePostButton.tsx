import { Button } from "@/components/Button"
import axios from "axios"

export const DeletePostButton = (props: { postId: number }) => {
    const deletePost = async () => {
        "use server"
        await axios.delete(`/posts/${props.postId}`)
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
