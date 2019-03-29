import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const AppNavbar = () => (
  <div>
    <Navbar color="dark" dark>
      <div className="container">
        <Link to="/">
          <NavbarBrand className="mr-auto" tag="span">Photo Gallery</NavbarBrand>
        </Link>
        <Nav navbar>
          <NavItem>
            <NavLink href="https://github.com/yuzumi/photo-gallery" target="_blank">GitHub</NavLink>
          </NavItem>
        </Nav>
      </div>
    </Navbar>
  </div>
);

export default AppNavbar;