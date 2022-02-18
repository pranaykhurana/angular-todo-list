import {Injectable} from '@angular/core';
import {Todo} from "./todo.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = []

  constructor() { }

  getAllTodos() {
    //@ts-ignore
    let todos = JSON.parse(localStorage.getItem('todos'));
    if (todos !== null) this.todos = todos
    return this.todos
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.setLocalStorage();
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo
    this.setLocalStorage();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
