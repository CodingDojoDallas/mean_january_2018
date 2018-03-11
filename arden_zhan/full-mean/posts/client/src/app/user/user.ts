export class User {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    posts: string[];

    constructor() {
        this.name = "";
        this.posts = [];
    }
}
