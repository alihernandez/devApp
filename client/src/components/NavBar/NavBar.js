import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './NavBar.css';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">MongoDB ExpressJS ReactJS NodeJS</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="navItem">
              <NavLink activeStyle={{
    color: "red"
  }} href="/components/Header">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/Contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/alihernandez">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
