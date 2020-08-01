
import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <Container>

                <fieldset style={{ backgroundImage: "linear-gradient(to right top, #7a9e7e, #3d7b74, #0a5767, #0c314d, #160c28)", color: "white" }}>
                    <Row>

                        <Col xs={12} sm={8} smOffset={2}>
                        {/* <Image src="assets/jumbo.jpg" className="header-image" /> */}
                            <h3>About TracerIND Team </h3>
                            <ul>
                              <li>Leads</li>
                                  <ul>
                                  <li>Shlok Parida</li>
                                  <li>Prakruti Chandak </li>
                                    <li>Abhishek Prasad</li>
                                </ul>
                                 <br/>
                                  <li>Frontend Developers (ReactJS)</li>
                                  <ul>
                                  <li>Abhishek Prasad</li>
                                  <li>Hrituja Khatavkar</li>
                                  <li>Gaurav Roy</li>

                                </ul>
                                <br/>

                                  <li>Android Developers</li>
                                  <ul>
                                  <li>Akshat Rawat</li>
                                  <li>Shubhankar</li>
                                </ul>
                                <br/>
                              <li>Backend Developers(Django)</li>
                                  <ul>
                                  <li>Shlok Parida</li>
                                  <li>Prakruti Chandak </li>
                                  </ul>
                                  </ul>

                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <h4>Contact Us!</h4>
                            <p>Email: </p>
                            <p>Phone </p>
                        </Col>
                    </Row>
                </fieldset>
            </Container >
        )
    }
}
