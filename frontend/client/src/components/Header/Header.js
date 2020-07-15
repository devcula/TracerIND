import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
// import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="/">TracerIND</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/add">New Patient</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
    )
  }
}
