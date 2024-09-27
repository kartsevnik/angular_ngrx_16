// src/app/store/actions.ts

import { createAction } from '@ngrx/store';

/**
 * Действие для увеличения счетчика.
 */
export const increment = createAction('[Counter] Increment');

/**
 * Действие для уменьшения счетчика.
 */
export const decrement = createAction('[Counter] Decrement');

/**
 * Действие для сброса счетчика.
 */
export const reset = createAction('[Counter] Reset');
