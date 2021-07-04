import {INCOME, EXPEDITURE} from './types';

let incomeId=0;
let expeditureId=100;

export const income = (amount,label,kind,year,month,date) => {
    return {
        type:INCOME,
        amount,
        label,
        kind,
        year,
        month,
        date,
        id:incomeId++
    }
}

export const expediture = (amount,label,kind,year,month,date) => {
    return {
        type:EXPEDITURE,
        amount,
        label,
        kind,
        year,
        month,
        date,
        id:expeditureId++
    }
}