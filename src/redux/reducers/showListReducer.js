import {DateSet,Btn,Type} from '../actions';

const initialStateShowList = {
    type:'incomeExpediture',
    month:new Date().getMonth(),
    year:new Date().getFullYear(),
    blueBtn:false,
    redBtn:false
};


export const showListReducer = (state=initialStateShowList,action) => {
    switch(action.type){
        case Type.type:
            return {
                ...state,
                type:action.payload.kind
            }
        case DateSet.type:
            return {
                ...state,
                month:action.payload.month,
                year:action.payload.year
            }
        case Btn.type:
            return {
                ...state,
                blueBtn:action.payload.blueBtn,
                redBtn:action.payload.redBtn
            }
        default:
            return state;
    }
}

