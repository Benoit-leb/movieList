import styled from "styled-components";
import theme from "../../styles/theme.js";

const StyledNavbar = styled.ul`
  & a{
    font-size: 16px;
    font-weight:100;
    width:100%;
    @media(min-width: ${theme.sm}){
      text-align:center;
      display:inline-block;
      font-size: 24px;
    }
  } 
  & li{
    display: block;
    text-align: left;
    padding: 1rem 0;
    @media(min-width: ${theme.sm}){
      display:inline-block;
      margin:0 10px;
      padding:0;
    }
    & span{
      width: 20px;
      margin-right:1rem;
      display: inline-block;
      @media(min-width: ${theme.sm}){
        margin-right:0;
        width:2rem;
      }
    }
  }
`;

export default StyledNavbar;