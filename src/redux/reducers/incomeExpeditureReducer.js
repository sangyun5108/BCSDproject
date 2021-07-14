import { INCOME, EXPEDITURE, INIT, SHOWEX,SHOWIN } from "../types";
const data = JSON.parse(localStorage.getItem('lists'));
const list = data?data:[];
const accountList = list
const initialState={
    list,
    accountList,
    inClicked : false,
    exClicked : false,
    date : new Date()
}

export const incomeExpeditureReducer = (state=initialState,action) => {
    
    switch(action.type){
        case INIT:
            return {
                list:action.list,
                accountList,
                inClicked : false,
                exClicked : false,
                date : new Date()
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
        case SHOWIN:
            return state.inClicked?{
                ...state,
                accountList:[...state.list],
                inClicked : false,
                exClicked : false
            }
            :{
                ...state,
                accountList:[...state.list].filter(account => account.type === 'INCOME'),
                inClicked : true,
                exClicked : false
            }
            
        case SHOWEX:
            return state.exClicked?{
                ...state,
                accountList:[...state.list],
                inClicked : false,
                exClicked : false
            }
            :{
                ...state,
                accountList:[...state.list].filter(account => account.type === 'EXPEDITURE'),
                inClicked : false,
                exClicked : true
            }
        
        default:
            return state;
    }
}

