import React from "react";
import NavBar from "../NavBar/index";
import StyledHeader from "./StyledHeader";

const Header = () => {

  return (
    <StyledHeader>
      <div className="row middle-xs">
        <div className="col-xs-4">
          <a href="/">Benoit LEBRUN</a>
        </div>
        <div className="col-xs-8 end-xs">
          <NavBar/>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;