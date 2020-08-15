import React from 'react';
import axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap';
import OurLoader from '../Loader/Loader';
import { Pie } from 'react-chartjs-2';

import { authHeader } from '../../helpers';

import './HealthStats.css';

class HealthStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: {},
            patientCount: null
        }
    }

    uri = process.env.REACT_APP_SERVER_URI;

    componentDidMount() {
        axios.get(this.uri + 'GetStats/',
            {
                headers: authHeader()
            }
        ).then(responseStats => {
            // console.log(responseStats);
            axios.get(this.uri + 'GetAllPatient',
                {
                    headers: authHeader()
                }).then(responseAll => {
                    this.setState({ data: responseStats.data, patientCount: responseAll.data.length }, () => this.setState({ loading: false }));
                })
                .catch(err => {
                    throw err;
                })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        if (this.state.loading) {
            return <OurLoader />
        }
        else {
            let { BloodUrea, Electrolytes_Potassium, Electrolytes_Sodium, SerumCreatinine, UricAcid } = this.state.data;
            // console.log(this.state);
            const bloodUreaData = {
                labels: ['Normal', 'Critical'],
                datasets: [
                    {
                        label: 'Blood Urea',
                        backgroundColor: [
                            '#2FDE00',
                            '#B21F00'
                        ],
                        hoverBackgroundColor: [
                            '#175000',
                            '#501800'
                        ],
                        data: [this.state.patientCount - BloodUrea.Severe, BloodUrea.Severe]
                    }
                ]
            }
            const potassiumData = {
                labels: ['Normal', 'Critical'],
                datasets: [
                    {
                        label: 'Potassium(K)',
                        backgroundColor: [
                            '#2FDE00',
                            '#B21F00'
                        ],
                        hoverBackgroundColor: [
                            '#175000',
                            '#501800'
                        ],
                        data: [this.state.patientCount - Electrolytes_Potassium.Severe, Electrolytes_Potassium.Severe]
                    }
                ]
            }
            const sodiumData = {
                labels: ['Normal', 'Critical'],
                datasets: [
                    {
                        label: 'Sodium(Na)',
                        backgroundColor: [
                            '#2FDE00',
                            '#B21F00'
                        ],
                        hoverBackgroundColor: [
                            '#175000',
                            '#501800'
                        ],
                        data: [this.state.patientCount - Electrolytes_Sodium.Severe, Electrolytes_Sodium.Severe]
                    }
                ]
            }
            const uricAcidData = {
                labels: ['Normal', 'Critical'],
                datasets: [
                    {
                        label: 'Uric Acid',
                        backgroundColor: [
                            '#2FDE00',
                            '#B21F00'
                        ],
                        hoverBackgroundColor: [
                            '#175000',
                            '#501800'
                        ],
                        data: [this.state.patientCount - UricAcid.Severe, UricAcid.Severe]
                    }
                ]
            }
            const serumCreatinineData = {
                labels: ['Normal', 'Critical', 'Mild'],
                datasets: [
                    {
                        label: 'Uric Acid',
                        backgroundColor: [
                            '#2FDE00',
                            '#B21F00',
                            '#00A6B4'
                        ],
                        hoverBackgroundColor: [
                            '#175000',
                            '#501800',
                            '#003350'
                        ],
                        data: [this.state.patientCount - (SerumCreatinine.Severe + SerumCreatinine.MI), SerumCreatinine.Severe, SerumCreatinine.MI]
                    }
                ]
            }
            return (
                <Container style={{ textAlign: "center" }}>
                    <Row>
                        <Col sm={6} className="metric">
                            <Row>
                                <Col style={{ right: "3rem" }}>
                                    <h3>Blood Urea</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Pie
                                        data={bloodUreaData}
                                        options={{
                                            title: {
                                                display: false,
                                                text: 'Blood Urea',
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
                        <Col sm={6} className="metric">
                            <Row>
                                <Col style={{ right: "3rem" }}>
                                    <h3>Potassium(K)</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Pie
                                        data={potassiumData}
                                        options={{
                                            title: {
                                                display: false,
                                                text: 'Potassium(K)',
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
                    <Row>
                        <Col sm={6} className="metric">
                            <Row>
                                <Col style={{ right: "3rem" }}>
                                    <h3>Sodium(Na)  </h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Pie
                                        data={sodiumData}
                                        options={{
                                            title: {
                                                display: false,
                                                text: 'Sodium(Na)',
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
                        <Col sm={6} className="metric">
                            <Row>
                                <Col style={{ right: "3rem" }}>
                                    <h3>Uric Acid</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Pie
                                        data={uricAcidData}
                                        options={{
                                            title: {
                                                display: false,
                                                text: 'Uric Acid',
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
                    <Row style={{ textAlign: "center" }} className="metric singleMetricInOneRow">
                        <Col>
                            <Row>
                                <Col style={{ right: "3rem" }}>
                                    <h3>Serum Creatinine</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Pie
                                        data={serumCreatinineData}
                                        options={{
                                            title: {
                                                display: false,
                                                text: 'Serum Creatinine',
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

export default HealthStats;