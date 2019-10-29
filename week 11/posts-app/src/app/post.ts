export class post {
    userId: number;
    id: number;
    title: string;
    body: string;
    constructor(userId: number,id: number,title: string,body: string){
        this.userId = userId;
        this.title = title;
        this.id = id;
        this.body = body;
    }
}