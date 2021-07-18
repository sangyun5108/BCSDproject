import { combineReducers } from 'redux';
import {incomeExpeditureReducer} from './reducers/incomeExpeditureReducer';
import  showListReducer  from './reducers/showListReducer';
import { configureStore } from '@reduxjs/toolkit';
const reducers = combineReducers(
    {   incomeExpeditureReducer : incomeExpeditureReducer.reducer,
        showListReducer : showListReducer,
    }
);

const store = configureStore({
    reducer : reducers
});


export default store;