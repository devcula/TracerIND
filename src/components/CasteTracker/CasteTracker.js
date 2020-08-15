import React from 'react';
import axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { authHeader } from '../../helpers';
import OurLoader from '../Loader/Loader';

class CasteTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: {}
        }
    }

    componentDidMount() {
        axios.get(this.uri + 'GetPVTG/',
            {
                headers: authHeader()
            }
        ).then(response => {
            // console.log(response);
            this.setState({ data: response.data }, this.setState({ loading: false }))
        }).catch(err => {
            console.log(err);
        })
    }

    uri = process.env.REACT_APP_SERVER_URI;

    render() {
        if (this.state.loading) {
            return <OurLoader />
        }
        else {
            let { PVTG, ST, NST } = this.state.data;
            // console.log(PVTG, ST, NST);
            const pvtgData = {
                labels: ['PVTG', 'ST', 'Non ST'],
                datasets: [
                    {
                        label: 'Caste distribution',
                        backgroundColor: [
                            '#00A6B4',
                            '#6800B4',
                            '#2FDE00'
                        ],
                        hoverBackgroundColor: [
                            '#003350',
                            '#35014F',
                            '#175000'
                        ],
                        data: [PVTG, ST, NST]
                    }
                ]
            }
            return (
                <Container>
                    <Row>
                        <Col style={{right: "3rem"}}>
                            <h3>Caste Distribution</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <Pie
                                        data={pvtgData}
                                        options={{
                                            title: {
                                                display: false,
                                                text: 'Caste Distribution',
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

export default CasteTracker;