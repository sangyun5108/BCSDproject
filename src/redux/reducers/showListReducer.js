import {DATE,TYPE,BTN} from '../types';

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
        case DATE:
            return {
                ...state,
                month:action.month,
                year:action.year
            }
        case BTN :
            return {
                ...state,
                blueBtn:action.blueBtn,
                redBtn:action.redBtn
            }
        default:
            return state;
    }
}
