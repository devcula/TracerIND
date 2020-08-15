import React from 'react';

import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import './BloodProfile.css';
class BloodProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wbc: props.getValue('wbc'),
            monocytes: props.getValue('monocytes'),
            lymphocytes: props.getValue('lymphocytes'),
            eosinophils: props.getValue('eosinophils'),
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


