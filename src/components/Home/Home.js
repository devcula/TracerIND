import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import Cards from '../Cards/Cards';
import { fetchData } from '../../CovidApi';
// import Infotrack from '../Infotrack/Infotrack';
// import Bucket from '../Bucket/Bucket';
import Slider from '../Carousel/Carousel';
// import Header from '../Header/Header';
// import Sidenav from '../Sidenav/Sidenav';
export default class Home extends Component {
  state = {
    data: {},
  }
  //Comment
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }
  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        {/* <Header /> */}
        <Container >
          <Jumbotron>
            <h3>Welcome to TracerIND</h3>
          </Jumbotron>
          {/* <Infotrack /> */}
          <Slider />
          <Row className="show-grid text-center new4">
            <Col sm={12}>
              <Cards data={data} />
            </Col>
          </Row>
          {/* <Sidenav /> */}
          {/* <Row>
          <Col>
            <Bucket />
          </Col>
          <Col>
          </Col>
        </Row> */}
        </Container>
      </React.Fragment>
    )
  }
}
