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
            surname: props.getValue('surname'),
            relation: props.getValue('relation'),
            gaurdian_name: props.getValue('gaurdian_name')
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
                    <fieldset style={{ 'width': '100%' }}>
                        <legend>Basic Details</legend>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
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
                            <Col sm={3}>
                                <Form.Group controlId="mandal">
                                    <Form.Label>Mandal:</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." onChange={this.handleChange('mandal')} value={this.state.mandal}>
                                        <option value="">Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <Form.Group controlId="phc">
                                    <Form.Label>PHC:</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." onChange={this.handleChange('phc')} value={this.state.phc} >
                                        <option value="">Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <Form.Group controlId="village_sec">
                                    <Form.Label>Village Secretariat:</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." onChange={this.handleChange('village_sec')} value={this.state.village_sec}>
                                        <option value="">Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <Form.Group controlId="village">
                                    <Form.Label>Village:</Form.Label>
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
                                    <Form.Label>First Name:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" onChange={this.handleChange('name')} value={this.state.name} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="surname">
                                    <Form.Label>Surname:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Surname" onChange={this.handleChange('surname')} value={this.state.surname} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <Form.Label>S/o, D/o, W/o:</Form.Label>
                            </Col>
                            <Col sm={2}>
                                <Row>
                                    <Col>
                                        <Form.Check
                                            type='radio'
                                            value="son"
                                            id="sonOf"
                                            label="Son of"
                                            name="relation"
                                            onChange={this.handleChange('relation')}
                                            checked={this.state.relation === "son"}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Check
                                            type='radio'
                                            value="daughter"
                                            id="daughterOf"
                                            label="Daughter of"
                                            name="relation"
                                            onChange={this.handleChange('relation')}
                                            checked={this.state.relation === "daughter"}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Check
                                            type='radio'
                                            value="wife"
                                            id="wifeOf"
                                            label="Wife of"
                                            name="relation"
                                            onChange={this.handleChange('relation')}
                                            checked={this.state.relation === "wife"}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={4} style={{ display: this.state.relation ? 'block' : 'none' }}>
                                <Form.Group controlId="gaurdian_name">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" onChange={this.handleChange('gaurdian_name')} value={this.state.gaurdian_name} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ textAlign: "center" }}>
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