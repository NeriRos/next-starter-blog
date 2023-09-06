import "server-only"

import { CrudRepository } from "@/lib/repositories/CrudRepository"
import prisma from "@/lib/prisma"
import { ICategory } from "@/app/(posts)/(modules)/categories/lib/interfaces/ICategory"

export interface CategoriesDbRepository extends CrudRepository<ICategory> {}

export const createCategoriesDbRepository = (): CategoriesDbRepository => {
    const getAll = async (): Promise<ICategory[]> => {
        return prisma.category.findMany()
    }

    const get = async (id: number): Promise<ICategory | null> => {
        return prisma.category.findUnique({
            where: { id },
        })
    }

    const create = async (item: ICategory): Promise<ICategory> => {
        return prisma.category.create({
            data: item,
        })
    }

    const update = async (id: number, item: ICategory): Promise<ICategory> => {
        return prisma.category.update({
            where: { id },
            data: item,
        })
    }

    const deleteItem = async (id: number): Promise<void> => {
        await prisma.category.delete({
            where: { id },
        })
    }

    return {
        getAll,
        get,
        create,
        update,
        deleteItem,
    }
}

export const categoriesDbRepository = createCategoriesDbRepository()
