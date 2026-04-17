import { Component, inject } from '@angular/core';
import { Counter as CounterService } from '../counter';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  c = inject(CounterService);

  get count() {
    return this.c.count;
  }

  increment() {
    this.c.incrementCount();
  }

  decrement() {
    this.c.decrementCount();
  }

  reset() {
    this.c.resetCount();
  }
}
