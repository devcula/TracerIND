import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

// import S from './CarouselImg/event.jpg';
import S1 from './CarouselImg/1.png';
import S2 from './CarouselImg/2.png';
import S3 from './CarouselImg/3.png';
import S4 from './CarouselImg/4.png';
import S5 from './CarouselImg/5.png';


import './Carousel.css';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ backgroundColor: "#0a5767"}}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src={S5}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src={S1}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              width={200}
              src={S2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              width={200}
              src={S3}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              width={200}
              src={S4}
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}