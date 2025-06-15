import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface todoDataType {
  id: number,
  todoName: string,
  completed: boolean
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  inputTodo: string = "";
  allTodos: todoDataType[] = [];

  handleSetNewTodo() {
    if (this.inputTodo.trim() !== "") {
      const newTodo: todoDataType = {
        id: Date.now(),
        todoName: this.inputTodo,
        completed: false
      };
      this.allTodos.push(newTodo);
      this.inputTodo = "";
    }
  }
}
