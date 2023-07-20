import {CrudRepository} from "@/lib/repositories/CrudRepository";
import {Post} from "@/app/posts/lib/models/Post";
import prisma from "@/lib/prisma";

export interface PostsDbRepository extends CrudRepository<Post> {

}

export const createPostsDbRepository = (): PostsDbRepository => {
    const getAll = async (): Promise<Post[]> => {
        return await prisma.post.findMany();
    }

    const get = async (id: string): Promise<Post> => {
        return await prisma.post.findUnique({
            where: {id}
        });
    }

    const create = async (item: Post): Promise<Post> => {
        return await prisma.post.create({
            data: item
        });
    }

    const update = async (id: string, item: Post): Promise<Post> => {
        return await prisma.post.update({
            where: {id},
            data: item
        });
    }

    const deleteItem = async (id: string): Promise<void> => {
        await prisma.post.delete({
            where: {id}
        });
    }

    return {
        getAll,
        get,
        create,
        update,
        deleteItem
    }
}