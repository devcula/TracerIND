import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
          <Navbar.Brand>
            <Link to="/">TracerIND</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/dashboard" to="/dashboard">
              Dashboard
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
