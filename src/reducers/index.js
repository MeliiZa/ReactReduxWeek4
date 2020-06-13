//this is the root reducer
import{ combineReducers } from 'redux';
import userReducer from './userReducer';

export default combineReducers({
    users:userReducer,
    
})