import {TYPE,MONTH,YEAR} from '../types';

const initialStateShowList = {
    type:'incomeExpediture',
    month:0,
    year:2021
};


export const showListReducer = (state=initialStateShowList,action) => {
    switch(action.type){
        case TYPE:
            return {
                ...state,
                type:action.kind
            }
        case MONTH:
            return {
                ...state,
                month:action.month
            }
        case YEAR:
            return {
                ...state,
                year:action.year
            }
        default:
            return state;
    }
}