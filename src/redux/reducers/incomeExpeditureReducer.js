import { INCOME, EXPEDITURE, INIT, DELETE } from "../types";
const data = JSON.parse(localStorage.getItem('lists'));
const list = data?data:[];
const initialState={
    list,
    date : new Date()
}

export const incomeExpeditureReducer = (state=initialState,action) => {
    
    switch(action.type){
        case INIT:
            return {
                list:action.list,
                date : new Date(),
                incomeId:action.incomeId,
                expeditureId:action.expeditureId
            }
        case INCOME:
            return {
                list:[
                        ...state.list,
                    {
                        type:action.type,
                        amount:Number(action.amount),
                        label:action.label,
                        year:action.year,
                        month:action.month,
                        date:action.date,
                        day:action.day,
                        id:action.id
                    }
                ]
            }

        case EXPEDITURE:
            return {
                list:[
                        ...state.list,
                        {
                            type:action.type,
                            amount:-1*Number(action.amount),
                            label:action.label,
                            year:action.year,
                            month:action.month,
                            date:action.date,
                            day:action.day,
                            id:action.id
                        }
                    ]
                }
        case DELETE:
            return {
                list:action.list,
                incomeId:action.incomeId,
                expeditureId:action.expeditureId
            }
        default:
            return state;
    }
}

