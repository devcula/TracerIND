import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Header.css'

import { faHome, faChartLine, faUserPlus, faInfoCircle, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
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
						{
							(() => {
								if (authenticationService.currentUserValue) {
									return <Button className="nav-button" variant="transparent" onClick={authenticationService.logout}>
										Logout &nbsp;
										<FontAwesomeIcon icon={faSignOutAlt} color="white" />
									</Button>
								}
								else {
									return <Nav.Link href="/login">
										Login &nbsp; <FontAwesomeIcon icon={faSignInAlt} color="white" />
									</Nav.Link>
								}
							})()
						}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}
