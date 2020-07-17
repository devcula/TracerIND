
import React, { Component } from 'react'
import { Container, Col, Row,Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <Container>

                <fieldset style={{ backgroundImage: "linear-gradient(to right top, #7a9e7e, #3d7b74, #0a5767, #0c314d, #160c28)", color: "white" }}>
                    <legend>About</legend>
                    <Row>

                        <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/jumbo.jpg" className="header-image" />
                            <h3>About TracerIND</h3>
                            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out. These trees are so much fun. I get started on them and I have a hard time stopping. How to paint. That's easy. What to paint. That's much harder. Be brave. The man who does the best job is the one who is happy at his job.</p>
                            <p>Anyone can paint. You can do anything here. So don't worry about it. Life is too short to be alone, too precious. Share it with a friend. Every highlight needs it's own personal shadow.</p>
                            <p>That's what makes life fun. That you can make these decisions. That you can create the world that you want. Of course he's a happy little stone, cause we don't have any other kind. It's so important to do something every day that will make you happy.</p>
                            <p>You better get your coat out, this is going to be a cold painting. That's the way I look when I get home late; black and blue. That's crazy. We're trying to teach you a technique here and how to use it.</p>
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
