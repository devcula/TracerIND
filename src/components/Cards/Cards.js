import React from 'react';
import './Cards.css'
import { Card, CardDeck, Container, Row, Col } from 'react-bootstrap';
import {Bar} from 'react-chartjs-2';
import CountUp from 'react-countup';
import OurLoader from '../Loader/Loader';
import axios from 'axios';

const Cards = (props) => {
  let [barData, setBarData] = React.useState(null);
  let { confirmed, recovered, deaths, active } = props.data; 

  React.useEffect(() => {
    if(!barData){
      axios.get("https://api.covid19india.org/csv/latest/state_wise.csv")
        .then(response => {
          let dataLabels = [], dataValues = [];
          let rows = response.data.split('\n');
          // console.log(rows);
          //First row is headers i.e. index 0
          for (let i = 1; i < rows.length; i++) {
            let values = rows[i].split(',');
            if (values[0].toLowerCase() !== 'total' && values[0].toLowerCase() !== 'state unassigned' && values.length >= 11) {
              dataLabels.push(values[0]);
              dataValues.push(values[1]);
            }
          }
          // console.log(dataLabels);
          // console.log(dataValues);
          setBarData({
            labels: dataLabels,
            datasets: [
              {
                label: 'Confirmed cases',
                backgroundColor: '#0a5767',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: dataValues
              }
            ]
          })
        }).catch(err => {
          console.error(`Error while getting state data csv : ${err}`);
        });
    }
  });

  if (!confirmed) {
    return <OurLoader />
  }

  return (
    <div className="container">
      <h2>
        Coronavirus stats of India
        <h6 style={{fontSize: 15}}>
          (<a href="https://devcula.github.io/corona-monitor/" target="_blank" rel="noopener noreferrer">
            See Global Stats
          </a>)
        </h6>
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
      {
        !barData && <OurLoader />
      }
      {
        barData && <Container id="stateWiseData">
          <Row>
            <Col>
              <Bar
                data={barData}
                options={{
                  title: {
                    display: true,
                    text: 'State wise distribution',
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
        </Container>
      }
    </div>
  )
}

export default Cards;
