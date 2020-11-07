// base reducer represent all of the states of the application

import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';


export default combineReducers({
    user: userReducer
})