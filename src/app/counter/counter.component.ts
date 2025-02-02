// src/app/components/counter/counter.component.ts

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store/actions';
import { selectCounter } from 'src/app/store/selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  counter$: Observable<number>;

  constructor(private store: Store) {
    this.counter$ = this.store.select(selectCounter);
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
