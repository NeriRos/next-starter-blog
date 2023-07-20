import {Post} from "@/app/posts/lib/models/Post";
import {PostsDbRepository} from "@/app/posts/lib/repositories/PostsDbRepository";

export interface PostsService {
    getAllPosts(): Promise<Post[]>;

    getPost(id: string): Promise<Post>;

    createPost(post: Post): Promise<Post>;

    updatePost(id: string, post: Post): Promise<Post>;

    deletePost(id: string): Promise<void>;
}

export type PostsServiceDependencies = {
    dbRepository: PostsDbRepository
}

export const createPostsService = (dependencies: PostsServiceDependencies): PostsService => {
    const getAllPosts = async (): Promise<Post[]> => {
        const posts = await dependencies.dbRepository.getAll();

        return posts.map(post => Post.fromJson(post));
    }

    const getPost = async (id: string): Promise<Post> => {
        const post = await dependencies.dbRepository.get(id);

        return Post.fromJson(post);
    }

    const createPost = async (post: Post): Promise<Post> => {
        const createdPost = await dependencies.dbRepository.create(post.toJson());

        return Post.fromJson(createdPost);
    }

    const updatePost = async (id: string, post: Post): Promise<Post> => {
        const updatedPost = await dependencies.dbRepository.update(id, post.toJson());

        return Post.fromJson(updatedPost);
    }

    const deletePost = async (id: string): Promise<void> => {
        await dependencies.dbRepository.deleteItem(id);
    }

    return {
        getAllPosts,
        getPost,
        createPost,
        updatePost,
        deletePost
    }
}