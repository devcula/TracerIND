
import React, { Component } from 'react';
import {  Col, Row} from 'react-bootstrap';

import imgCard1 from "./img/S1.png";
import imgCard2 from "./img/S2.png";
import imgCard3 from "./img/S3.png";
import imgCard4 from "./img/S4.png";
import imgCard5 from "./img/S5.png";
import imgCard6 from "./img/S6.png";
import imgCard7 from "./img/S7.png";
import './About.css';



 export default class About extends Component {
    render() {
        return (      
          <div>

    <div class="container">
    <h1 class="heading"><span>meet</span>Our Team</h1>
      <div class="profiles">
        <Row>
         <Col sm="3" md="4">
           <div class="profile">
             <img src={imgCard1} class="profile-img"></img>
               <h3 class="user-name">Prakruti Chandak</h3>
                 <h5>Team lead</h5>
             </div>
           </Col>
         <Col sm="3" md="4">
           <div class="profile">  
             <img src={imgCard7} class="profile-img"></img>
               <h3 class="user-name">Shubhankar</h3>
             <h5>Android Developer</h5>
           </div>
         </Col>
        <Col sm="3"md="4">
          <div class="profile">
            <img src={imgCard2} class="profile-img"></img>
              <h3 class="user-name">Abhisekh Prasad </h3>
                <h5>Team lead</h5>
           </div>
          </Col>
       </Row>
       <Row>
         <Col sm="3" md="3">
           <div class="profile">
             <img src={imgCard4} class="profile-img"></img>
               <h3 class="user-name">Hrituja Khatavkar</h3>
                 <h5>Front-end developer</h5>
           </div>
          </Col>
          <Col sm="3" md="3">
            <div class="profile">
              <img src={imgCard5} class="profile-img"></img>
                <h3 class="user-name">Akshat </h3>
                  <h5>Android Developer</h5>
                 </div></Col>
           <Col sm="3"md="3">
              <div class="profile">
                <img src={imgCard6} class="profile-img"></img>                   
                 <h3 class="user-name">  Gaurav Roy </h3>
                    <h5>Front-end Developer</h5>
             </div>
            </Col>
            <Col sm="3"md="3">
              <div class="profile">
               <img src={imgCard3} class="profile-img"></img>
                  <h3 class="user-name">Shlok Parida</h3>
                    <h5>Team lead</h5>
               </div>
           </Col>
         </Row>
    </div>
  </div>
 </div>
      )
  }
}
