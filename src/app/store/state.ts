// src/app/store/state.ts

/**
 * Интерфейс состояния приложения.
 */
export interface AppState {
    counter: number;
  }
  
  /**
   * Начальное состояние приложения.
   */
  export const initialState: AppState = {
    counter: 0,
  };
  