import "server-only";
import {IPost} from "@/app/(posts)/lib/interfaces/IPost";

export class Post implements IPost {
    constructor(
        public title: string,
        public content: string,
        public authorId: number,
        public id: number
    ) {
    }

    public static fromJson(json: any): Post {
        const {title, content, authorId, id} = json;
        return new Post(title, content, authorId, id);
    }

    public toJson(): any {
        return {
            title: this.title,
            content: this.content,
            authorId: this.authorId,
            id: this.id
        }
    }
}
