import "server-only"
import { ICategory } from "@/app/(posts)/(modules)/categories/lib/interfaces/ICategory"
import { IPost } from "@/app/(posts)/lib/interfaces/IPost"

export class Category implements ICategory {
    constructor(
        public name: string,
        public posts: IPost[],
        public id: number
    ) {}

    public static fromJson(json: ICategory): Category {
        const { id, name, posts } = json
        if (!id) throw new Error("Comment must have an id")
        return new Category(name, posts, id)
    }

    public toJson(): any {
        return {
            id: this.id,
            name: this.name,
            posts: this.posts,
        }
    }
}
