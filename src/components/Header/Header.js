import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Header.css'

import { faHome, faChartLine, faUserPlus, faInfoCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { authenticationService } from '../../services';

import logo from '../../assets/logo_transparent.png';
export default class Header extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand="lg" variant="dark">
				<Navbar.Brand href="/">
					<img alt="TracerIND" src={logo} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">
							<FontAwesomeIcon icon={faHome} color="white" /> &nbsp;Home
						</Nav.Link>
						<Nav.Link href="/dashboard">
							<FontAwesomeIcon icon={faChartLine} color="white" /> &nbsp;Dashboard
						</Nav.Link>
						<Nav.Link href="/add">
							<FontAwesomeIcon icon={faUserPlus} color="white" /> &nbsp;New Patient
						</Nav.Link>
						<Nav.Link href="/about">
							<FontAwesomeIcon icon={faInfoCircle} color="white" /> &nbsp;About
						</Nav.Link>
					</Nav>
					<Nav>
						<Button className="nav-button" variant="transparent" onClick={authenticationService.logout}>
							Logout &nbsp;
							<FontAwesomeIcon icon={faSignOutAlt} color="white" />
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}
