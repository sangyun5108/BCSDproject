import {createSlice} from '@reduxjs/toolkit';
const data = JSON.parse(localStorage.getItem('lists'));
const list = data?data:[];
const initialState={
    list,
}

export const incomeExpeditureReducer = createSlice({
    name:'incomeExpediture',
    initialState,
    reducers:{
        init:(action)=>{
            const {list,date,incomeId,expeditureId} = action.payload;
            return {
                list,
                date,
                incomeId,
                expeditureId
            }
        },
        income:(state,action)=>{
            const {amount,label,year,month,date,day,moneyType} = action.payload;
            (state.list).push({
                type:'income',
                amount:Number(amount),
                label,
                year,
                month,
                date,
                day,
                moneyType
            })
        },
        expediture:(state,action)=>{
            const {amount,label,year,month,date,day,moneyType} = action.payload;
            (state.list).push({
                type:'expediture',
                amount:-1*Number(amount),
                label,
                year,
                month,
                date,
                day,
                moneyType
            })
        },
        deletelist:(action)=>{
            const {list, incomeId, expeditureId} = action.payload;
            return {
                list,
                incomeId,
                expeditureId
            }
        },
        editlist:(action)=>{
            const {list} = action.payload;
            return {
                list
            }
        }
    }
})

export const {init,income,expediture,deletelist,editlist} = incomeExpeditureReducer.actions;