import Styles from './PostsSearch.module.css';
import {Post} from "@/app/(posts)/lib/models/Post";
import {TEXTS} from "@/app/(posts)/(pages)/posts/components/PostsSearch/texts";
import {usePostsSearch} from "@/app/(posts)/(pages)/posts/components/PostsSearch/usePostsSearch";

export const PostsSearch = (props: {
    posts: Post[],
    children: (posts: Post[]) => React.ReactNode | React.ReactNode[],
    onPostsFilter?: (posts: Post[]) => void,
}) => {
    const {filteredPosts, searchPosts, searchText} = usePostsSearch(props.posts, props.onPostsFilter);

    return <>
        <input placeholder={TEXTS.SEARCH_PLACEHOLDER} className={Styles.searchInput} type="text" value={searchText}
               onChange={(e) => searchPosts(e.target.value)}/>
        {props.children(filteredPosts)}
    </>
}