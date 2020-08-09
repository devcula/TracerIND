import React from 'react';

import { Form, Container, Row, Col } from 'react-bootstrap';


class ModalBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let patientDetails = this.props
        let patient = patientDetails.patientDetails
        return (
            <Container>
                <Form>
                    <Row>
                        <Col >
                            <Form.Group as={Row}>
                                <Col sm={3}>
                                    <Form.Label>Name: </Form.Label>
                                </Col>
                                <Col sm={6}>
                                    <Form.Control placeholder="" id="name" value={patient.name} disabled
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Form.Group as={Row}>
                                <Col sm={3}>
                                    <Form.Label>Adhaar: </Form.Label>
                                </Col>
                                <Col sm={6}>
                                    <Form.Control  placeholder="" id="adhar" value={patient.adhaar} disabled
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Form.Group as={Row}>
                                <Col sm={3}>
                                    <Form.Label>Village: </Form.Label>
                                </Col>
                                <Col sm={6}>
                                    <Form.Control  placeholder="" id="vilage" value={patient.village} disabled
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Form.Group as={Row}>
                                <Col sm={3}>
                                    <Form.Label>Age: </Form.Label>
                                </Col>
                                <Col sm={6}>
                                    <Form.Control  placeholder="" id="age" value={patient.age} disabled
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Form.Group as={Row}>
                                <Col sm={3}>
                                    <Form.Label>Phone: </Form.Label>
                                </Col>
                                <Col sm={6}>
                                    <Form.Control  placeholder="" id="phone" value={patient.phone} disabled
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Form.Group as={Row}>
                                <Col sm={3}>
                                    <Form.Label>Blood Group: </Form.Label>
                                </Col>
                                <Col sm={6}>
                                    <Form.Control  placeholder="" id="bloodGroup" value={patient.bloodgroup} disabled
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Form.Group as={Row}>
                                <Col sm={3}>
                                    <Form.Label>Deceased: </Form.Label>
                                </Col>
                                <Col sm={6}>
                                    <Form.Control  placeholder="" id="deceased" value={patient.deceased} disabled
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}

export default ModalBody;