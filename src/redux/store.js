import { combineReducers } from 'redux';
import incomeExpeditureReducer from './reducers/incomeExpeditureReduce';
import  showListReducer  from './reducers/showListReducer';
import { configureStore } from '@reduxjs/toolkit';
const reducers = combineReducers(
    {   incomeExpeditureReducer : incomeExpeditureReducer,
        showListReducer : showListReducer,
    }
);

const store = configureStore({
    reducer : reducers
});


export default store;