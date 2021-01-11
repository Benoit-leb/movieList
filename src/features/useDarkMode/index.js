
import { createSlice } from '@reduxjs/toolkit';
import ToggleButton from "react-toggle-button";
import { useSelector, useDispatch } from 'react-redux';


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

export const UseDarkModeButton = () => {
  const theme = useSelector(selectedTheme);
  const dispatch = useDispatch();
  return (
    <ToggleButton
      inactiveLabel="dark"
      activeLabel="light"
      value={theme === "light"}
      onToggle={(status) => {
        dispatch(setTheme(status ? "dark" : "light"));
      }} />
  );
}

export default useDarkMode.reducer;