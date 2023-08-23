import React, {Suspense} from "react";
import {TEXTS} from "@/app/(posts)/(pages)/posts/components/PostsFeed/texts";
import {Post} from "@/app/(posts)/lib/models/Post";
import prisma from "@/lib/prisma";
import {PostsFeed as Client} from "@/app/(posts)/(pages)/posts/components/PostsFeed/PostsFeed";

export const PostsFeed = async () => {
    const posts = await prisma.post.findMany();
    const postObjects = posts.map((post) => Post.fromJson(post));

    return (
        <div className="w-full flex flex-col gap-4 justify-center items-center">
            <Suspense fallback={<span>{TEXTS.loadingText}</span>}>
                <Client posts={postObjects}/>
            </Suspense>
        </div>
    )
}