import {INCOME, EXPEDITURE, INIT, TYPE, MONTH, YEAR} from './types';
import {getId} from '../utils/getId';
let incomeId=0;
let expeditureId=100;

const checkLocal  = () => {
    if(localStorage.getItem('lists')){
        incomeId = getId('INCOME',0);
        expeditureId = getId('EXPEDITURE',100);
    }
    return;
}


export const income = (amount,label,year,month,date,day) => {
    return {
        type:INCOME,
        amount,
        label,
        year,
        month,
        date,
        day,
        id:incomeId++
    }
}

export const expediture = (amount,label,year,month,date,day) => {
    return {
        type:EXPEDITURE,
        amount,
        label,
        year,
        month,
        date,
        day,
        id:expeditureId++
    }
}

export const init = ()=>{
    checkLocal();
    const getlist = JSON.parse(localStorage.getItem('lists'));
    const list = getlist?getlist:[];

    return {
        type:INIT,
        list
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