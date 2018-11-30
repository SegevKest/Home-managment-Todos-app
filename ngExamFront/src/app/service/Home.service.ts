import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from 'Modals/Todo';
import { FamMember } from 'Modals/FamMember';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  allTodos: Todo[] = [];
  allFamily: FamMember[] = [];

  myTodosUrl: string = 'http://localhost:3000/todo';
  myFamilyUrl: string = 'http://localhost:3000/family';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    // this.getAllTodos().subscribe(data => this.allTodos = data);
    this.getAllFamily().subscribe(family => {this.allFamily = family; console.log(family); });
    this.getCombinedTables();
  }

  // Todo Functions
 // Get all
  getAllTodos(): Observable<Todo[]>
  {
     return this.http.get<Todo[]>(this.myTodosUrl);
  }
  // Add Todo
  addTodo(todoObj: Todo): Observable<Todo>
  {
    return this.http.post<Todo>(this.myTodosUrl, todoObj, this.httpOptions);
  }
  // Delete Todo
  deleteTodo(id: string): Observable<Todo> //delete
  {
    const directUrl = `${this.myTodosUrl}/${id}`;
    return this.http.delete<Todo> (directUrl);
  }


  // Family Functions
  // Get all
  getAllFamily(): Observable<FamMember[]>
  {
     return this.http.get<FamMember[]>(this.myFamilyUrl);
  }

  // Get FamilyMember
  getAFamilyMemberByID(id: string): Observable<FamMember>
  {
    const directUrl = `${this.myFamilyUrl}/${id}`;
    return this.http.get<FamMember>(directUrl);
  }

  updateStack(): void {
    this.getCombinedTables();
  }

  getCombinedTables(): void {

      this.getAllTodos().subscribe(todos => {
        todos.forEach(todo => {
          const id: string = todo.famMemberID;
          this.allFamily.forEach(member => {
            if (member._id === id) {
              todo.famMemberID = member.name;
              this.allTodos.push(todo);
            }
            });
        });
  });
}
}
