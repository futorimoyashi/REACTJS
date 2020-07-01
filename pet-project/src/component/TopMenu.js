import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import logo from '../logo.svg'

const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <img alt="" src={logo} width={32} height={32} />
        <NavbarBrand href="/">React App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{color: 'white', fontSize: 21}}>
              - Wheather Board
            </NavItem>
          </Nav>
          <NavLink href="https://github.com/futorimoyashi" style={{color: 'white'}}>
              GitHub
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopMenu