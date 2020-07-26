import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export default function Error404() {

    var seconds = 3;

    setInterval(() => {
        seconds--;
        document.getElementById('seconds').innerHTML = seconds;
        if(seconds === 0){
            clearInterval();
            window.location.href = "/";
        }
    }, 1000);

    return (
        <Container>
            <fieldset style={{ textAlign: "center" }}>
                <legend className="success-legend">Error 404</legend>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faTimesCircle} size="8x" color="green" />
                    </Col>
                </Row>
                <Row style={{ marginTop: "2rem" }}>
                    <Col>
                        <h2>Page Not Found</h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    <Col>
                        Redirecting to homepage in <span id="seconds">{seconds}</span> seconds...
                    </Col>
                </Row>
            </fieldset>
        </Container >
    )
}
