import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './TestDetailsForm.css';

class TestDetailsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dateoftesting: props.getValue('dateoftesting'),
            serumCreatinine: props.getValue('serumCreatinine'),
            bloodUrea: props.getValue('bloodUrea'),
            uricAcid: props.getValue('uricAcid'),
            electrolytes_sodium: props.getValue('electrolytes_sodium'),
            electrolytes_potassium: props.getValue('electrolytes_potassium'),
            bun: props.getValue('bun'),
            pedalEdema: props.getValue('pedalEdema'),
            pedaltype: props.getValue('pedaltype'),
            kidneystatus: props.getValue('kidneystatus'),
            ailments: props.getValue('ailments'),
            dialysis: props.getValue('dialysis'),
            doctorreq: props.getValue('doctorreq'),
        }
    }

    validate = () => {
        //Conditions to check.. If valid, Send form name to switch to next form
        console.log(this.state);
        //this.saveData();
        this.props.changeData({ formName: "HospitalDetails" });
    }

    saveData = () => {
        // let dataToSave = {
        //     adhaar: this.state.adhaarFirst + this.state.adhaarSecond + this.state.adhaarThird,
        //     village: this.state.village,
        //     name: this.state.name,
        //     surname: this.state.surname,
        //     relation: this.state.relation,
        //     gaurdian_name: this.state.gaurdian_name,
        //     age: this.state.age,
        //     gender: this.state.gender,
        //     maritalstatus: this.state.maritalstatus,
        //     phone: this.state.phone,
        //     bloodgroup: this.state.bloodgroup,
        //     PVGT: this.state.PVGT,
        // }
        // this.props.changeData(dataToSave);
    }

    loadNextForm = (formName) => {
        this.props.changeData({ formName: formName });
    }

    previous = () => {
        this.props.changeData({ formName: "UserDetails" });
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    handleChangeBoolenValues = input => event => {
        let isTrue = event.target.value
        if (isTrue === 'yes') {
            isTrue = true
        }
        else if (isTrue === 'no') {
            isTrue = false
        }
        else {
            isTrue = null
        }
        this.setState({ [input]: isTrue })
    }

    validateOneDigitAfterDecimal = event => {
        let strValue = event.target.value.toString();
        if (strValue.includes(".")) {
            var index = strValue.indexOf(".")
            event.target.value = Number(strValue.substring(0, index + 2));
        }
        this.setState({ [event.target.id]: event.target.value });

    }
    validateAndNext = async() => {
        //Conditions to check.. If valid, Send form name to switch to next form
        console.log(this.state);
        await new Promise(resolve => this.props.changeData(this.state, () => resolve()))
        this.loadNextForm("HospitalDetails");
    }

    validateAndSubmit = async() => {
        await new Promise(resolve => this.props.changeData(this.state, () => resolve()))
        this.props.submit();
    }
 
    creatineCheck = () => {
        console.log(this.state.serumCreatinine);
    }

    checkTesting = () => {
        console.log(this.state.serumCreatinine);
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
                        <legend>Testing Details</legend>

                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Date of Testing: </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="date" placeholder="" id="dateoftesting" onChange={this.handleChange('dateoftesting')}
                                            value={this.state.dateoftesting} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Serum Creatinine: </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="number" placeholder="mg/dl" id="serumCreatinine" onChange={this.validateOneDigitAfterDecimal}
                                            value={this.state.serumCreatinine} />
                                        {(() => {
                                            if (this.state.serumCreatinine > 2 && this.state.serumCreatinine < 5.9) {
                        
                                                document.getElementById("serumCreatinine").style.border = "2px solid green"
                                            }
                                            else if (this.state.serumCreatinine > 6) {
                                            
                                                    document.getElementById("serumCreatinine").style.border = "2px solid red"
                                                
                                            }
                                        })()}
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Blood Urea: </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="number" placeholder="mg/dl" id="bloodUrea" onChange={this.validateOneDigitAfterDecimal}
                                            value={this.state.bloodUrea}
                                        />
                                        {(() => {
                                            if (this.state.bloodUrea > 15 && this.state.bloodUrea < 40) {
                                                document.getElementById("bloodUrea").style.border = "2px solid green"
                                            }
                                            else if (this.state.bloodUrea > 40) {
                                                document.getElementById("bloodUrea").style.border = "2px solid red"
                                            }
                                        })()}
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Uric Acid: </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="number" placeholder="mg/dl" id="uricAcid" onChange={this.validateOneDigitAfterDecimal}
                                            value={this.state.uricAcid} />
                                        {(() => {
                                            if (this.state.uricAcid > 2.6 && this.state.uricAcid < 6.0) {
                                                document.getElementById("uricAcid").style.border = "2px solid green"
                                            }
                                            else if (this.state.uricAcid > 6) {
                                                document.getElementById("uricAcid").style.border = "2px solid red"
                                            }
                                        })()}
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group as={Row}>
                                <Col className="section-heading">
                                    <h3>Electrolytes </h3>
                                </Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Sodium(NA): </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="number" placeholder="mg/dl" id="electrolytes_sodium" onChange={this.validateOneDigitAfterDecimal}
                                            value={this.state.electrolytes_sodium} />
                                        {(() => {
                                            if (this.state.electrolytes_sodium > 135 && this.state.electrolytes_sodium < 155) {
                                                document.getElementById("electrolytes_sodium").style.border = "2px solid green"
                                            }
                                            else if (this.state.lectrolytes_sodium > 155) {
                                                document.getElementById("electrolytes_sodium").style.border = "2px solid red"
                                            }
                                        })()}
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Potassium(K): </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="number" placeholder="mg/dl" id="electrolytes_potassium" onChange={this.validateOneDigitAfterDecimal}
                                            value={this.state.electrolytes_potassium} />
                                        {(() => {
                                            if (this.state.electrolytes_potassium > 3.5 && this.state.electrolytes_potassium < 5.5) {
                                                document.getElementById("electrolytes_potassium").style.border = "2px solid green"
                                            }
                                            else if (this.state.electrolytes_potassium > 5.5) {
                                                document.getElementById("electrolytes_potassium").style.border = "2px solid red"
                                            }
                                        })()}
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>BUN: Blood Urea Nitrogen: </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="number" placeholder="mg/dl" id="bun" onChange={this.validateOneDigitAfterDecimal}
                                            value={this.state.bun} />
                                        {(() => {
                                            if (this.state.bun > 8 && this.state.bun < 23) {
                                                
                                                    document.getElementById("bun").style.border = "2px solid green"
                                                
                                            }
                                            else if (this.state.bun > 23) {
                                                document.getElementById("bun").style.border = "2px solid red"
                                            }
                                        })()}
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12}>
                                <Row>

                                    <Col sm={3}>
                                        <Form.Label>Pedal Edema:</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="Y"
                                                    id="yes"
                                                    label="Yes"
                                                    name="pedalEdema"
                                                    onChange={this.handleChange('pedalEdema')}
                                                    checked={this.state.pedalEdema === "Y"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="N"
                                                    id="no"
                                                    label="No"
                                                    name="pedalEdema"
                                                    onChange={this.handleChange('pedalEdema')}
                                                    checked={this.state.pedalEdema === "N"}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={3} >
                                {(() => {
                                    if (this.state.pedalEdema === 'Y') {
                                        return (
                                            <Col sm={6}>
                                                <Form.Group controlId="pedaltype">
                                                    <Form.Label>Pedal Type:</Form.Label>
                                                    <Form.Control as="select" onChange={this.handleChange('pedaltype')} value={this.state.pedaltype}>
                                                        <option value="single leg">Single Leg</option>
                                                        <option value="bilateral">Bilateral</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                        )
                                    }
                                    else {
                                        return (
                                            <p></p>
                                        )
                                    }
                                })()}
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <Form.Label>Kidney Funtioning Status:</Form.Label>
                            </Col>
                            <Col sm={1}>
                                <Row>
                                    <Col>
                                        <Form.Check
                                            type='radio'
                                            value="good"
                                            id="good"
                                            label="Good"
                                            name="kidneystatus"
                                            onChange={this.handleChange('kidneystatus')}
                                            checked={this.state.kidneystatus === "good"}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Check
                                            type='radio'
                                            value="abnormal"
                                            id="abnormal"
                                            label="Abnormal"
                                            name="kidneystatus"
                                            onChange={this.handleChange('kidneystatus')}
                                            checked={this.state.kidneystatus === "abnormal"}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br></br>
                        {(() => {
                            if (this.state.kidneystatus === 'good') {
                                return (
                                    <Container></Container>
                                )
                            }
                            else if (this.state.kidneystatus === 'abnormal') {
                                return (
                                    <Container>
                                        <Row>
                                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                                <Form.Group as={Row}>
                                                    <Col sm={3}>
                                                        <Form.Label>Specify the ailments: </Form.Label>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <Form.Control as="textarea" placeholder="Description" id="ailments" onChange={this.handleChange('ailments')}
                                                            value={this.state.ailments} />
                                                    </Col>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                                <Form.Label>Need for Dialysis:</Form.Label>
                                            </Col>
                                            <Col sm={1}>
                                                <Row>
                                                    <Col>
                                                        <Form.Check
                                                            type='radio'
                                                            value="true"
                                                            id="yes"
                                                            label="Yes"
                                                            name="dialysis"
                                                            onChange={this.handleChange('dialysis')}
                                                            checked={this.state.dialysis === "true"}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Check
                                                            type='radio'
                                                            value="false"
                                                            id="no"
                                                            label="No"
                                                            name="dialysis"
                                                            onChange={this.handleChange('dialysis')}
                                                            checked={this.state.dialysis === "false"}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={4}>
                                                <Form.Label>Need for immediate Doctor Supervision:</Form.Label>
                                            </Col>
                                            <Col sm={1}>
                                                <Row>
                                                    <Col>
                                                        <Form.Check
                                                            type='radio'
                                                            value="true"
                                                            id="yes"
                                                            label="Yes"
                                                            name="doctorreq"
                                                            onChange={this.handleChange('doctorreq')}
                                                            checked={this.state.doctorreq === "true"}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Check
                                                            type='radio'
                                                            value="false"
                                                            id="no"
                                                            label="no"
                                                            name="doctorreq"
                                                            onChange={this.handleChange('doctorreq')}
                                                            checked={this.state.doctorreq === "false"}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                )
                            }
                        })()}

                       

                        {(() => {
                            if (this.state.doctorreq === 'true') {
                                return (
                                    <Row>
                                        <Col sm={12} style={styles.center}>
                                            <Button variant="primary"
                                                onClick={this.validateAndNext}
                                            >Next</Button>
                                        </Col>
                                    </Row>

                                )
                            }
                            else {
                                return (
                                    <Row>
                                        <Col sm={12} style={styles.center}>
                                            <Button variant="primary"
                                                onClick={this.validateAndSubmit}
                                            >Submit</Button>
                                        </Col>
                                    </Row>
                                )
                            }
                        })()}
                    </fieldset>
                </Row>
            </Container>

        )
    }
}

export default TestDetailsForm;
