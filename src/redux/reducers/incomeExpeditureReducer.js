import {createSlice} from '@reduxjs/toolkit';
const data = JSON.parse(localStorage.getItem('lists'));
const list = data?data:[];
const date = new Date();
const initialState={
    list,
    date
}

export const incomeExpeditureReducer = createSlice({
    name:'incomeExpediture',
    initialState,
    reducers:{
        init:(state,action)=>{
            return {
                list:action.payload.list,
                date :action.payload.date,
                incomeId:action.payload.incomeId,
                expeditureId:action.payload.expeditureId
            }
        },
        income:(state,action)=>{
            (state.list).push({
                type:income.type,
                amount:Number(action.payload.amount),
                label:action.payload.label,
                year:action.payload.year,
                month:action.payload.month,
                date:action.payload.date,
                day:action.payload.day,
                id:action.payload.id
            })
        },
        expediture:(state,action)=>{
            (state.list).push({
                type:expediture.type,
                amount:-1*Number(action.payload.amount),
                label:action.payload.label,
                year:action.payload.year,
                month:action.payload.month,
                date:action.payload.date,
                day:action.payload.day,
                id:action.payload.id
            })
        },
        deletelist:(state,action)=>{
            return {
                list:action.payload.list,
                incomeId:action.payload.incomeId,
                expeditureId:action.payload.expeditureId
            }
        }
        
    }
})

export const {init,income,expediture,deletelist} = incomeExpeditureReducer.actions;
