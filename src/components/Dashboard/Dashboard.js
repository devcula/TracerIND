import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Dashboard.css';

import SideBar from '../Sidebar/Sidebar';
import Directory from '../Directory/Directory';
import HealthStats from '../HealthStats/HealthStats';
import PVTGTracker from '../PVTGTracker/PVTGTracker';
import PETracker from '../PETracker/PETracker';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dashView: "PVTGTracker"
        }
    }

    changeView = (nextView) => {
        this.setState({dashView: nextView});
    }

    render() {
        return (
            <React.Fragment>
                <div id="SideBarContainer">
                    <SideBar currentView={this.state.dashView} changeView={this.changeView} pageWrapId={"page-wrap"} outerContainerId={"SideBarContainer"} />
                    <div id="page-wrap">
                        {
                            (() => {
                                switch (this.state.dashView) {
                                    case "PatientStatus":
                                        return <Directory />
                                    case "HealthStats":
                                        return <HealthStats />
                                    case "PVTGTracker":
                                        return <PVTGTracker />
                                    case "PedalEdemaTracker":
                                        return <PETracker />
                                    default:
                                        return (
                                            <Container>
                                                <Row style={{ marginTop: "40vh" }}>
                                                    <Col>
                                                        <h1>
                                                            Coming Soon..
                                                        </h1>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        )
                                }
                            })()
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
