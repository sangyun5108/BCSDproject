import { INCOME, EXPEDITURE } from "./types";

const initialState = {
    sumIncome:0,
    sumExpediture:0,
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
                sumIncome:state.sumIncome+Number(action.amount),
                sumExpediture:state.sumExpediture,
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
                sumIncome:state.sumIncome,
                sumExpediture:state.sumExpediture-Number(action.amount),
                list:[
                        ...state.list,
                        {
                            amount:-1*Number(action.amount),
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