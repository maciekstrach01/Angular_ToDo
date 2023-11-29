import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

interface TodoWithCategory extends Todo {
  category: string;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!: TodoWithCategory[];
  inputTodo: string = "";
  selectedCategory: string | null = null;

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Complete the analytics project',
        completed: false,
        dateAdded: new Date(),
        category: 'business' 
      },
      {
        content: 'Helping our neighbours',
        completed: false,
        dateAdded: new Date(),
        category: 'personal'
      }
    ];
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i === id) {
        v.completed = !v.completed;
      }
      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    if (this.inputTodo.trim() !== '' && this.selectedCategory) {
      this.todos.push({
        content: this.inputTodo,
        completed: false,
        dateAdded: new Date(),
        category: this.selectedCategory
      });
      this.inputTodo = "";
    }
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}










