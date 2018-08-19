import React from "react";
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';

import Menu from "./Menu";

import Logo from "./Logo";

export default class Header extends React.Component {
  render() {
    return (
      // <div className="header_area">
      
      //   <div className="logo_area">
      //     <Logo />
      //   </div>
        
      //   <Menu />
      // </div>
      <Container>
        <Logo/>
        <Menu/>
        </Container>
    );
  }
}
