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
            gaurdian_name: props.getValue('gaurdian_name'),
            age: props.getValue('age'),
            gender: props.getValue('gender'),
            maritalstatus: props.getValue('maritalstatus'),
            phone: props.getValue('phone'),
            bloodgroup: props.getValue('bloodgroup'),
            PVGT: props.getValue('PVGT')
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
        const styles = {
            center: {
                textAlign: "center"
            },
            paddingLeft: {
                paddingLeft: "10px"
            }
        }
        return (
            <Container>
                <Row>
                    <fieldset style={{ 'width': '100%' }}>
                        <legend>Basic Details</legend>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Aadhar Number : </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control min="0" max="9999" type="number" placeholder="1st 4 digits" id="aadharFirst" />
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control min="0" max="9999" type="number" placeholder="2nd 4 digits" id="aadharSecond" />
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control min="0" max="9999" type="number" placeholder="Last 4 digits" id="aadharThird" />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="mandal">
                                    <Col sm={3}>
                                        <Form.Label>Mandal :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            as="select"
                                            onChange={this.handleChange('mandal')}
                                            value={this.state.mandal}>
                                            <option value="">Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="phc">
                                    <Col sm={3}>
                                        <Form.Label>PHC :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            as="select"
                                            onChange={this.handleChange('phc')}
                                            value={this.state.phc} >
                                            <option value="">Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="village_sec">
                                    <Col sm={3}>
                                        <Form.Label>Village Secretariat :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            as="select"
                                            onChange={this.handleChange('village_sec')}
                                            value={this.state.village_sec}>
                                            <option value="">Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="village">
                                    <Col sm={3}>
                                        <Form.Label>Village :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            as="select"
                                            onChange={this.handleChange('village')}
                                            value={this.state.village}>
                                            <option value="">Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="name">
                                    <Col sm={3}>
                                        <Form.Label>First Name :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter First Name"
                                            onChange={this.handleChange('name')}
                                            value={this.state.name} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="surname">
                                    <Col sm={3}>
                                        <Form.Label>Surname :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Surname"
                                            onChange={this.handleChange('surname')}
                                            value={this.state.surname} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Row>
                                    <Col sm={3}>
                                        <Form.Label>S/o, D/o, W/o:</Form.Label>
                                    </Col>
                                    <Col sm={3}>
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
                                            <Form.Label>Name :</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Name"
                                                onChange={this.handleChange('gaurdian_name')}
                                                value={this.state.gaurdian_name} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="age">
                                    <Col sm={3}>
                                        <Form.Label>Age : </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            min="0"
                                            max="99"
                                            type="number"
                                            placeholder="Enter age"
                                            onChange={this.handleChange('age')}
                                            value={this.state.age} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Row>
                                    <Col sm={3}>
                                        <Form.Label>Sex :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="male"
                                                    id="male"
                                                    label="Male"
                                                    name="gender"
                                                    onChange={this.handleChange('gender')}
                                                    checked={this.state.gender === "male"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="female"
                                                    id="female"
                                                    label="Female"
                                                    name="gender"
                                                    onChange={this.handleChange('gender')}
                                                    checked={this.state.gender === "female"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="transgender"
                                                    id="transgender"
                                                    label="Transgender"
                                                    name="gender"
                                                    onChange={this.handleChange('gender')}
                                                    checked={this.state.gender === "transgender"}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={12}>
                                <Row>
                                    <Col sm={3}>
                                        <Form.Label>Marital Status :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="single"
                                                    id="single"
                                                    label="Single"
                                                    name="maritalstatus"
                                                    onChange={this.handleChange('maritalstatus')}
                                                    checked={this.state.maritalstatus === "single"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="married"
                                                    id="married"
                                                    label="Married"
                                                    name="maritalstatus"
                                                    onChange={this.handleChange('maritalstatus')}
                                                    checked={this.state.maritalstatus === "married"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="separated"
                                                    id="separated"
                                                    label="Separated"
                                                    name="maritalstatus"
                                                    onChange={this.handleChange('maritalstatus')}
                                                    checked={this.state.maritalstatus === "separated"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="divorced"
                                                    id="divorced"
                                                    label="Divorced"
                                                    name="maritalstatus"
                                                    onChange={this.handleChange('maritalstatus')}
                                                    checked={this.state.maritalstatus === "divorced"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="widowed"
                                                    id="widowed"
                                                    label="Widowed"
                                                    name="maritalstatus"
                                                    onChange={this.handleChange('maritalstatus')}
                                                    checked={this.state.maritalstatus === "widowed"}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="phone">
                                    <Col sm={3}>
                                        <Form.Label>Phone Number : </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            min="0"
                                            max="9999999999"
                                            type="number"
                                            placeholder="Enter Contact number"
                                            onChange={this.handleChange('phone')}
                                            value={this.state.phone} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="bloodgroup">
                                    <Col sm={3}>
                                        <Form.Label>Blood Group :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            as="select"
                                            onChange={this.handleChange('bloodgroup')}
                                            value={this.state.bloodgroup}
                                        >
                                            <option value="">Choose...</option>
                                            <option value="o-">O-</option>
                                            <option value="o+">O+</option>
                                            <option value="a-">A-</option>
                                            <option value="a+">A+</option>
                                            <option value="b-">B-</option>
                                            <option value="b+">B+</option>
                                            <option value="ab-">AB-</option>
                                            <option value="ab+">AB+</option>
                                            <option value="N.A.">Not yet known</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Row>
                                    <Col sm={3}>
                                        <Form.Label>PVTG :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="yes"
                                                    id="pvgt_yes"
                                                    label="Yes"
                                                    name="PVGT"
                                                    onChange={this.handleChange('PVGT')}
                                                    checked={this.state.PVGT === "yes"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="no"
                                                    id="pvgt_no"
                                                    label="No"
                                                    name="PVGT"
                                                    onChange={this.handleChange('PVGT')}
                                                    checked={this.state.PVGT === "no"}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={12} style={styles.center}>
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