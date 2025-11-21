// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  }
});

store.subscribe(() => {
  const mode = store.getState().theme.mode;
  document.documentElement.setAttribute("data-bs-theme", mode);
});

// Types for the whole Redux state & dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
