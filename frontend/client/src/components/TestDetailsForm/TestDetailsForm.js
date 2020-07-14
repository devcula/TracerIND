import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class TestDetailsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            serumCreatinine: props.getValue('serumCreatinine'),
            bloodUrea: props.getValue('bloodUrea'),
            uricAcid: props.getValue('uricAcid'),
            electrolytes_sodium: props.getValue('electrolytes_sodium'),
            electrolytes_potassium: props.getValue('electrolytes_potassium'),
            bun: props.getValue('bun'),
            pedalEdema: props.getValue('pedalEdema'),
            pedalType: props.getValue('pedalType'),
        }
    }

    previous = () => {
    this.props.changeData({ formName: "UserDetails" });
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

    creatineCheck = () => {
        console.log(this.state.serumCreatinine);
    }

    render() {
        return (
            <Container>
                <Row>
                    <fieldset style={{ 'width': '100%' }}>
                        <legend>Testing Details</legend>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={2}>
                                        <Form.Label>Serum Creatinie: </Form.Label>
                                    </Col>
                                    <Col sm={2}>
                                        <Form.Control type="number" placeholder="mg/dl" id="serumCreatinine"  onChange={this.handleChange('serumCreatinine')} 
                                        value={this.state.serumCreatinine}/>
                                          {(() => {
                                            if (this.state.serumCreatinine > 2 && this.state.serumCreatinine < 5.9)
                                            {
                                                return (
                                                    <p style={{ 'color': 'blue' }}>Normal Range</p>
                                                        )
                                            }
                                            else if (this.state.serumCreatinine > 6)
                                            {
                                                return (
                                                    <p style={{ 'color': 'red' }}>Severely Increased</p>
                                                        )
                                            }
                                        })()}
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={2}>
                                        <Form.Label>Blood Urea: </Form.Label>
                                    </Col>
                                    <Col sm={2}>
                                        <Form.Control type="number" placeholder="mg/dl" id="bloodUrea"  onChange={this.handleChange('bloodUrea')} 
                                        value={this.state.bloodUrea}/>
                                        {(() => {
                                            if (this.state.bloodUrea > 15 && this.state.bloodUrea < 40)
                                            {
                                                return (
                                                    <p style={{ 'color': 'blue' }}>Normal Range</p>
                                                        )
                                            }
                                            else if (this.state.bloodUrea > 40)
                                            {
                                                return (
                                                    <p style={{ 'color': 'red' }}>Severely Increased</p>
                                                        )
                                            }
                                        })()}
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={2}>
                                        <Form.Label>Uric Acid: </Form.Label>
                                    </Col>
                                    <Col sm={2}>
                                        <Form.Control type="number" placeholder="mg/dl" id="uricAcid"  onChange={this.handleChange('uricAcid')} 
                                        value={this.state.uricAcid}/>
                                        {(() => {
                                            if (this.state.uricAcid > 2.6 && this.state.uricAcid < 6.0)
                                            {
                                                return (
                                                    <p style={{ 'color': 'blue' }}>Normal Range</p>
                                                        )
                                            }
                                            else if (this.state.uricAcid > 6)
                                            {
                                                return (
                                                    <p style={{ 'color': 'red' }}>Severely Increased</p>
                                                        )
                                            }
                                        })()}
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                        <Form.Group as={Row}>
                                    <Col sm={2}>
                                        <Form.Label>Electrolytes: </Form.Label>
                                    </Col>
                                    </Form.Group>  
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={2}>
                                        <Form.Label>Sodium(NA): </Form.Label>
                                    </Col>
                                    <Col sm={2}>
                                        <Form.Control type="number" placeholder="mg/dl" id="lectrolytes_sodium"  onChange={this.handleChange('lectrolytes_sodium')} 
                                        value={this.state.lectrolytes_sodium}/>
                                             {(() => {
                                            if (this.state.lectrolytes_sodium > 135 && this.state.lectrolytes_sodium < 155)
                                            {
                                                return (
                                                    <p style={{ 'color': 'blue' }}>Normal Range</p>
                                                        )
                                            }
                                            else if (this.state.lectrolytes_sodium > 155)
                                            {
                                                return (
                                                    <p style={{ 'color': 'red' }}>Severely Increased</p>
                                                        )
                                            }
                                        })()}
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={2}>
                                        <Form.Label>Potassium(A): </Form.Label>
                                    </Col>
                                    <Col sm={2}>
                                        <Form.Control type="number" placeholder="mg/dl" id="electrolytes_potassium"  onChange={this.handleChange('electrolytes_potassium')} 
                                        value={this.state.electrolytes_potassium}/>
                                            {(() => {
                                            if (this.state.electrolytes_potassium > 3.5 && this.state.electrolytes_potassium < 5.5)
                                            {
                                                return (
                                                    <p style={{ 'color': 'blue' }}>Normal Range</p>
                                                        )
                                            }
                                            else if (this.state.electrolytes_potassium > 5.5)
                                            {
                                                return (
                                                    <p style={{ 'color': 'red' }}>Severely Increased</p>
                                                        )
                                            }
                                        })()}
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Form.Group as={Row}>
                                    <Col sm={2}>
                                        <Form.Label>BUN: Blood Urea Nitrogen: </Form.Label>
                                    </Col>
                                    <Col sm={2}>
                                        <Form.Control type="number" placeholder="mg/dl" id="bun"  onChange={this.handleChange('bun')} 
                                        value={this.state.bun}/>
                                          {(() => {
                                            if (this.state.bun > 8 && this.state.bun < 23)
                                            {
                                                return (
                                                    <p style={{ 'color': 'blue' }}>Normal Range</p>
                                                        )
                                            }
                                            else if (this.state.bun > 23)
                                            {
                                                return (
                                                    <p style={{ 'color': 'red' }}>Severely Increased</p>
                                                        )
                                            }
                                        })()}
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <Form.Label>Pedal Edema:</Form.Label>
                            </Col>
                            <Col sm={2}>
                                <Row>
                                    <Col>
                                        <Form.Check
                                            type='radio'
                                            value="yes"
                                            id="yes"
                                            label="Yes"
                                            name="pedalEdema"
                                            onChange={this.handleChange('pedalEdema')}
                                            checked={this.state.pedalEdema === "yes"}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Check
                                            type='radio'
                                            value="no"
                                            id="no"
                                            label="No"
                                            name="pedalEdema"
                                            onChange={this.handleChange('pedalEdema')}
                                            checked={this.state.pedalEdema === "no"}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={4} >
                            {(() => {
                                            if (this.state.pedalEdema === 'yes')
                                            {
                                                return (
                                                <Col sm={6}>
                                <Form.Group controlId="mandal">
                                    <Form.Label>Pedal Type:</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." onChange={this.handleChange('pedalType')} value={this.state.pedalType}>
                                        <option value="single leg">Single Leg</option>
                                        <option value="bilateral">Bilateral</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                                                        )
                                            }
                                            else
                                            {
                                                return (
                                                   <p></p>
                                                        )
                                            }
                                        })()}
                            </Col>
                        </Row>
                        <Button variant="primary" onClick={this.previous}>
                Previous
            </Button>
                    </fieldset>
                </Row>
            </Container>
            
        )
    }
}

export default TestDetailsForm;





