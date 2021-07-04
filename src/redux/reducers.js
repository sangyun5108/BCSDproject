import { INCOME, EXPEDITURE } from "./types";

const initialState = {
    list:[
        {
            amount:0,
            label:'',
            kind:'',
            year:'',
            month:'',
            date:'',
            id:0
        }
    ]
}

export const incomeExpeditureReducer = (state=initialState,action) => {
    switch(action.type){
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
                            id:action.id
                        }
                    ]
                }
        default:
            return state;
    }
}