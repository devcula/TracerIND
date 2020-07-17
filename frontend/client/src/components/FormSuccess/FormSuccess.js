import React from 'react';

import { Row, Col, Container, Button } from 'react-bootstrap';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './FormSuccess.css';

export default function FormSuccess() {

    const redirect = () => {
        window.location.href = "/add";
    }

    return (
        <Container>
            <fieldset style={{textAlign: "center"}}>
                <legend className="success-legend">Success</legend>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faCheckCircle} size="8x" color="green" />
                    </Col>
                </Row>
                <Row style={{ marginTop: "2rem" }}>
                    <Col>
                        <h2>Data Saved Sucessfully</h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    <Col>
                        <Button variant="primary"
                        onClick={redirect}
                        >
                            Add another patient
                        </Button>
                    </Col>
                </Row>
            </fieldset>
        </Container>
    )
}