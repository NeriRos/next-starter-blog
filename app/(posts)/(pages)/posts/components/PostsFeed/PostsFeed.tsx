"use client";

import React from "react";

import Styles from './PostsFeed.module.css';
import {usePostsFeed} from "@/app/(posts)/(pages)/posts/components/PostsFeed/usePostsFeed";
import {TEXTS} from "@/app/(posts)/(pages)/posts/components/PostsFeed/texts";
import {PostsSearch} from "@/app/(posts)/(pages)/posts/components/PostsSearch/PostsSearch";
import {Post} from "@/app/(posts)/lib/models/Post";
import clsx from "clsx";
import {PostFeedItem} from "@/app/(posts)/(pages)/posts/components/PostsFeed/PostFeedItem";

export const PostsFeed = () => {
    const {posts, isLoading} = usePostsFeed();

    return (
        <div className={Styles.postsContainer}>
            {isLoading ? <span>{TEXTS.loadingText}</span> :
                <PostsSearch posts={posts}>
                    {(filteredPosts: Post[]) =>
                        filteredPosts.length === 0 ?
                            <span>{TEXTS.NOT_ITEMS_FOUND}</span> :
                            <div className={clsx([Styles.posts, 'grid'])}>
                                {filteredPosts.map((post: Post) => <PostFeedItem
                                    key={post.id}
                                    post={post}/>)}
                            </div>}
                </PostsSearch>
            }
        </div>
    )
}