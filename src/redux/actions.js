import {INCOME, EXPEDITURE} from './types';

export const income = (amount,label,kind,year,month,date) => {
    return {
        type:INCOME,
        amount,
        label,
        kind,
        year,
        month,
        date
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
        date
    }
}