import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'taskapp';
  currview = 'question';
  quesindex = 0;
  taskindex = 0;
  
  questions = [
    'what is angular?',
    'what is spring boot',
    'what is spring',
    'what is devops',
    'what is raeact?'
  ];
  
  tasks = [
    'task 1 - Come to clg',
    'task 2 - start laptop',
    'task 3 - revise concept',
    'task 4 - stydy',
    'task 5 - go home'
  ];
  
  nextques() {
    this.currview = 'question';
    this.quesindex = (this.quesindex + 1) % this.questions.length;
  }
  
  nexttask() {
    this.currview = 'task';
    this.taskindex = (this.taskindex + 1) % this.tasks.length;
  }
}