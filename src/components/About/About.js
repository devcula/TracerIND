
import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import imgCard1 from "./img/S1.png";
import imgCard2 from "./img/S2.png";
import imgCard3 from "./img/S3.png";
import imgCard4 from "./img/S4.png";
import imgCard5 from "./img/S5.png";
import imgCard6 from "./img/S6.png";
import imgCard7 from "./img/S7.png";
import imgCard8 from "./img/S8.jpeg";
import './About.css';



export default class About extends Component {
  render() {
    return (
      <Container>
        <h1 style={{ marginTop: "1rem" }} className="heading"><span>meet </span>Our Team</h1>
        <div className="profiles">
          <Row>
            <Col sm={6} md={4}>
              <div className="profile">
                <img alt="User" src={imgCard3} className="profile-img"></img>
                <h3 className="user-name">Shlok Parida</h3>
                <h5>Team lead</h5>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className="profile">
                <img alt="User" src={imgCard1} className="profile-img"></img>
                <h3 className="user-name">Prakruti Chandak</h3>
                <h5>Team lead</h5>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className="profile">
                <img alt="User" src={imgCard2} className="profile-img"></img>
                <h3 className="user-name">Abhishek Prasad </h3>
                <h5>Team lead</h5>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={4}>
              <div className="profile">
                <img alt="User" src={imgCard5} className="profile-img"></img>
                <h3 className="user-name">Akshat </h3>
                <h5>Team Lead</h5>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className="profile">
                <img alt="User" src={imgCard4} className="profile-img"></img>
                <h3 className="user-name">Hrituja Khatavkar</h3>
                <h5>Frontend developer</h5>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className="profile">
                <img alt="User" src={imgCard6} className="profile-img"></img>
                <h3 className="user-name">  Gaurav Roy </h3>
                <h5>Frontend Developer</h5>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className="profile">
                <img alt="User" src={imgCard7} className="profile-img"></img>
                <h3 className="user-name">Shubhankar</h3>
                <h5>Android Developer</h5>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className="profile">
                <img alt="User" src={imgCard8} className="profile-img"></img>
                <h3 className="user-name">Palak Rai</h3>
                <h5>Frontend Developer</h5>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}
