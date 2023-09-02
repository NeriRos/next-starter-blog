import "server-only";
import {IComment} from "@/app/(posts)/(modules)/comments/lib/interfaces/IComment";

export class Comment implements IComment {
    constructor(
        public content: string,
        public postId: number,
        public authorId: number,
        public id: number
    ) {
    }

    public static fromJson(json: any): Comment {
        const {content, postId, authorId, id} = json;
        return new Comment(content, postId, authorId, id);
    }

    public toJson(): any {
        return {
            content: this.content,
            postId: this.postId,
            authorId: this.authorId,
            id: this.id
        }
    }
}
