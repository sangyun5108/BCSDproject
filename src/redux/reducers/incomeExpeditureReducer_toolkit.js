import { createSlice } from "@reduxjs/toolkit";
import {checkLocal} from '../../utils/checkLocal'
import { getId } from "../../utils/getId";

const data = JSON.parse(localStorage.getItem('lists'));
const list = data?data:[];

const incomeExpeditureReducer = createSlice({
    name : 'incomeExpeditureReducer',
    initialState : {
        list,
        date : new Date()
    },
    reducers:{
        init(state, action){
            const {list} = action.payload
            let incomeId = 0;
            let expeditureId = 0;
        
            if(checkLocal()){
                incomeId = getId('INCOME',0);
                expeditureId = getId('EXPEDITURE',100);
            }
            return {
                list : list,
                date : new Date(),
                incomeId : incomeId,
                expeditureId : expeditureId
            }
        },

        Income(state,action){
            const {type,amount,label,year,month,date,day,id} = action.payload
            return {
                list : [
                    ...state.list,
                    {
                        type : type,
                        amount : Number(amount),
                        label : label,
                        year : year,
                        month : month,
                        date : date,
                        day, day,
                        id : id
                    }
                ]
            }
        },

        Expediture(state,action){
            const {type,amount,label,year,month,date,day,id} = action.payload
            return {
                list:[
                    ...state.list,
                    {
                        type : type,
                        amount : -1*Number(amount),
                        label : label,
                        year : year,
                        month : month,
                        date : date,
                        day, day,
                        id : id
                    }
                ]
            }
        },

        Delete(state,action){
            const{list,incomeId,expeditureId} = action.payload
            return{
                list : list,
                incomeId : incomeId,
                expeditureId : expeditureId
            }
        }
    }
})

export const {init,Income,Expediture,Delete} = incomeExpeditureReducer.actions
export default incomeExpeditureReducer.reducer