import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeState = {
  mode: 'light' | 'dark';
};

// read localStorage safely
const savedTheme = ((): 'light' | 'dark' => {
  const value = localStorage.getItem('data-bs-theme');
  return value === 'dark' ? 'dark' : 'light';
})();

const initialState: ThemeState = {
  mode: savedTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('data-bs-theme', state.mode);
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
      localStorage.setItem('data-bs-theme', action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
