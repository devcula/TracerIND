

  
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


import S from './CarouselImg/event.jpg';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={S}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      width={200}
      src={S}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>LLLLL</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={S}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>PPPP.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
       
     </div>
    );
  }
}