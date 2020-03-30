
export class Todo {
    public id: number;
    public title: string;
    public isDone: boolean;
    public created: Date = new Date(new Date());
    public dueDate: Date;
}