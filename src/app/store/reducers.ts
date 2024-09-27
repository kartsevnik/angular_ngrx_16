// src/app/store/reducers.ts

import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './actions';
import { AppState, initialState } from './state';

/**
 * Создаем редьюсер для управления состоянием счетчика.
 */
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    counter: state.counter + 1,
  })),
  on(decrement, (state) => ({
    ...state,
    counter: state.counter - 1,
  })),
  on(reset, (state) => ({
    ...state,
    counter: 0,
  }))
);

/**
 * Экспортируем редьюсер для использования в StoreModule.
 */
export function counterReducer(state: AppState | undefined, action: Action) {
  return _counterReducer(state, action);
}
