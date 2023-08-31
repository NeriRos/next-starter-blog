"use client"

import React, { useEffect } from "react"
import { PostsSearch } from "@/app/(posts)/(pages)/posts/components/PostsSearch/PostsSearch"
import { Post } from "@/app/(posts)/lib/models/Post"
import { PostFeedItem } from "@/app/(posts)/(pages)/posts/components/PostsFeed/PostFeedItem"
import { usePostsFeed } from "@/app/(posts)/(pages)/posts/components/PostsFeed/usePostsFeed"

export const PostsFeed = (props: { posts: Post[] }) => {
    const { filteredPosts, setPosts } = usePostsFeed(props.posts)

    return (
        <>
            <PostsSearch
                posts={filteredPosts}
                onPostsFilter={setPosts}
            />
            {filteredPosts.map((post: Post) => (
                <PostFeedItem
                    key={post.id}
                    post={post}
                />
            ))}
        </>
    )
}
