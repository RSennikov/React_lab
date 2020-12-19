import React from 'react';
import FormAdd from '../FormAdd/FormAdd';
import DoorsList from '../DoorsList/DoorsList';
import SearchVideo from '../SearchVideo/SearchVideo'
import Navigation from '../Navigation/Navigation';
import Slider from '../Slider/Slider';

const Assembler = () => {
    return(
        <div>
            <Navigation>
                <SearchVideo/>
            </Navigation>
            <FormAdd/>
            <DoorsList/>
            <Slider/>
        </div>
        
    )
}

export default Assembler