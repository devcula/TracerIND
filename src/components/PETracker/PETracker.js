import React from 'react';
import axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';

// import { uri } from '../../index';
import { authHeader } from '../../helpers';

class PETracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: {}
        }
    }

    uri = process.env.REACT_APP_SERVER_URI;

    componentDidMount() {
        axios.get(this.uri + 'GetPE/',
            {
                headers: authHeader()
            }
        ).then(response => {
            console.log(response);
            this.setState({ data: response.data }, this.setState({loading: false}));
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        if (this.state.loading) {
            return (
                <React.Fragment>
                    Loading...
                </React.Fragment>
            )
        }
        else {
            const peData = {
                labels: ['Yes', 'No'],
                datasets: [
                    {
                        label: 'Rainfall',
                        backgroundColor: [
                            '#B21F00',
                            '#6800B4'
                        ],
                        hoverBackgroundColor: [
                            '#501800',
                            '#35014F'
                        ],
                        data: [this.state.data.PE, this.state.data.total - this.state.data.PE]
                    }
                ]
            }
            const peTypeData = {
                labels: ['Single Leg', 'Bilateral'],
                datasets: [
                    {
                        label: 'Rainfall',
                        backgroundColor: [
                            '#00A6B4',
                            '#C9DE00'
                        ],
                        hoverBackgroundColor: [
                            '#003350',
                            '#4B5000'
                        ],
                        data: [this.state.data.Single, this.state.data.Bilateral]
                    }
                ]
            }
            return (
                <Container style={{marginTop: "10vh"}}>
                    <Row>
                        <Col sm={6}>
                            <Row>
                                <Col style={{ right: "2rem" }}>
                                    <h3>Pedal Edema Cases</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Pie
                                        data={peData}
                                        options={{
                                            title: {
                                                display: false,
                                                text: 'Pedal Edema Cases',
                                                fontSize: 20
                                            },
                                            legend: {
                                                display: true,
                                                position: 'right'
                                            }
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={6}>
                            <Row>
                                <Col style={{right: "3rem"}}>
                                    <h3>Pedal Edema Type Distribution</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Pie
                                        data={peTypeData}
                                        options={{
                                            title: {
                                                display: false,
                                                text: 'Pedal Edema Type Distribution',
                                                fontSize: 20
                                            },
                                            legend: {
                                                display: true,
                                                position: 'right'
                                            }
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}

export default PETracker;