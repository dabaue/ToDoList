import { Todo } from '../models/ToDo';
//import { ToDoService } from '../services/ToDoService';
import { autoinject } from 'aurelia-framework';
import { APIService } from '../services/APIService';

@autoinject
export class List {
    public todos: Todo[];
    public datenow: Date = new Date();
    //private serive: ToDoService,
    constructor(private myToDo: Todo, private service: APIService) {
    }

    async activate() {
        this.todos = await this.service.getAllToDos();
    }

    public myMethode(onetodo: Todo): string {

        if (onetodo.isDone) {
            return "table-success";
        }

        const nowDate = new Date(Date.now());
        const finishDate = new Date(onetodo.dueDate);

        if (nowDate > finishDate) {
            return "table-danger";
        }

    }

}