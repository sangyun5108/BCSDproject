import { INCOME, EXPEDITURE } from "./types";

const initialState = {
    list:[
        {
            amount:0,
            label:'',
            kind:'',
            month:''
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
                        amount:action.amount,
                        label:action.label,
                        kind:action.kind,
                        month:action.month
                    }
                ]
            }

        case EXPEDITURE:
            return {
                list:[
                        ...state.list,
                        {
                            amount:Number(action.amount),
                            label:action.label,
                            kind:action.kind,
                            month:action.month
                        }
                    ]
                }
        default:
            return state;
    }
}