import { autoinject } from 'aurelia-framework';
import { APIService } from '../services/APIService';
//import { bindable } from "aurelia-framework"
import { Todo } from 'models/ToDo';
import { Router } from 'aurelia-router';

@autoinject
export class New {
    todos: Todo = new Todo();
    constructor(private service: APIService, private router: Router) {
    }

    public async Save(): Promise<any> {
        await this.service.createToDo(this.todos);
        this.router.navigateToRoute('app');
    }
}