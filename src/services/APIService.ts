import { HttpClient, json } from 'aurelia-fetch-client';
import { Todo } from 'models/ToDo'

export class APIService {
    private APIURL: string = "https://localhost:44358/api/todo";
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }
    //get all ToDo's
    public async getAllToDos(): Promise<Todo[]> {
        let result = await this.httpClient.fetch(this.APIURL, {
            method: 'get'
        });

        if (result.ok)
            return result.json();
    }

    //get One ToDo
    public async getToDo(id: number): Promise<Todo> {
        let result = await this.httpClient.fetch(this.APIURL + "/" + id, {
            method: 'get'
        });
        if (result.ok)
            return result.json();


    }

    //create one ToDo
    public async createToDo(item: Todo): Promise<any> {

        let result = await this.httpClient.fetch(this.APIURL, {
            method: 'post',
            body: json(item)
        });
        //console.log(result.json());
        if (result.ok) {
            return result.json();
        }
        else
            return null;
    }

    //edit one ToDo
    public async editToDo(item: Todo): Promise<void> {
        let change = await this.httpClient.fetch(this.APIURL + "/" + item.id, {
            method: 'put',
            body: json(item)
        });



    }

    //delete one ToDo
    public async deleteToDo(id: number): Promise<void> {
        let result = await this.httpClient.fetch(this.APIURL + "/" + id, {
            method: 'delete'
        });
        //if (result.ok) {
        //  return result.json()
        //}
    }

}