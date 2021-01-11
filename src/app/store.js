import { configureStore } from '@reduxjs/toolkit';
import theme from "../features/useDarkMode"
import movieList from "../features/movieList";

export default configureStore({
  reducer: {
    movieList,
    theme
  },
});
