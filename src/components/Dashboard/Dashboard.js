import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Dashboard.css';

import SideBar from '../Sidebar/Sidebar';

export default class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
            <div id = "App">
                       <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
                       <div id="page-wrap">

                    <Container>
                        <Row style={{marginTop: "40vh"}}>
                            <Col>
                                <h1>
                                        Coming Soon..
                                </h1>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                    </div>
            </React.Fragment>
        )
    }
}
