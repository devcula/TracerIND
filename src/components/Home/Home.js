import React, { Component } from 'react'
import { Jumbotron, Container, Row } from 'react-bootstrap';
import './Home.css';
import Cards from '../Cards/Cards';
import { fetchData } from '../../CovidApi';

//Comment
export default class Home extends Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })

  }
  render() {
    const { data } = this.state;
    return (
      <Container>
        <Jumbotron>
          <h2>Welcome to TracerIND</h2>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Cards data={data} />
        </Row>
      </Container>
    )
  }
}
