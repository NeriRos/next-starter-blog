"use client"

import React from "react"
import { PostsSearch } from "@/app/(posts)/(pages)/posts/components/PostsSearch/PostsSearch"
import { Post } from "@/app/(posts)/lib/models/Post"
import { PostFeedItem } from "@/app/(posts)/(pages)/posts/components/PostsFeed/PostFeedItem"
import { usePostsFeed } from "@/app/(posts)/(pages)/posts/components/PostsFeed/usePostsFeed"

export const PostsFeed = () => {
    const { posts, filteredPosts, updatePosts } = usePostsFeed()

    return (
        <div className="w-full flex flex-col gap-4 justify-center items-center">
            <PostsSearch
                posts={posts}
                onPostsFilter={updatePosts}
            />
            {filteredPosts.map((post: Post) => (
                <PostFeedItem
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    )
}
