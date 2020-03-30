import { Todo } from "models/ToDo";


export class ToDoService {
    public array: Todo[] = [
       // new Todo("ToDo1", false),
        //new Todo("ToDo2", true),
        //new Todo("ToDo3", false),
    ];

    public getToDo(): Todo[] {
        return this.array;
    }
}