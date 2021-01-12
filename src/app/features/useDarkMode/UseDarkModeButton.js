import React from "react";
import ToggleButton from "react-toggle-button";
import { useSelector, useDispatch } from 'react-redux';
import { selectedTheme, setTheme} from "./index"

const UseDarkModeButton = () => {
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
export default UseDarkModeButton;