import {createPostsService} from "@/app/(posts)/lib/services/PostsService";
import {createPostsDbRepository} from "@/app/(posts)/lib/repositories/PostsDbRepository";
import {NextApiRequest} from "next";
import {revalidatePath} from "next/cache";
import {NextResponse} from "next/server";

const postsService = createPostsService({
    dbRepository: createPostsDbRepository()
})

type DeletePostRequest = NextApiRequest & {
    params: {
        postId: number;
    }
}

export const DELETE = async (req: Request, ctx: DeletePostRequest) => {
    const id = Number(ctx.params.postId);

    await postsService.deletePost(id);

    return NextResponse.json({success: true})
}