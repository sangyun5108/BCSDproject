import { income,expediture } from '../actions';
import { createReducer } from '@reduxjs/toolkit';
import {INIT,INCOME,EXPEDITURE,DELETE} from '../types';
const data = JSON.parse(localStorage.getItem('lists'));
const list = data?data:[];
const initialState={
    list,
    date:new Date(),
}

export const incomeExpeditureReducer = createReducer(initialState,(builder)=>{
    builder
        .addCase(INIT,(state,action)=>{
            return {
                list:action.payload.list,
                date :action.payload.date,
                incomeId:action.payload.incomeId,
                expeditureId:action.payload.expeditureId
            }
        })
        .addCase(INCOME,(state,action)=>{
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
        })
        .addCase(EXPEDITURE,(state,action)=>{
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
        })
        .addCase(DELETE,(state,action)=>{
            return {
                list:action.payload.list,
                incomeId:action.payload.incomeId,
                expeditureId:action.payload.expeditureId
            }
        })
})