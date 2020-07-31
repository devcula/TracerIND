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

        this.props.changeData({ formName: "HospitalDetails" });
    }

    saveData = async () => {
        await new Promise(resolve => this.props.changeData(this.state, () => resolve()))

    }

    loadNextForm = (formName) => {
        this.props.changeData({ formName: formName });
    }

    previous = () => {
        this.saveData();
        this.props.changeData({ formName: "UserDetails" });
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    validateOneDigitAfterDecimalSerumCreatine = event => {
        if (event.target.value > 2 && event.target.value < 5.9) {
            document.getElementById("serumCreatinine").style.border = "2px solid green"
        }
        else if (event.target.value > 6) {
            document.getElementById("serumCreatinine").style.border = "2px solid red"
        }
        else {
            if (document.getElementById("serumCreatinine")) {
                document.getElementById("serumCreatinine").style.border = "1px solid blue"
            }
        }
        let strValue = event.target.value.toString();
        if (strValue.includes(".")) {
            var index = strValue.indexOf(".")
            event.target.value = Number(strValue.substring(0, index + 2));
        }
        this.setState({ [event.target.id]: event.target.value });
    }

    validateOneDigitAfterDecimalBloodUrea = event => {
        if (event.target.value > 15 && event.target.value < 40) {
            document.getElementById("bloodUrea").style.border = "2px solid green"
        }
        else if (event.target.value > 40) {
            document.getElementById("bloodUrea").style.border = "2px solid red"
        }
        else {
            if (document.getElementById("bloodUrea")) {
                document.getElementById("bloodUrea").style.border = "1px solid blue"
            }
        }
        let strValue = event.target.value.toString();
        if (strValue.includes(".")) {
            var index = strValue.indexOf(".")
            event.target.value = Number(strValue.substring(0, index + 2));
        }
        this.setState({ [event.target.id]: event.target.value });
    }

    validateOneDigitAfterDecimalUricAcid = event => {
        if (event.target.value > 2.6 && event.target.value < 6.0) {
            document.getElementById("uricAcid").style.border = "2px solid green"
        }
        else if (event.target.value > 6) {
            document.getElementById("uricAcid").style.border = "2px solid red"
        }
        else {
            if (document.getElementById("uricAcid")) {
                document.getElementById("uricAcid").style.border = "1px solid blue"
            }
        }
        let strValue = event.target.value.toString();
        if (strValue.includes(".")) {
            var index = strValue.indexOf(".")
            event.target.value = Number(strValue.substring(0, index + 2));
        }
        this.setState({ [event.target.id]: event.target.value });
    }

    validateOneDigitAfterDecimalElectrolytesSodium = event => {
        if (event.target.value > 135 && event.target.value < 155) {
            document.getElementById("electrolytes_sodium").style.border = "2px solid green"
        }
        else if (event.target.value > 155) {
            document.getElementById("electrolytes_sodium").style.border = "2px solid red"
        }
        else {
            if (document.getElementById("electrolytes_sodium")) {
                document.getElementById("electrolytes_sodium").style.border = "1px solid blue"
            }
        }
        let strValue = event.target.value.toString();
        if (strValue.includes(".")) {
            var index = strValue.indexOf(".")
            event.target.value = Number(strValue.substring(0, index + 2));
        }
        this.setState({ [event.target.id]: event.target.value });
    }

    validateOneDigitAfterDecimalElectrolytesPotassium = event => {
        if (event.target.value > 3.5 && event.target.value < 5.5) {
            document.getElementById("electrolytes_potassium").style.border = "2px solid green"
        }
        else if (event.target.value > 5.5) {
            document.getElementById("electrolytes_potassium").style.border = "2px solid red"
        }
        else {
            if (document.getElementById("electrolytes_potassium")) {
                document.getElementById("electrolytes_potassium").style.border = "1px solid blue"
            }
        }
        let strValue = event.target.value.toString();
        if (strValue.includes(".")) {
            var index = strValue.indexOf(".")
            event.target.value = Number(strValue.substring(0, index + 2));
        }
        this.setState({ [event.target.id]: event.target.value });
    }

    validateOneDigitAfterDecimalBun = event => {
        if (event.target.value > 8 && event.target.value < 23) {
            document.getElementById("bun").style.border = "2px solid green"
        }
        else if (event.target.value > 23) {
            document.getElementById("bun").style.border = "2px solid red"
        }
        else {
            if (document.getElementById("bun")) {
                document.getElementById("bun").style.border = "1px solid blue"
            }
        }
        let strValue = event.target.value.toString();
        if (strValue.includes(".")) {
            var index = strValue.indexOf(".")
            event.target.value = Number(strValue.substring(0, index + 2));
        }
        this.setState({ [event.target.id]: event.target.value });
    }

    validateAndNext = async () => {
        //Conditions to check.. If valid, Send form name to switch to next form
        // console.log(this.state);
        await new Promise(resolve => this.props.changeData(this.state, () => resolve()))
        this.loadNextForm("HospitalDetails");
    }

    mandatoryFieldCheck = () => {
        let invalidIds = [];
        try {
            if (this.state.kidneystatus === 'abnormal') {
                if (this.state.doctorreq === "") {
                    invalidIds.push('doctorreq')
                }
                if (this.state.dialysis === "") {
                    invalidIds.push('dialysis')
                }
                if (invalidIds.length > 0) {
                    window.location.href = "#" + invalidIds[0];
                    for (let i = 0; i < invalidIds.length; i++) {
                        document.getElementById(invalidIds[i]).style.border = "2px solid red";
                    }
                    document.getElementById(invalidIds[0]).focus();
                    throw new Error();
                }
                else {
                    window.location.href = "#";
                }
            }
        }
        catch (err) {
            // console.log(false);
        }
    }

    validateAndSubmit = () => {
        // this.mandatoryFieldCheck()
        let invalidIds = [];
        // console.log(this.state.serumCreatinine)
        // console.log(this.state)
        try {
            if (this.state.kidneystatus === 'abnormal') {
                // console.log("doc req")
                // console.log(this.state.doctorreq)
                if (this.state.doctorreq === "") {
                    invalidIds.push('doctorreq')
                }
                if (this.state.dialysis === "") {
                    invalidIds.push('dialysis')
                }
                if (invalidIds.length > 0) {
                    window.location.href = "#" + invalidIds[0];
                    // console.log("insid function")
                    for (let i = 0; i < invalidIds.length; i++) {
                        document.getElementById(invalidIds[i]).style.border = "2px solid red";
                    }
                    document.getElementById(invalidIds[0]).focus();
                    throw new Error();
                }
                else {
                    window.location.href = "#";
                }
            }
            this.saveData();
            this.props.submit();
            // console.log(invalidIds[0])
        }
        catch (err) {
            // console.log(false);
        }

    }

    serumCreatinineAfterReRendering = () => {
        if (this.state.serumCreatinine > 2 && this.state.serumCreatinine < 5.9) {
            document.getElementById("serumCreatinine").style.border = "2px solid green"
        }
        else if (this.state.serumCreatinine > 6) {
            document.getElementById("serumCreatinine").style.border = "2px solid red"
        }
        else {
            if (document.getElementById("serumCreatinine")) {
                document.getElementById("serumCreatinine").style.border = "1px solid blue"
            }
        }
    }

    bloodUreaAfterReRendering = () => {
        if (this.state.bloodUrea > 15 && this.state.bloodUrea < 40) {
            document.getElementById("bloodUrea").style.border = "2px solid green"
        }
        else if (this.state.bloodUrea > 40) {
            document.getElementById("bloodUrea").style.border = "2px solid red"

        }
        else {
            if (document.getElementById("bloodUrea")) {
                document.getElementById("bloodUrea").style.border = "1px solid blue"
            }
        }
    }

    uricAcidfterReRendering = () => {
        if (this.state.uricAcid > 2.6 && this.state.uricAcid < 6.0) {
            document.getElementById("uricAcid").style.border = "2px solid green"
        }
        else if (this.state.uricAcid > 6) {
            document.getElementById("uricAcid").style.border = "2px solid red"
        }
        else {
            if (document.getElementById("uricAcid")) {
                document.getElementById("uricAcid").style.border = "1px solid blue"
            }
        }
    }

    electrolytesSodiumReRendering = () => {
        if (this.state.electrolytes_sodium > 135 && this.state.electrolytes_sodium < 155) {
            document.getElementById("electrolytes_sodium").style.border = "2px solid green"
        }
        else if (this.state.electrolytes_sodium > 155) {
            document.getElementById("electrolytes_sodium").style.border = "2px solid red"
        }
        else {
            if (document.getElementById("electrolytes_sodium")) {
                document.getElementById("electrolytes_sodium").style.border = "1px solid blue"
            }
        }
    }

    electrolytesPotassiumReRendering = () => {
        if (this.state.electrolytes_potassium > 3.5 && this.state.electrolytes_potassium < 5.5) {
            document.getElementById("electrolytes_potassium").style.border = "2px solid green"
        }
        else if (this.state.electrolytes_potassium > 5.5) {
            document.getElementById("electrolytes_potassium").style.border = "2px solid red"
        }
        else {
            if (document.getElementById("electrolytes_potassium")) {
                document.getElementById("electrolytes_potassium").style.border = "1px solid blue"
            }
        }
    }

    bunReRendering = () => {
        if (this.state.bun > 8 && this.state.bun < 23) {
            document.getElementById("bun").style.border = "2px solid green"
        }
        else if (this.state.bun > 23) {
            document.getElementById("bun").style.border = "2px solid red"
        }
        else {
            if (document.getElementById("bun")) {
                document.getElementById("bun").style.border = "1px solid blue"
            }
        }
    }

    componentDidMount = () => {
        // console.log(this.state)
        this.serumCreatinineAfterReRendering();
        this.bloodUreaAfterReRendering();
        this.uricAcidfterReRendering();
        this.electrolytesPotassiumReRendering();
        this.electrolytesSodiumReRendering();
        this.bunReRendering();

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
                        <legend>Testing Details</legend>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Date of Testing : </Form.Label>
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
                                        <Form.Label>Serum Creatinine : </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control min="0" type="number" placeholder="mg/dl" id="serumCreatinine" onChange={this.validateOneDigitAfterDecimalSerumCreatine}
                                            value={this.state.serumCreatinine} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Blood Urea : </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="number" min="0" placeholder="mg/dl" id="bloodUrea" onChange={this.validateOneDigitAfterDecimalBloodUrea}
                                            value={this.state.bloodUrea}
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Uric Acid : </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="number" min="0" placeholder="mg/dl" id="uricAcid" onChange={this.validateOneDigitAfterDecimalUricAcid}
                                            value={this.state.uricAcid} />
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
                                        <Form.Label>Sodium(Na) : </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="number" min="0" placeholder="mg/dl" id="electrolytes_sodium" onChange={this.validateOneDigitAfterDecimalElectrolytesSodium}
                                            value={this.state.electrolytes_sodium} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Potassium(K) : </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="number" min="0" placeholder="mg/dl" id="electrolytes_potassium" onChange={this.validateOneDigitAfterDecimalElectrolytesPotassium}
                                            value={this.state.electrolytes_potassium} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>BUN (Blood Urea Nitrogen) : </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control type="number" min="0" placeholder="mg/dl" id="bun" onChange={this.validateOneDigitAfterDecimalBun}
                                            value={this.state.bun} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row} >
                                    <Col sm={6}>
                                        <Form.Label>Pedal Edema :</Form.Label>
                                    </Col>
                                    <Col sm={6}>
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
                                </Form.Group>
                            </Col>
                            <Col sm={6} >
                                {(() => {
                                    if (this.state.pedalEdema === 'Y') {
                                        return (
                                            <Form.Group as={Row} controlId="pedaltype">
                                                <Col sm={6}>
                                                    <Form.Label>Pedal Type :</Form.Label>
                                                </Col>
                                                <Col sm={6}>
                                                    <Form.Control as="select" onChange={this.handleChange('pedaltype')} value={this.state.pedaltype}>
                                                        <option value="">Choose...</option>
                                                        <option value="single leg">Single Leg</option>
                                                        <option value="bilateral">Bilateral</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
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
                            <Col sm={3}>
                                <Form.Label>Kidney Functioning Status :</Form.Label>
                            </Col>
                            <Col sm={3}>
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
                                    <React.Fragment>
                                        <Row>
                                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                                <Form.Group as={Row}>
                                                    <Col sm={3}>
                                                        <Form.Label>Specify the ailments : </Form.Label>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <Form.Control as="textarea" placeholder="Description" id="ailments" onChange={this.handleChange('ailments')}
                                                            value={this.state.ailments} />
                                                    </Col>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={3}>
                                                <Form.Label>Need for Dialysis :</Form.Label>
                                            </Col>
                                            <Col sm={3} id="dialysis">
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
                                        <br />
                                        <Row>
                                            <Col sm={4}>
                                                <Form.Label>Need for immediate Doctor Supervision :</Form.Label>
                                            </Col>
                                            <Col sm={3} id="doctorreq">
                                                <Row>
                                                    <Col>
                                                        <Form.Check
                                                            type='radio'
                                                            value="true"
                                                            id="true"
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
                                                            id="false"
                                                            label="No"
                                                            name="doctorreq"
                                                            onChange={this.handleChange('doctorreq')}
                                                            checked={this.state.doctorreq === "false"}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </React.Fragment>
                                )
                            }
                        })()}

                        {(() => {
                            if (this.state.doctorreq === 'true') {
                                return (
                                    <Row>
                                        <Col sm={6} xs={6} style={styles.right}>
                                            <Button variant="primary"
                                                onClick={this.previous}
                                                className="cool-button"
                                            >Previous</Button>
                                        </Col>
                                        <Col sm={6} xs={6} style={styles.left}>
                                            <Button variant="primary"
                                                onClick={this.validateAndNext}
                                                className="cool-button"
                                            >Next</Button>
                                        </Col>
                                    </Row>

                                )
                            }
                            else {
                                return (
                                    <Row>
                                        <Col sm={6} xs={6} style={styles.right}>
                                            <Button variant="primary"
                                                onClick={this.previous.bind(this)}
                                                className="cool-button"
                                            >Previous</Button>
                                        </Col>
                                        <Col sm={6} xs={6} style={styles.left}>
                                            <Button variant="primary"
                                                onClick={this.validateAndSubmit}
                                                className="cool-button"
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
