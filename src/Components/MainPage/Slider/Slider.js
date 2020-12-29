import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom';
import img1 from './images/Classic1.jpg'
import img2 from './images/classic2.jpg'
import img3 from './images/Classic3.jpg'
import './Slider.css';
const Slider = () => {
  const history = useHistory();
  const redirectToSearchVideo = () => {
    history.push("/SearchVideo");
  }
    return(
        <Carousel className = 'carousel'>
        <Carousel.Item interval={1000}>
        <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            onClick={redirectToSearchVideo}
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
            onClick={redirectToSearchVideo}
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <a href = 'https://almesedoors.com/'>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          </a>
        </Carousel.Item>
      </Carousel>
    )
}

export default Slider;