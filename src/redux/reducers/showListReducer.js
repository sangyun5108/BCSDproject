import {TYPE,MONTH,YEAR} from '../types';

const initialStateShowList = {
    type:'incomeExpediture',
    month:new Date().getMonth(),
    year:new Date().getFullYear()
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