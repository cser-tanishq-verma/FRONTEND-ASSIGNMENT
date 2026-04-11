import { Component, signal } from '@angular/core';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { Http } from './http/http';

@Component({
  selector: 'app-root',
  imports: [ReactiveForms,Http],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myApp');
}
