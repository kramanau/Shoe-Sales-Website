import React, { Component } from 'react';
import {
  Collapes,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class navibar extends Component{

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <NavbarBrand href="/">Shoes Listing</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default navibar;
