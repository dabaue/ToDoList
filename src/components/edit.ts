import { autoinject } from 'aurelia-framework';
import { APIService } from '../services/APIService';
import { Todo } from 'models/ToDo';
import { Router } from 'aurelia-router';

@autoinject
export class EditCreatPage {
    public todos: Todo = new Todo();

    constructor(private myToDo: Todo, private service: APIService, private router: Router) {
    }



    async activate(params: { id: number }) {
        this.todos = await this.service.getToDo(params.id);
    }

    public async Save(): Promise<void> {
        //await this.service.deleteToDo(this.todos.id);
        //await this.service.createToDo(this.todos);
        await this.service.editToDo(this.todos);
        //console.log(this.todos);
        this.router.navigateToRoute('app');
    }

}