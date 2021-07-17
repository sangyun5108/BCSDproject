import {TYPE,MONTH,YEAR,BLUEBTN,REDBTN} from '../types';
const initialStateShowList = {
    type:'incomeExpediture',
    month:new Date().getMonth(),
    year:new Date().getFullYear(),
    blueBtn:false,
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
        case BLUEBTN:
            return {
                ...state,
                blueBtn:action.btn
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