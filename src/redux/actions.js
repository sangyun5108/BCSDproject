import {INCOME, EXPEDITURE, INIT, TYPE, MONTH, YEAR, GREENBTN, REDBTN} from './types';
import {getId} from '../utils/getId';
import {checkLocal} from '../utils/checkLocal';

export const income = (amount,label,year,month,date,day,id) => {
    return {
        type:INCOME,
        amount,
        label,
        year,
        month,
        date,
        day,
        id
    }
}

export const expediture = (amount,label,year,month,date,day,id) => {
    return {
        type:EXPEDITURE,
        amount,
        label,
        year,
        month,
        date,
        day,
        id
    }
}

export const init = ()=>{
    const getlist = JSON.parse(localStorage.getItem('lists'));
    const list = getlist?getlist:[];
    let incomeId = 0;
    let expeditureId = 0;

    if(checkLocal()){
        incomeId = getId('INCOME',0);
        expeditureId = getId('EXPEDITURE',100);
    }
    

    return {
        type:INIT,
        list,
        incomeId,
        expeditureId
    }
}

export const Type = (kind) => {
    return {
        type:TYPE,
        kind
    }
}

export const Month = (month) => {
    return {
        type:MONTH,
        month
    }
}

export const Year = (year) => {
    return {
        type:YEAR,
        year
    }
}

export const GreenBtn = (btn) => {
    return {
        type:GREENBTN,
        btn
    }
}

export const RedBtn = (btn) => {
    return {
        type:REDBTN,
        btn
    }
}