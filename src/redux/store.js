import {createStore} from 'redux';
import { incomeExpeditureReducer } from './reducers';

const store = createStore(incomeExpeditureReducer);

export default store;