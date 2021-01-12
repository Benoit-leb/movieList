import styled from "styled-components";
import theme from "../../styles/theme.js";

const StyledNavbar = styled.ul`
  & a{
    display:inline-block;
  } 
  & li{
    display: inline-block;
    text-align: left;
    padding: 1rem;
    & svg{
      width: 2rem;
    }
  }
`;

export default StyledNavbar;