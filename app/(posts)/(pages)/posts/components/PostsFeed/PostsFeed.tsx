"use client";

import React from "react";
import {usePostsFeed} from "@/app/(posts)/(pages)/posts/components/PostsFeed/usePostsFeed";
import {TEXTS} from "@/app/(posts)/(pages)/posts/components/PostsFeed/texts";
import {PostsSearch} from "@/app/(posts)/(pages)/posts/components/PostsSearch/PostsSearch";
import {Post} from "@/app/(posts)/lib/models/Post";
import {PostFeedItem} from "@/app/(posts)/(pages)/posts/components/PostsFeed/PostFeedItem";

export const PostsFeed = () => {
    const {posts, isLoading} = usePostsFeed();

    return (
        <div className="w-full flex flex-col gap-4 justify-center items-center">
            {isLoading ? <span>{TEXTS.loadingText}</span> :
                <PostsSearch posts={posts}>
                    {(filteredPosts: Post[]) =>
                        filteredPosts.length === 0 ?
                            <span>{TEXTS.NOT_ITEMS_FOUND}</span> :
                            <div className="grid">
                                {filteredPosts.map((post: Post) => <PostFeedItem
                                    key={post.id}
                                    post={post}/>)}
                            </div>}
                </PostsSearch>
            }
        </div>
    )
}