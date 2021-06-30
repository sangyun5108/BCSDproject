import {INCOME, EXPEDITURE} from './types';

export const income = (amount,label,kind) => {
    return {
        type:INCOME,
        amount,
        label,
        kind
    }
}

export const expediture = (amount,label,kind) => {
    return {
        type:EXPEDITURE,
        amount,
        label,
        kind
    }
}