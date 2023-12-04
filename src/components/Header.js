import React, { useState } from "react";
import { Collapse, Navbar, NavLink, NavbarToggler, Button, Card, NavbarBrand, NavItem, NavbarText } from 'reactstrap';
import { NavLink as RRNavLink } from "react-router-dom";
import { logout } from "../modules/authManager";

export default function Header({ isLoggedIn, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className='header'>
        <Navbar className='main-nav'>
          <NavbarBrand tag={RRNavLink} to="/" children className="App-logo">Shop the Block</NavbarBrand>
          <NavItem>
            <NavLink tag={RRNavLink} to="/product">Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/shoppingCart">Cart</NavLink>
          </NavItem>

          {isLoggedIn &&
            <>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/order">Orders</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/userprofile/details/:id">My Account</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} className="nav-link"
                    style={{ cursor: "pointer" }} onClick={logout}>Logout</NavLink>
                </NavItem>
              </Collapse>
            </>
          }
          {!isLoggedIn &&
            <>
              <NavItem>
                <NavLink tag={RRNavLink} to="/register">Register</NavLink>
              </NavItem>
            </>
          }
        </Navbar>
      </div>
    </>
  );
}

