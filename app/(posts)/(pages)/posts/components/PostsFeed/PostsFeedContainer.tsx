import React from "react";
import {Post} from "@/app/(posts)/lib/models/Post";
import {PostsFeed as Client} from "@/app/(posts)/(pages)/posts/components/PostsFeed/PostsFeed";
import {createPostsService} from "@/app/(posts)/lib/services/PostsService";
import {createPostsDbRepository} from "@/app/(posts)/lib/repositories/PostsDbRepository";

export const PostsFeed = async () => {
    const service = createPostsService({
        dbRepository: createPostsDbRepository()
    })

    const posts = await service.getAllPosts()
    const postObjects = posts.map((post) => post.toJson());

    return (
        <div className="w-full flex flex-col gap-4 justify-center items-center">
            <Client posts={postObjects}/>
        </div>
    )
}