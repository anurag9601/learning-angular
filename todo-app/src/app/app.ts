import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface todoDataType {
  id: number,
  todoName: string,
  completed: boolean
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgFor, NgIf, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  inputTodo: string = "";
  allTodos: todoDataType[] = [];
  editTodoId: number | null = null;
  editTodo: string | null = null;

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

  handleDeleteTodo(id: number) {
    const updatedTodoList = this.allTodos.filter((todo) => todo.id !== id);

    this.allTodos = [...updatedTodoList];
  }

  handleEditTodo(todoId: number, todoName: string) {
    this.editTodoId = todoId;
    this.editTodo = todoName;
  }

  handleSetEditNewTodo() {
    const updatedTodoList = [...this.allTodos];
    updatedTodoList.forEach((todo) => {
      if (todo.id === this.editTodoId && this.editTodo) {
        todo.todoName = this.editTodo
      }
    });

    this.allTodos = [...updatedTodoList];

    this.editTodoId = null;
    this.editTodo = null;
  }
}
