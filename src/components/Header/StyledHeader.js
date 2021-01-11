import styled from "styled-components";

const StyledHeader = styled.header`
  position:sticky;
  padding: 1rem;
  top:0;
  width:100%;
  z-index:100;
  & .logo{
    height: 6rem;
    width: 14rem;
    color:${({ theme }) => theme.text};
  }
  & a{
    height:100%;
    display: inline-block;
  }
`;

export default StyledHeader;
