import { createPostsService } from "@/app/(posts)/lib/services/PostsService"
import { Post } from "@/app/(posts)/lib/models/Post"
import { Button } from "@/components/Button"
import { createPostsDbRepository } from "@/app/(posts)/lib/repositories/PostsDbRepository"
import { revalidatePath } from "next/cache"

export const CreatePostButton = async () => {
    async function createPost() {
        "use server"

        const service = createPostsService({
            dbRepository: createPostsDbRepository(),
        })

        await service.createPost(
            Post.fromJson({
                title: "New post",
                content: "New post content",
                authorId: 1,
            })
        )

        revalidatePath("/posts")
    }

    return (
        <div className="flex flex-col space-y-2">
            <form action={createPost}>
                <Button
                    type="ghost"
                    className={"text-3xl text-black"}>
                    +
                </Button>
            </form>
        </div>
    )
}
