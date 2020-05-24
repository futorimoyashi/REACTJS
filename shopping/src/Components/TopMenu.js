import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem
} from 'reactstrap';
import { Link } from "react-router-dom";
import { CartContext } from '../contexts/Cart'

export default class TopMenu extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.setState.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink>
                    <Link to="/">Home</Link>
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink>
                    <Link to="/products/">Product</Link>
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink>
                    <CartContext.Consumer>
                      { ({ cartItem }) => <Link to="/products/">Cart ({cartItem.length})</Link>}
                    </CartContext.Consumer>
                  </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}