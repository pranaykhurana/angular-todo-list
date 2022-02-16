import { Component, OnInit } from '@angular/core';
import {Todo} from "../shared/todo.model";
import {DataService} from "../shared/data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] | undefined;
  showValidationErrors: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm) {
    if(form.invalid) this.showValidationErrors = true;
    else {
      this.dataService.addTodo(new Todo(form.value.text));
      form.resetForm();
      this.showValidationErrors = false;
    }
  }

}
