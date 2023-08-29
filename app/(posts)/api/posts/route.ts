import {createPostsService} from "@/app/(posts)/lib/services/PostsService";
import {createPostsDbRepository} from "@/app/(posts)/lib/repositories/PostsDbRepository";
import {NextResponse} from "next/server";

const postsService = createPostsService({
    dbRepository: createPostsDbRepository()
})

export const GET = async () => {
    const posts = await postsService.getAllPosts();

    return NextResponse.json(posts);
}