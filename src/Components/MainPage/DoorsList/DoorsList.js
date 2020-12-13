import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {deleteCurentDoor} from '../../../Redux/Actions';
import './DoorsList.css';

const DoorsList = () =>{

    const formReducer = useSelector(state => state.formReducer)
    const dispatch = useDispatch();
    const removeBtn = (id) =>{
        dispatch(deleteCurentDoor(id))
    }
    return(
        <div className = 'doorsListDiv'>
           <ol className = 'rectangle-list'>
                {formReducer.map((item) =>(
                    <div className = 'doorsList' key = {item.id} >
                        <li>Коллекция: {item.collection}</li>
                        <li>Материал: {item.material}</li>
                        <li>Стиль: {item.style}</li>
                        <li>Цвет: {item.color}</li>
                        <button className = 'removeBtn' onClick = {() => removeBtn(item.id)}>Удалить</button>
                    </div>
                ))}
           </ol>
        </div>
    )
}

export default DoorsList