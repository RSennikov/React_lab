import React from 'react';
import FormAdd from '../FormAdd/FormAdd';
import DoorsList from '../DoorsList/DoorsList';
import Navigation from '../Navigation/Navigation';
import Slider from '../Slider/Slider';

const Assembler = () => {
    return(
        <div>
            <Navigation/>
            <Slider/>
            <FormAdd/>
            <DoorsList/>
        </div>
        
    )
}

export default Assembler