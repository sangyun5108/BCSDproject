import {INCOME, EXPEDITURE, INIT} from './types';

let incomeId=0;
let expeditureId=100;

export const income = (amount,label,year,month,date) => {
    return {
        type:INCOME,
        amount,
        label,
        year,
        month,
        date,
        id:incomeId++
    }
}

export const expediture = (amount,label,year,month,date) => {
    return {
        type:EXPEDITURE,
        amount,
        label,
        year,
        month,
        date,
        id:expeditureId++
    }
}

export const init = ()=>{
    return {
        type:INIT
    }
}