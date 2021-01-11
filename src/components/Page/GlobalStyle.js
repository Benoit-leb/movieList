import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Helvetica, 'Helvetica Neue', Arial, 'Lucida Grande', sans-serif;
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing:inherit;
  }
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
  }
  header{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  svg{
    fill: ${({ theme }) => theme.text};
  }
  ul{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
  .row{
  padding: 0 !important;
  margin: 0 !important;
  }
  [class*="col-sm"], [class*="col-xs"], [class*="col-md"]{
    padding:0 !important;
  }
  body.noscroll{
  overflow: hidden;
  margin-right: 5px;
}
`;

export default GlobalStyle;
