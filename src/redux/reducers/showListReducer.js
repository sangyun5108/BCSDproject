import {TYPE,MONTH,YEAR,GREENBTN,REDBTN} from '../types';

const initialStateShowList = {
    type:'incomeExpediture',
    month:new Date().getMonth(),
    year:new Date().getFullYear(),
    month:0,
    year:2021,
    greenBtn:false,
    redBtn:false
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
        case GREENBTN:
            return {
                ...state,
                greenBtn:action.btn
            }
        case REDBTN:
            return{
                ...state,
                redBtn:action.btn
            }
        default:
            return state;
    }
}