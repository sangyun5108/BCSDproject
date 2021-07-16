import {TYPE,MONTH,YEAR,BLUEBTN,REDBTN,INLIST,EXLIST} from '../types';
const data = JSON.parse(localStorage.getItem('lists'));
const list = data?data:[];
const initialStateShowList = {
    type:'incomeExpediture',
    month:new Date().getMonth(),
    year:new Date().getFullYear(),
    list : list,
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
        case INLIST:
            return{
                ...state,
                list : action.list
            }
        case EXLIST:
            return{
                ...state,
                list : action.list
            }
        default:
            return state;
    }
}