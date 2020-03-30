import { autoinject } from 'aurelia-framework';
import { APIService } from '../services/APIService';
import { Todo } from 'models/ToDo';
import { Router } from 'aurelia-router';

@autoinject
export class Delete {
    public id: number;
    constructor(private myToDo: Todo, private service: APIService, private router: Router) {
    }
    async activate(params: { id: number }) {
        this.id = await params.id;
    }
    public async Save(): Promise<void> {
        await this.service.deleteToDo(this.id);
        this.router.navigateToRoute('app');
    }
}