import { INCOME, EXPEDITURE} from "./types";

const data = JSON.parse(localStorage.getItem('lists'));
const list = data?data:[];

const initialState={
    list
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