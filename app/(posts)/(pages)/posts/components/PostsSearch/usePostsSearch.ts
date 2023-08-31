import { useEffect, useRef, useState } from "react"
import { useSearch } from "@/app/_core/hooks/useSearch"
import { Post } from "@/app/(posts)/lib/models/Post"

export const usePostsSearch = (
    posts: Post[],
    onPostsFilter?: (posts: Post[]) => void
) => {
    const [searchText, setSearchText] = useState<string>("")
    const filteredPosts = useSearch<Post>(posts, searchText, (post: Post) => {
        return [post.title, post.content].join(" ")
    })
    const filteredPostsCount = useRef<number>(posts.length)

    useEffect(() => {
        if (filteredPosts.length !== filteredPostsCount.current) {
            onPostsFilter?.(filteredPosts)
            filteredPostsCount.current = filteredPosts.length
        }
    }, [filteredPosts])

    const searchPosts = (searchText: string) => {
        setSearchText(searchText)
    }

    return {
        searchPosts,
        filteredPosts,
        searchText,
    }
}
