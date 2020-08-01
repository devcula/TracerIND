import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { DateTime } from 'react-datetime-bootstrap';

class HospitalDetailsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hospitalAdmit: props.getValue('hospitalAdmit'),
            dateOfAdmit: props.getValue('dateOfAdmit'),
            refered: props.getValue('refered'),
            referredto: props.getValue('referredto'),
            status: props.getValue('status'),
            treatmentDone: props.getValue('treatmentDone'),
            dialysis: props.getValue('dialysis'),
            discharge: props.getValue('discharge'),
            dischargeStatus: props.getValue('dischargeStatus'),
            deceased: props.getValue('deceased'),
            deathDate: props.getValue('deathDate'),
            placeOfDeath: props.getValue('placeOfDeath'),
            causeOfDeath: props.getValue('causeOfDeath'),
            recovery: props.getValue('recovery'),
            otherReferedHospitalName: "",
            referredToSelected: props.getValue('referredToSelected') ? props.getValue('referredToSelected') : 'false'
        }
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    validateAndNext = async () => {
        //Conditions to check.. If valid, Send form name to switch to next form
        // console.log(this.state);
        // this.props.changeData(this.state);
        await new Promise(resolve => this.props.changeData(this.state, () => resolve()))
        // this.loadNextForm("HospitalDetails");
        this.props.submit();
    }

    saveData = async () => {
        await new Promise(resolve => this.props.changeData(this.state, () => resolve()))

    }
    previous = () => {
        this.saveData();
        this.props.changeData({ formName: "TestDetails" });
    }

    loadNextForm = (formName) => {
        this.props.changeData({ formName: formName });
    }

    handleReferredTo = event => {
        let value = event.target.value;
        if(value === 'other'){
            this.setState({referredToSelected: 'true'});
        }
        else {
            this.setState({referredto: value});
        }
    }

    render() {
        const styles = {
            center: {
                textAlign: "center"
            },
            paddingLeft: {
                paddingLeft: "10px"
            },
            right: {
                textAlign: "right"
            },
            left: {
                textAlign: "left"
            }
        }
        return (
            <Container>
                <Row>
                    <fieldset style={{ 'width': '100%' }}>
                        <legend>Hospital Details</legend>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="phc">
                                    <Col sm={3}>
                                        <Form.Label>Hospital admitted in :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            as="select"
                                            onChange={this.handleChange('hospitalAdmit')}
                                            value={this.state.hospitalAdmit} >
                                            <option value="">Choose...</option>
                                            <option value="PHC/Tulasipaka">PHC/Tulasipaka</option>
                                            <option value="PHC/E.D Pally">PHC/E.D Pally</option>
                                            <option value="PHC/Laxmipuram">PHC/Laxmipuram</option>
                                            <option value="PHC/Nellipaka">PHC/Nellipaka</option>
                                            <option value="PHC/Gowridevipeta">PHC/Gowridevipeta</option>
                                            <option value="PHC/Kuturu">PHC/Kuturu</option>
                                            <option value="PHC/Rekhapally">PHC/Rekhapally</option>
                                            <option value="PHC/Jeediguppa">PHC/Jeediguppa</option>
                                            <option value="AH/Chintoor">AH/Chintoor</option>
                                            <option value="AH/Rampachodavaram">AH/Rampachodavaram</option>
                                            <option value="AH/Bhadrachalam">AH/Bhadrachalam</option>
                                            <option value="DH/Rajamundry">DH/Rajamundry</option>
                                            <option value="GGH/Kakinada">GGH/Kakinada</option>
                                            <option value="other">other</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Date Of Admit :</Form.Label>

                                    </Col>
                                    <Col sm={3}>
                                        <input type="date" value={this.state.dateOfAdmit} className="form-control" id="dateOfAdmit" onChange={this.handleChange('dateOfAdmit')} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Row>
                                    <Col sm={3}>
                                        <Form.Label>  Refered To any Hospitals :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="true"
                                                    id="refered_yes"
                                                    label="Yes"
                                                    name="refered"
                                                    onChange={this.handleChange('refered')}
                                                    checked={this.state.refered === "true"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="false"
                                                    id="refered_no"
                                                    label="No"
                                                    name="refered"
                                                    onChange={this.handleChange('refered')}
                                                    checked={this.state.refered === "false"}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br />
                        {(() => {
                            if (this.state.refered === "true") {
                                return (
                                    <div>
                                        <Row>
                                            <Col sm={12}>
                                                <Form.Group as={Row} controlId="referredto">
                                                    <Col sm={3}>
                                                        <Form.Label>Hospital Refered to :</Form.Label>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <Form.Control
                                                            as="select"

                                                            onChange={this.handleReferredTo}
                                                            value={this.state.referredToSelected === 'false' ? this.state.referredto : 'other'} >
                                                            <option value="">Choose...</option>
                                                            <option value="AH/Chintoor">AH/Chintoor</option>
                                                            <option value="AH/Rampachodavaram">AH/Rampachodavaram</option>
                                                            <option value="AH/Bhadrachalam">AH/Bhadrachalam</option>
                                                            <option value="DH/Rajamundry">DH/Rajamundry</option>
                                                            <option value="GGH/Kakinada">GGH/Kakinada</option>
                                                            <option value="other">other</option>
                                                        </Form.Control>
                                                    </Col>
                                                    <Col sm={3}>
                                                        {(() => {
                                                            if (this.state.referredToSelected === 'true') {
                                                                return (
                                                                    <Form.Control as="textarea"
                                                                        type="text"
                                    
                                                                        placeholder="Enter Hospital Name"
                                                                        onChange={this.handleChange('referredto')}
                                                                        value={this.state.referredto} />
                                                                )
                                                            }
                                                            else {
                                                                return (
                                                                    <p></p>
                                                                )
                                                            }
                                                        })()}
                                                    </Col>

                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                                <Form.Group as={Row} controlId="status">
                                                    <Col sm={3}>
                                                        <Form.Label>Health Status at the time of referring :</Form.Label>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <Form.Control as="textarea"
                                                            rows="3"
                                                            type="text"
                                                            placeholder="Enter the Health Status at the time of referring"
                                                            onChange={this.handleChange('status')}
                                                            value={this.state.status} />
                                                    </Col>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                                <Form.Group as={Row}>
                                                    <Col sm={3}>
                                                        <Form.Label>Need for dialysis :</Form.Label>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <Row>
                                                            <Col>
                                                                <Form.Check
                                                                    type='radio'
                                                                    value="true"
                                                                    id="dialysis_yes"
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
                                                                    id="dialysis_no"
                                                                    label="No"
                                                                    name="dialysis"
                                                                    onChange={this.handleChange('dialysis')}
                                                                    checked={this.state.dialysis === "false"}
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col sm={12}>
                                                <Form.Group as={Row} controlId="treatmentDone">
                                                    <Col sm={3}>
                                                        <Form.Label>Treatment Provided :</Form.Label>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <Form.Control as="textarea"
                                                            rows="3"
                                                            type="text"
                                                            placeholder="Enter the Treatment Provided"
                                                            onChange={this.handleChange('treatmentDone')}
                                                            value={this.state.treatmentDone}
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                                <Form.Group as={Row} controlId="discharge">
                                                    <Col sm={3}>
                                                        <Form.Label>Date Of discharge :</Form.Label>

                                                    </Col>
                                                    <Col sm={3}>
                                                        {/* <DateTime pickerOptions={{ format: "LL" }} /> */}
                                                        <input type="date" value={this.state.discharge} id="discharge" className="form-control" onChange={this.handleChange('discharge')} />
                                                    </Col>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                                <Form.Group as={Row} controlId="recovery">
                                                    <Col sm={3}>
                                                        <Form.Label>Recovery Status :</Form.Label>
                                                    </Col>
                                                    <Col>
                                                        <Form.Control as="textarea" rows="3"
                                                            type="text"
                                                            placeholder="Enter the recovery Status at the time of discharge"
                                                            onChange={this.handleChange('recovery')}
                                                            value={this.state.recovery} />
                                                    </Col>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            }
                            else if (this.state.refered === "false") {
                                return (
                                    <div>
                                        <Row>
                                            <Col sm={12}>
                                                <Form.Group as={Row} controlId="treatmentDone">
                                                    <Col sm={3}>
                                                        <Form.Label>Treatment Provided : </Form.Label>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <Form.Control placeholder="Enter details" as="textarea" rows="3" />
                                                    </Col>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                                <Form.Group as={Row}>
                                                    <Col sm={3}>
                                                        <Form.Label>Date Of discharge :</Form.Label>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <input type="date" className="form-control" id="discharge2" onChange={this.handleChange('discharge')} />
                                                    </Col>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Col sm={12}>
                                            <Row>
                                                <Col sm={3}>
                                                    <Form.Label>Deceased :</Form.Label>
                                                </Col>
                                                <Col sm={3}>
                                                    <Row>
                                                        <Col>
                                                            <Form.Check
                                                                type='radio'
                                                                value="yes"
                                                                id="deceased_yes"
                                                                label="Yes"
                                                                name="deceased"
                                                                onChange={this.handleChange('deceased')}
                                                                checked={this.state.deceased === "yes"}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <Form.Check
                                                                type='radio'
                                                                value="no"
                                                                id="deceased_no"
                                                                label="No"
                                                                name="deceased"
                                                                onChange={this.handleChange('deceased')}
                                                                checked={this.state.deceased === "no"}
                                                            />
                                                        </Col>
                                                    </Row>

                                                </Col>
                                            </Row>
                                        </Col>
                                        <br />
                                        {(() => {
                                            if (this.state.deceased === "yes") {
                                                return (
                                                    <div>
                                                        <Row>
                                                            <Col sm={12}>
                                                                <Form.Group as={Row}>
                                                                    <Col sm={3}>
                                                                        <Form.Label>Date of death : </Form.Label>
                                                                    </Col>
                                                                    <Col sm={3}>
                                                                        <input type="date" value={this.state.deathDate} id="deathDate" class="form-control" onChange={this.handleChange('deathDate')} />
                                                                    </Col>
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col sm={12}>
                                                                <Form.Group as={Row} controlId="causeOfDeath">
                                                                    <Col sm={3}>
                                                                        <Form.Label>Cause of Death: </Form.Label>
                                                                    </Col>
                                                                    <Col sm={3}>
                                                                        <Form.Control placeholder="Enter cause of death" as="textarea" rows="3" />
                                                                    </Col>
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <Form.Group as={Row} controlId="name">
                                                                    <Col sm={3}>
                                                                        <Form.Label>Place Of Death :</Form.Label>
                                                                    </Col>
                                                                    <Col sm={3}>
                                                                        <Form.Control
                                                                            type="text"
                                                                            placeholder="Enter Place of Death"
                                                                            onChange={this.handleChange('placeOfDeath')}
                                                                            value={this.state.placeOfDeath} />
                                                                    </Col>
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                )
                                            }
                                            else if (this.state.deceased === "no") {
                                                return (
                                                    <Container>
                                                    </Container>
                                                )
                                            }
                                        })()}
                                    </div>
                                )
                            }
                        })()}
                        <br />
                        <Row>
                            <Col sm={6} xs={6} style={styles.right}>
                                <Button variant="primary" className="cool-button" onClick={this.previous.bind(this)} >Previous</Button>
                            </Col>
                            <Col sm={6} xs={6} style={styles.left}>
                                <Button variant="primary" className="cool-button" onClick={this.validateAndNext}>Submit</Button>
                            </Col>
                        </Row>
                    </fieldset>
                </Row>
            </Container>
        )
    }
}

export default HospitalDetailsForm;
