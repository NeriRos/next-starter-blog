import "server-only"
import {
    commentsDbRepository,
    CommentsDbRepository
} from "@/app/(posts)/(modules)/comments/lib/repositories/CommentsDbRepository";
import {Comment} from "@/app/(posts)/(modules)/comments/lib/models/Comment";
import {IComment} from "@/app/(posts)/(modules)/comments/lib/interfaces/IComment";

export interface CommentsService {
    getAllComments(): Promise<Comment[]>

    getComment(id: number): Promise<Comment | null>

    createComment(comment: IComment): Promise<Comment>

    updateComment(id: number, comment: Comment): Promise<Comment>

    deleteComment(id: number): Promise<void>
}

export type CommentsServiceDependencies = {
    dbRepository: CommentsDbRepository
}

export const createCommentsService = (
    dependencies: CommentsServiceDependencies
): CommentsService => {
    const getAllComments = async (): Promise<Comment[]> => {
        const posts = await dependencies.dbRepository.getAll()

        return posts.map((post) => Comment.fromJson(post))
    }

    const getComment = async (id: number): Promise<Comment | null> => {
        const post = await dependencies.dbRepository.get(id)

        if (!post)
            return null

        return Comment.fromJson(post)
    }

    const createComment = async (post: Comment): Promise<Comment> => {
        const createdComment = await dependencies.dbRepository.create(post)

        return Comment.fromJson(createdComment)
    }

    const updateComment = async (id: number, post: Comment): Promise<Comment> => {
        const updatedComment = await dependencies.dbRepository.update(
            id,
            post.toJson()
        )

        return Comment.fromJson(updatedComment)
    }

    const deleteComment = async (id: number): Promise<void> => {
        await dependencies.dbRepository.deleteItem(id)
    }

    return {
        getAllComments,
        getComment,
        createComment,
        updateComment,
        deleteComment,
    }
}

export const commentsService = createCommentsService({
    dbRepository: commentsDbRepository,
});
