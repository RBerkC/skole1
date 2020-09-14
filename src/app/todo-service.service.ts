import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from "src/app/models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  url = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private http:HttpClient) { 
  
  }
  getTodosHttp():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url)
  }
}