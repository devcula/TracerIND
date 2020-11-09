import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import './BloodProfile.css';
class BloodProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dateOfBloodTest: props.getValue('dateOfBloodTest'),
            wbc: props.getValue('wbc'),
            pcv: props.getValue('pcv'),
            rbc: props.getValue('rbc'),
            mcv: props.getValue('mch'),
            mchc: props.getValue('mchc'),
            rdw: props.getValue('rdw'),
            monocytes: props.getValue('monocytes'),
            lymphocytes: props.getValue('lymphocytes'),
            eosinophils: props.getValue('eosinophils'),
            neutrophils: props.getValue('neutrophils'),
            haemoglobin: props.getValue('haemoglobin'),
            platelet: props.getValue('platelet'),
        }
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    saveData = async () => {
        await new Promise(resolve => this.props.changeData(this.state, () => resolve()))
    }

    next = () => {
        this.saveData().then(() => {
            this.props.changeData({formName: "TestDetails"});
        })
    }

    previous = () => {
        this.saveData().then(() => {
            this.props.changeData({formName: "Observations"});
        })
    }

    render() {
        const styles = {
            center: {
                textAlign: "center"
            },
            paddingLeft: {
                paddingLeft: "10px"
            },
            left: {
                textAlign: "left"
            },
            right: {
                textAlign: "right"
            }
        }
        return (
            <Container>
                <Row>
                    <fieldset style={{ 'width': '100%', ...styles.center }}>
                        <legend>Blood Profile</legend>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>

                                    <Col sm={3}>
                                        <Form.Label>Date of testing :</Form.Label>
                                    </Col>
                                <Col sm={3}>
                                 <Form.Control 
                                   rows="3"
                                   type="date"
                                   placeholder="DD/MM/YYYY"
                                   onChange={this.handleChange('dateOfBloodTest')}
                                   value={this.state.dateOfBloodTest}
                                   id="dateOfBloodTest" />
                                  </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>

                                    <Col sm={3}>
                                        <Form.Label>Total WBC :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            rows="3"
                                            type="number"
                                            placeholder="WBC in (K/microL)"
                                            onChange={this.handleChange('wbc')}
                                            value={this.state.wbc}
                                            id="wbc"

                                        />

                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>

                                    <Col sm={3}>
                                        <Form.Label>Haemoglobin :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            rows="3"
                                            type="number"
                                            placeholder="Haemoglobin in (g/dL)"
                                            onChange={this.handleChange('haemoglobin')}
                                            value={this.state.haemoglobin}
                                            id="haemoglobin"

                                        />

                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>

                                    <Col sm={3}>
                                        <Form.Label>Packed Cell Volume :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            rows="3"
                                            type="number"
                                            placeholder="Packed Cell Volume in (%)"
                                            onChange={this.handleChange('pcv')}
                                            value={this.state.pcv}
                                            id="pcv"

                                        />

                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>

                                    <Col sm={3}>
                                        <Form.Label>RBC Count :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            rows="3"
                                            type="number"
                                            placeholder="RBC in (mill/mm3)"
                                            onChange={this.handleChange('rbc')}
                                            value={this.state.rbc}
                                            id="rbc"

                                        />

                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>

                                    <Col sm={3}>
                                        <Form.Label>MCV :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            rows="3"
                                            type="number"
                                            placeholder="MCV in (fL)"
                                            onChange={this.handleChange('mcv')}
                                            value={this.state.mcv}
                                            id="mcv"

                                        />

                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>

                                    <Col sm={3}>
                                        <Form.Label>MCH :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            rows="3"
                                            type="number"
                                            placeholder="MCH in (g)"
                                            onChange={this.handleChange('mch')}
                                            value={this.state.mch}
                                            id="mch"

                                        />

                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>

                                    <Col sm={3}>
                                        <Form.Label>MCHC :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            rows="3"
                                            type="number"
                                            placeholder="MCHC in (g/dL)"
                                            onChange={this.handleChange('mchc')}
                                            value={this.state.mchc}
                                            id="mchc"

                                        />

                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>

                                    <Col sm={3}>
                                        <Form.Label>Red Cell Distotion Width :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            rows="3"
                                            type="number"
                                            placeholder="Red Cell Distotion Width  (%)"
                                            onChange={this.handleChange('rdw')}
                                            value={this.state.rdw}
                                            id="rdw"

                                        />

                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>

                                    <Col sm={3}>
                                        <Form.Label>Platelet Count :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            rows="3"
                                            type="number"
                                            placeholder="Platlet in (K/microL)"
                                            onChange={this.handleChange('platelet')}
                                            value={this.state.platelet}
                                            id="platelet" />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group as={Row}>
                                <Col className="section-heading">
                                    <h3>Differential Count</h3>
                                </Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Monocytes:</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            className="my-1 mr-sm-2"
                                            rows="3"
                                            type="number"
                                            placeholder="%"
                                            onChange={this.handleChange('monocytes')}
                                            value={this.state.monocytes}
                                            id="monocytes"
                                        />

                                    </Col>
                                    <Col sm={3}>
                                        <Form.Label>Lymphocytes :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            className="my-1 mr-sm-2"
                                            rows="3"
                                            type="number"
                                            placeholder="%"
                                            onChange={this.handleChange('lymphocytes')}
                                            value={this.state.lymphocytes}
                                            id="lymphocytes" />

                                    </Col>

                                    <Col sm={3}>
                                        <Form.Label>Eosinophils :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control

                                            className="my-1 mr-sm-2"
                                            rows="3"
                                            type="number"
                                            placeholder="%"
                                            onChange={this.handleChange('eosinophils')}
                                            value={this.state.Eosinophils}
                                            id="eosinophils" />

                                    </Col>
                                    <Col sm={3}>
                                        <Form.Label>Neutrophils :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control

                                            className="my-1 mr-sm-2"
                                            rows="3"
                                            type="number"
                                            placeholder="%"
                                            onChange={this.handleChange('neutrophils')}
                                            value={this.state.neutrophils}
                                            id="neutrophils" />

                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row style={{textAlign: "center"}}>
                            <Col sm={6} xs={6} style={styles.right}>
                                <Button 
                                    variant="primary"
                                    className="cool-button"
                                    onClick={this.previous}
                                >Previous</Button>
                            </Col>
                            <Col sm={6} xs={6} style={styles.left}>
                                <Button 
                                    variant="primary"
                                    className="cool-button"
                                    onClick={this.next}
                                >Next</Button>
                            </Col>
                        </Row>
                    </fieldset>
                </Row>
            </Container>
        )
    }
}

export default BloodProfile;


