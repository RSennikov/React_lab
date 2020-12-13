import React from 'react'
import Carousel from 're-carousel'
import './Slider.css'
const Slider = () =>{
    
return(
    <div className ="slider">
       <Carousel auto>
            <div className = 'pic1'>
                <img src = './images/Classic1.jpg' alt= ''/>
            </div>
            <div className = 'pic2'>
                <img src = './images/Classic2.jpg' alt= ''/>
            </div>
            <div className = 'pic3'>
                <img src = './images/Classic3.jpg' alt= ''/>
            </div>
            <div className = 'pic4'>
                <img src = './images/Infinity.jpg' alt= ''/>
            </div>
            <div className = 'pic5'>
                <img src = './images/Infinity_Glass.jpg' alt= ''/>
            </div>
            <div className = 'pic6'>
                <img src = './images/Infinity_walnut.jpg' alt= ''/>
            </div>
            <div className = 'pic7'>
                <img src = './images/Palermo.jpg' alt= ''/>
            </div>
            <div className = 'pic8'>
                <img src = './images/Shaker_style.jpg' alt= ''/>
            </div>

        </Carousel>
    </div>
    )
}

export default Slider