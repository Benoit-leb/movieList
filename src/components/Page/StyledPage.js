import styled from "styled-components";
import theme from "../../styles/theme.js";

const StyledPage = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  #react-paginate ul {
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
  }

  #react-paginate li {
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content: center;
    width: 40px;
    height: 40px;
    list-style-type: none;
    &.selected{
      border-bottom: solid 1px ${({ theme }) => theme.textBrand};
    }
    &.next{
      justify-content:start;
    }
    & a{
      :focus {outline:0;}
    }
  }
`;

export default StyledPage;