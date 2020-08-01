import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col} from 'react-bootstrap';
import './Home.css';
import Circle from '../CircularProgressBar/CircularProgressBar';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to TracerIND</h2>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="home-col">
                        <Circle percentage="40" />
                        <br/>
                        <h4>Active</h4>
                    </Col>
                    <Col xs={12} sm={4} className="home-col">
                        <Circle percentage="45" />
                        <br/>
                        <h4>Recovered</h4>
                    </Col>
                    <Col xs={12} sm={4} className="home-col">
                        <Circle percentage="15" />
                        <br/>
                        <h4>Deaths</h4>
                    </Col>
                </Row>
            </Container>
        )
    }
}
