import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { scroller } from "react-scroll";
import './NavBar.css';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const scrollToContact = () => {
    scroller.scrollTo("central-form", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToProjects = () => {
    scroller.scrollTo("projects", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToSkills = () => {
    scroller.scrollTo("circles", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  

  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">Mountain Pixels Web Development</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="navItem">
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={scrollToSkills}>Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={scrollToProjects}>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={scrollToContact}>Contact</NavLink>
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
