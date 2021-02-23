import React from 'react';
import './Cards.css'
import { Card, CardDeck, Container, Row, Col } from 'react-bootstrap';
import {Bar} from 'react-chartjs-2';
import CountUp from 'react-countup';
import OurLoader from '../Loader/Loader';

const Cards = (props) => {

  let { confirmed, recovered, deaths, active, districtData } = props.data; 

  if (!confirmed) {
    return <OurLoader />
  }
  
  // let dataLabels = [], dataValues = [];

  // for(let i = 0; i < districtData.length; i++) {
  //   dataLabels.push(districtData[i].name);
  //   dataValues.push(districtData[i].confirmed);
  // }

  // const barData = {
  //   labels: dataLabels,
  //   datasets: [
  //     {
  //       label: 'Confirmed cases',
  //       backgroundColor: '#0a5767',
  //       borderColor: 'rgba(0,0,0,1)',
  //       borderWidth: 2,
  //       data: dataValues
  //     }
  //   ]
  // }

  return (
    <div className="container">
      <h2>
        Coronavirus stats of India
      </h2>
      <CardDeck>
        <Card
          text="D13C2B"
          bg='light'
          xs={12}
          s={6}
          md={3}
          className="mb-2"
        >
          <Card.Body className="confirmed">
            <Card.Title> Confirmed </Card.Title>
            <Card.Text><CountUp start={0} end={confirmed} duration={1} separator="," /> </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg='light'
          className="mb-2"
          xs={12}
          s={6}
          md={3}
        >
          <Card.Body className="active">
            <Card.Title> Active </Card.Title>
            <Card.Text> <CountUp start={0} end={active} duration={1} separator="," /></Card.Text>

          </Card.Body>
        </Card>
        <Card
          bg='light'
          xs={12}
          s={6}
          md={3}
          className="mb-2"
        >
          <Card.Body className="recovered">
            <Card.Title> Recovered </Card.Title>
            <Card.Text> <CountUp start={0} end={recovered} duration={1} separator="," /></Card.Text>

          </Card.Body>
        </Card>
        <Card
          className="mb-2"
          xs={12}
          s={6}
          md={3}
        >
          <Card.Body className="deaths">
            <Card.Title> Deaths </Card.Title>
            <Card.Text> <CountUp start={0} end={deaths} duration={1} separator="," /></Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <br/>
      {/* <Container id="stateWiseData">
        <Row>
          <Col>
            <Bar
              data={barData}
              options={{
                title: {
                  display: true,
                  text: 'District wise distribution',
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
      </Container> */}
    </div>
  )
}

export default Cards;
