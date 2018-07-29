import React from "react";

import Menu from "./Menu";
import Logo from "./Logo";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header_area">
      
        <div className="logo_area">
          <Logo />
        </div>
        
        <Menu />
      </div>
    );
  }
}
