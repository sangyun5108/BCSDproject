import { INCOME, EXPEDITURE, INIT} from "./types";

const initialState = {
    list:[]
};

export const incomeExpeditureReducer = (state=initialState,action) => {
    
    switch(action.type){
        case INIT:
            return {
                list:action.list
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
        default:
            return state;
    }
}