// this is where our state will live

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware =[thunk];


//rootReducer, initialState, middleware
const store = createStore(
    rootReducer,initialState,compose(
        applyMiddleware(...middleware)));


export default store;






























// actions - payload of data used by the reducer (looks like a javascript object)- the data thata redux function needs
// reducer - where the logics happens in the action- the redux function that changes state
//dispatch - the event that triggers a redux function to run
//action types - string values for the actions
//action creator - function that creates the action {action.type = "delete user" payload:id}
//redux thunks - function that is returned by another function
//mapStateToProps - get state from redux in our component
//mapDispatchToProps - give react component access to redux functions

