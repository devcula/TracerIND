import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import Circle from '../CircularProgressBar/CircularProgressBar';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to TracerIND</h2>
                    <p>**Info in one line**</p>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="home-col">
                        <Circle />
                        <h4>Active</h4>
                    </Col>
                    <Col xs={12} sm={4} className="home-col">
                        <Circle />
                        <h4>Recovered</h4>
                    </Col>
                    <Col xs={12} sm={4} className="home-col">
                        <Circle />
                        <h4>Deaths</h4>
                    </Col>
                </Row>
            </Container>
        )
    }
}
