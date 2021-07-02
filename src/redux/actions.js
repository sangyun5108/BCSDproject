import {INCOME, EXPEDITURE} from './types';

export const income = (amount,label,kind,month) => {
    return {
        type:INCOME,
        amount,
        label,
        kind,
        month
    }
}

export const expediture = (amount,label,kind,month) => {
    return {
        type:EXPEDITURE,
        amount,
        label,
        kind,
        month
    }
}