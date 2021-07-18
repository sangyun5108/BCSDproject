import { income,expediture,init,deleteLists } from '../actions';
const data = JSON.parse(localStorage.getItem('lists'));
const list = data?data:[];
const initialState={
    list,
    date : new Date()
}

export const incomeExpeditureReducer = (state=initialState,action) => {
    
    switch(action.type){
        case init.type:
            return {
                list:action.payload.list,
                date :action.payload.date,
                incomeId:action.payload.incomeId,
                expeditureId:action.payload.expeditureId
            }
        case income.type:
            return {
                list:[
                        ...state.list,
                    {
                        type:income.type,
                        amount:Number(action.payload.amount),
                        label:action.payload.label,
                        year:action.payload.year,
                        month:action.payload.month,
                        date:action.payload.date,
                        day:action.payload.day,
                        id:action.payload.id
                    }
                ]
            }

        case expediture.type:
            return {
                list:[
                        ...state.list,
                        {
                            type:expediture.type,
                            amount:-1*Number(action.payload.amount),
                            label:action.payload.label,
                            year:action.payload.year,
                            month:action.payload.month,
                            date:action.payload.date,
                            day:action.payload.day,
                            id:action.payload.id
                        }
                    ]
                }
        case deleteLists.type:
            return {
                list:action.payload.list,
                incomeId:action.payload.incomeId,
                expeditureId:action.payload.expeditureId
            }
        default:
            return state;
    }
}

