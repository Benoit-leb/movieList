
import { createSlice } from '@reduxjs/toolkit';

const useDarkMode = createSlice(
  {
    name:"theme",
    initialState: {
      value: window.localStorage.getItem("theme") ? window.localStorage.getItem("theme") : "light",
    },
    reducers: {
      setTheme: (state, action) => {
        window.localStorage.setItem("theme", action.payload);
        state.value = action.payload;
      },
    }
  }
);
export const { setTheme } = useDarkMode.actions;
export const selectedTheme = (state) => state.theme.value;

export default useDarkMode.reducer;