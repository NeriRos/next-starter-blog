"use client";

import {useQuery} from "@tanstack/react-query";
import {getAllPosts} from "@/app/(posts)/(pages)/posts/queries/GetAllPosts";

export const usePostsFeed = () => {
    const {error, data, isLoading} = useQuery({
        queryKey: [`posts`], queryFn: () => getAllPosts(),
        initialData: [],
    });

    return {
        error,
        posts: data,
        isLoading,
    }
}