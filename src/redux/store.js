import {createStore,combineReducers} from 'redux';
import { incomeExpeditureReducer} from './reducers/incomeExpeditureReducer';
import { showListReducer } from './reducers/showListReducer';

const reducers = combineReducers(
    {   incomeExpeditureReducer,
        showListReducer,
    }
);

const store = createStore(reducers);

export default store;