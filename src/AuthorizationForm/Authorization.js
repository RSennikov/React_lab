import React, {useState} from 'react';
import './Authorization.css';
import {useHistory} from 'react-router-dom';
import { logIn, logOut } from '../../Redux/Actions';
import { useSelector, useDispatch } from 'react-redux';

const Authorization = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const authorizationReducer = useSelector(state => state.authorizationReducer)
    const [base, setBase] = useState([{
        email: '',
        password: '',
    }])

    const redirect = () =>{
        history.push("/Assembler")
    }

    const onChange = (event) =>{
        event.preventDefault();
        const newBase = Object.assign({}, base)
        newBase[event.target.name] = event.target.value
        setBase(newBase);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(base.email === 'admin' && base.password === 'admin'){
            dispatch(logOut())
            redirect();
        } else {
            dispatch(logIn())
            alert('Введите корректные данные');
        }
    }


    return(
    <div >
        <div className="container">
        <section id="content">
            <form onSubmit = {onSubmit} >
                <h1>Login Form</h1>
                <div>
                    <input type="text" name = 'email' autoComplete = "off" placeholder="Email" required="" id="username" onChange ={onChange}/>
                </div>
                <div>
                    <input type="password" name = 'password' autoComplete = "off" placeholder="Password" required="" id="password"  onChange ={onChange}/>
                </div>
                <div>
                    <input type="submit" value="Log in"/>
                    <a>Lost your password?</a>
                </div>
            </form>
            
        </section>
        </div>
    </div>
    )
}

export default Authorization