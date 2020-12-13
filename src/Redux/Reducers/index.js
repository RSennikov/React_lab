import {authorizationReducer} from './authReducer';
import {formReducer} from './formReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    authorizationReducer,
    formReducer
})

export default allReducers;