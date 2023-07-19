export class Post {
    constructor(
        public title: string,
        public content: string,
        public authorId: string,
        public id?: string
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