import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addNextDoor} from '../../../Redux/Actions';
import './FormAdd.css'

const FormAdd = () =>{
    
    const formReducer = useSelector(state => state.formReducer)
    const dispatch = useDispatch();
    const [collection, setCollection] = useState('')
    const [material, setMaterial] = useState('')
    const [style, setStyle] = useState('')
    const [color, setColor] = useState('')
    const [id] = useState(Number)

    const collectionUpdate = (e) => {
        setCollection(e.target.value)
    }
    const materialUpdate = (e) => {
        setMaterial(e.target.value)
    }
    const styleUpdate = (e) => {
        setStyle(e.target.value)
    }
    const colorUpdate = (e) => {
        setColor(e.target.value)
    }

    const addDoor = (e) =>{
        if(collection === '' || material === '' || style === '' || color === '' ){
            e.preventDefault()
            alert('Проверьте заполнение полей')
        }else{
            e.preventDefault()
            dispatch(addNextDoor( collection, material, style, color, id))
        }
    }

    return(
    <form className = "contact_form" onSubmit={addDoor}>
       <ul>
        <li>
            <label for="collection">Коллекция:</label>
            <input type="text" placeholder="Например: Deform" value = {collection} onChange={collectionUpdate} required=" "/>
        </li>
        <li>
            <label for="material">Материал:</label>
            <input type="text" name="material" placeholder="Например: Красное дерево" value = {material} onChange={materialUpdate} required=" "/>
        </li>
        <li>
            <label for="style">Стиль:</label>
            <input type="text" name="style" placeholder="Например: Винтаж" value = {style} onChange={styleUpdate} required=" "/>
        </li>
        <li>
            <label for="color">Цвет:</label>
            <input type="text" name="color" placeholder="Например: Белый" value = {color} onChange={colorUpdate} required=" "/>
        </li>
        <li>
        	<button className="submit" type="submit">Submit Form</button>
        </li>
    </ul>
    </form>
    )
}

export default FormAdd;