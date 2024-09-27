// src/app/store/effects.ts

import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

/**
 * Класс для определения эффектов приложения.
 */
@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}
}
