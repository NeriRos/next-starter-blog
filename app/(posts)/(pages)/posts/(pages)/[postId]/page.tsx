import {postsService} from "@/app/(posts)/lib/services/PostsService";
import {notFound} from "next/navigation";
import {CreateCommentForm} from "@/app/(posts)/(modules)/comments/components/CreateCommentForm";

type PostPageProps = {
    params: { postId: number };
}

export default async function PostPage(props: PostPageProps) {
    const postId = Number(props.params.postId);

    if (isNaN(postId)) return notFound();

    const post = await postsService.getPost(postId)

    return <div className="flex flex-col items-center justify-center h-screen">
        {post.content}

        <CreateCommentForm post={post}/>
    </div>
}
