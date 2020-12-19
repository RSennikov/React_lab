import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';
import img1 from './images/Classic1.jpg'
import img2 from './images/classic2.jpg'
import img3 from './images/Classic3.jpg'
const Slider = () => {

    return(
        <Carousel className = 'carousel'>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    )
}

export default Slider;