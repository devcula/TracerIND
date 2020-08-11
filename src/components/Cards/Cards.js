import React from 'react';
import './Cards.css'
import { Card, CardDeck } from 'react-bootstrap';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, active } }) => {
  if (!confirmed) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="container">
      <h1>
        COVID-19 stats for Andhra Pradesh
          </h1>
      <CardDeck>
        <Card
          style={{ width: '18rem' }}
          text="D13C2B"
          bg='light'
          xs={12}
          s={6}
          md={3}
          className="mb-2"
        >

          <Card.Body className="confirmed">
            <Card.Title> Confirmed </Card.Title>
            <Card.Text><CountUp start={0} end={confirmed} duration={1.75} separator="," /> </Card.Text>

          </Card.Body>
        </Card>
        <Card
          style={{ width: '18rem' }}
          bg='light'
          className="mb-2"
          xs={12}
          s={6}
          md={3}
        >

          <Card.Body className="active">
            <Card.Title> Active </Card.Title>
            <Card.Text> <CountUp start={0} end={active} duration={1.75} separator="," /></Card.Text>

          </Card.Body>
        </Card>
        <Card
          style={{ width: '18rem' }}
          bg='light'
          xs={12}
          s={6}
          md={3}
          className="mb-2"
        >

          <Card.Body className="recovered">
            <Card.Title> Recovered </Card.Title>
            <Card.Text> <CountUp start={0} end={recovered} duration={1.75} separator="," /></Card.Text>

          </Card.Body>
        </Card>
        <Card
          style={{ width: '18rem' }}
          bg='light'
          className="mb-2"
          xs={12}
          s={6}
          md={3}
        >

          <Card.Body className="deaths">
            <Card.Title> Deaths </Card.Title>
            <Card.Text> <CountUp start={0} end={deaths} duration={1.75} separator="," /></Card.Text>

          </Card.Body>
        </Card>


      </CardDeck>

    </div>
  )
}

export default Cards;
