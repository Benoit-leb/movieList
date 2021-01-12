import React from "react";
import Header from "../Header/index.js";
import GlobalStyle from "./GlobalStyle";
import StyledPage from "./StyledPage";
import { selectedTheme } from "../../app/features/useDarkMode"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { useSelector } from 'react-redux';


const Page = (props) => {
  const theme = useSelector(selectedTheme);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <React.Fragment>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle/>
        <StyledPage>
            <Header/>
              {props.children}
        </StyledPage>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Page;