import React from 'react';
import Loader from 'react-loader-spinner'
import {Container, Row, Col} from 'react-bootstrap';

export default class OurLoader extends React.Component {
    render() {
        return (
            <Container>
                <Row style={{textAlign: "center"}}>
                    <Col>
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000} //3 secs
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}