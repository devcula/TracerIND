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
        let firstName = patient.name;
        let space = " ";
        let lastName = patient.surname;
        let fullName = firstName.concat(space, lastName);
        let pedalEdema = 'Yes'
        let isPedalTypeEmpty = true
        if (patient.pedalEdema === 'N') {
            pedalEdema = 'No'
        }
        if (pedalEdema === 'Yes') {
            // console.log("here")
            if (!(patient.pedaltype === '')) {
                // console.log("here")
                isPedalTypeEmpty = false
            }
        }
        let adhaar = patient.adhaar.slice(0, 4) + "-" + patient.adhaar.slice(4, 8) + "-" + patient.adhaar.slice(8)
        // console.log(adhaar)
        // console.log(patient)
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
                                    <Form.Control placeholder="" id="name" value={fullName.toUpperCase()} disabled
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
                                    <Form.Control placeholder="" id="adhar" value={adhaar} disabled
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
                                    <Form.Control placeholder="" id="vilage" value={patient.village} disabled
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
                                    <Form.Control placeholder="" id="age" value={patient.age} disabled
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
                                    <Form.Control placeholder="" id="phone" value={patient.phone} disabled
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
                                    <Form.Control placeholder="" id="bloodGroup" value={patient.bloodgroup.toUpperCase()} disabled
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
                                    <Form.Control placeholder="" id="deceased" value={patient.deceased.toUpperCase()} disabled
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Form.Group as={Row}>
                                <Col sm={3}>
                                    <Form.Label>PVTG: </Form.Label>
                                </Col>
                                <Col sm={6}>
                                    <Form.Control placeholder="" id="pvtg" value={patient.PVTG.toUpperCase()} disabled
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Form.Group as={Row}>
                                <Col sm={3}>
                                    <Form.Label>Pedal Edema: </Form.Label>
                                </Col>
                                <Col sm={6}>
                                    <Form.Control placeholder="" id="pedal" value={pedalEdema.toUpperCase()} disabled
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    {(() => {
                        if (isPedalTypeEmpty) {
                            return (
                                <Container></Container>
                            )
                        }
                        else {
                            return (
                                <Row>
                                    <Col >
                                        <Form.Group as={Row}>
                                            <Col sm={3}>
                                                <Form.Label>Pedal Type: </Form.Label>
                                            </Col>
                                            <Col sm={6}>
                                                <Form.Control placeholder="" id="pedalType" value={patient.pedaltype.toUpperCase()} disabled
                                                />
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            )
                        }

                    })()}
                </Form>
            </Container>
        )
    }
}

export default ModalBody;