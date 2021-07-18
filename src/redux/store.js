import { combineReducers } from 'redux';
import incomeExpeditureReducer from './reducers/incomeExpeditureReducer_toolkit';
import  showListReducer  from './reducers/showListReducer_toolkit';
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