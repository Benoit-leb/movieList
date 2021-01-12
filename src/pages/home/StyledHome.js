import styled from "styled-components";
import theme from "../../styles/theme.js";

const StyledHome = styled.div`
  padding: 30px 0;
  & .list-container{
    padding: 30px 0;
    @media(min-width: ${theme.sm}){
      padding: 50px 0;
    }
  }
`;

export default StyledHome;