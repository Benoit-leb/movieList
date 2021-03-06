import styled from "styled-components";
import theme from "../../styles/theme.js";

const StyledMovieItem = styled.div`
  position: relative;
  padding: 40px 16px;
  box-shadow: 0 0 8px 1px ${({ theme }) => theme.text};
  margin: 5px;
  & .title{
    font-weight: bold;
    font-size:16px;
  }
  & .category{
    font-style: italic;
    font-size:16px;
    margin-bottom:2rem;
  }
  & .cross{
    width:1rem;
    height:1rem;
    &-container{
      cursor: pointer;
      position: absolute;
      top:10px;
      right:10px;
    }
  }
  & svg{
    width:2rem;
    height:2rem;
    &.more{
      fill:blue;
    }
    &.less{
      fill:red;
    }
  }
`;

export default StyledMovieItem;