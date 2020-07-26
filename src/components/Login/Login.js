import React from 'react';
import './Login.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    login = async() => {
        if(this.state.username === "test" && this.state.password === "test"){
            await new Promise(resolve => this.props.changeStatus(true, () => resolve()));
            window.location.href = "/home";
        }
    }

    handleChange = input => event => {
        this.setState({[input] : event.target.value})
    }

    render() {
        return (
            <Container style={{width: "50%", marginTop: "20vh"}}>
                <fieldset>
                    <legend>Enter your Login Details</legend>
                    <Row>
                        <Col>
                            <Form.Group as={Row} controlId="username">
                                <Col md={6} sm={12} xs={12}>
                                    <Form.Label>Username :</Form.Label>
                                </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Form.Control onChange={this.handleChange('username')} />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group as={Row} controlId="password">
                                <Col md={6} sm={12} xs={12}>
                                    <Form.Label>Password :</Form.Label>
                                </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Form.Control type="password" onChange={this.handleChange('password')} />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row style={{textAlign: "center", margin: "1rem"}}>
                        <Col>
                            <Button className="cool-button" size="lg" onClick={this.login}>Login</Button>
                        </Col>
                    </Row>
                </fieldset>
            </Container>
        )
    }
}

export default Login;