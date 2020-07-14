import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
class BasicDetailsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adhaar: props.getValue('adhaar'),
            mandal: props.getValue('mandal'),
            phc: props.getValue('phc'),
            village_sec: props.getValue('village_sec'),
            village: props.getValue('village'),
            name: props.getValue('name'),
            surname: props.getValue('surname')
        }
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    validateAndNext = () => {
        //Conditions to check.. If valid, Send form name to switch to next form
        console.log(this.state);
        this.props.changeData(this.state);
        this.loadNextForm("TestDetails");
    }

    loadNextForm = (formName) => {
        this.props.changeData({ formName: formName });
    }

    render() {
        return (
            <Container>
                <Row>
                    <fieldset style={{'width': '100%'}}>
                        <legend>Basic Details</legend>
                        <Row>
                            <Col sm={12} style={{paddingLeft: 0, paddingRight: 0}}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Aadhar Number : </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="number" placeholder="1st 4 digits" id="aadharFirst" />
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="number" placeholder="2nd 4 digits" id="aadharSecond" />
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="number" placeholder="Last 4 digits" id="aadharThird" />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <Form.Group controlId="mandal">
                                    <Form.Label>Mandal</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." onChange={this.handleChange('mandal')} value={this.state.mandal}>
                                        <option value="">Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <Form.Group controlId="phc">
                                    <Form.Label>PHC</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." onChange={this.handleChange('phc')} value={this.state.phc} >
                                        <option value="">Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <Form.Group controlId="village_sec">
                                    <Form.Label>Village Secretariat</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." onChange={this.handleChange('village_sec')} value={this.state.village_sec}>
                                        <option value="">Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <Form.Group controlId="village">
                                    <Form.Label>Village</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." onChange={this.handleChange('village')} value={this.state.village}>
                                        <option value="">Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <Form.Group controlId="name">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" onChange={this.handleChange('name')} value={this.state.name} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="surname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Surname" onChange={this.handleChange('surname')} value={this.state.surname} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{textAlign: "center"}}>
                                <Button variant="primary" onClick={this.validateAndNext}>Save and Continue</Button>
                            </Col>
                        </Row>
                    </fieldset>
                </Row>
            </Container>
        )
    }
}

export default BasicDetailsForm;