import {Button} from "@/components/Button";
import axios from "axios";

export const DeletePostButton = async (props: { postId: number }) => {

    const deletePost = async () => {
        await axios.delete(`/posts/${props.postId}`);
    }

    return <div className="flex flex-col space-y-2">
        <Button onClick={deletePost} type="ghost" className={"text-3xl text-black"}>
            Delete
        </Button>
    </div>
}