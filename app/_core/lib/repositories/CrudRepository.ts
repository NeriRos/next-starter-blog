import "server-only"

export interface CrudRepository<T> {
    getAll(): Promise<T[]>

    get(id: number): Promise<T | null>

    create(item: T): Promise<T>

    update(id: number, item: T): Promise<T>

    deleteItem(id: number): Promise<void>
}
