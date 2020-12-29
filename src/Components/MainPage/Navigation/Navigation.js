import React from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from '../../../Redux/Actions';
import './Navigation.css';

const Navigation = () => {

  const authorizationReducer = useSelector(state => state.authorizationReducer)
    const history = useHistory();
    const dispatch = useDispatch();
    const handleClick = () => {
        history.push("/");
        dispatch(logIn())
      }
    const SearchVideoClick = () =>{
      history.push("/SearchVideo");
    }  

    return(
    <div className = 'Nav'>
    <p>Оформление дверей</p>
    <button className = 'exitBtn' onClick = {SearchVideoClick}>SearchVideo</button>
    <button className = 'exitBtn' onClick = {handleClick}>Выход</button>
    </div>
    )
}
export default Navigation;