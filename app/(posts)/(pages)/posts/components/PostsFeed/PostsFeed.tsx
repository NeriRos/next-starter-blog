"use client"

import React, {useState} from "react";
import {PostsSearch} from "@/app/(posts)/(pages)/posts/components/PostsSearch/PostsSearch";
import {Post} from "@/app/(posts)/lib/models/Post";
import {PostFeedItem} from "@/app/(posts)/(pages)/posts/components/PostsFeed/PostFeedItem";

export const PostsFeed = (props: { posts: Post[] }) => {
    const [filteredPosts, setFilteredPosts] = useState<Post[]>(props.posts)


    return <>
        <PostsSearch posts={filteredPosts} onPostsFilter={(posts: Post[]) => setFilteredPosts(posts)}/>
        {filteredPosts.map((post: Post) => <PostFeedItem key={post.id} post={post}/>)}
    </>

}