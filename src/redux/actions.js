import {INCOME, EXPEDITURE} from './types';

export const income = (amount,label,kind,year,month,date,id) => {
    return {
        type:INCOME,
        amount,
        label,
        kind,
        year,
        month,
        date,
        id
    }
}

export const expediture = (amount,label,kind,year,month,date,id) => {
    return {
        type:EXPEDITURE,
        amount,
        label,
        kind,
        year,
        month,
        date,
        id
    }
}