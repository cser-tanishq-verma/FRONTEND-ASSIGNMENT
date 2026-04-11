import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
 view: string = ''; 
  taskInput: string = '';
  filter: string = 'all';

  tasks: any[] = [];

  setView(val: string) {
    this.view = val;
  }

  addTask() {
    if (this.taskInput.trim()) {
      this.tasks.push({
        title: this.taskInput,
        status: 'pending'
      });
      this.taskInput = '';
    }
  }

  setFilter(val: string) {
    this.filter = val;
  }

  getFilteredTasks() {
    if (this.filter === 'pending') {
      return this.tasks.filter(t => t.status === 'pending');
    }
    if (this.filter === 'done') {
      return this.tasks.filter(t => t.status === 'done');
    }
    return this.tasks;
  }
  
}