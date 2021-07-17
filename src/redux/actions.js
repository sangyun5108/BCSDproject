import {DATE,INCOME, EXPEDITURE, INIT, TYPE, DELETE, BTN} from './types';
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

export const DeleteList = (list) => {
    localStorage.setItem('lists',JSON.stringify(list));
    let incomeId = getId('INCOME',0);
    let expeditureId = getId('EXPEDITURE',100);
    return {
        type:DELETE,
        list,
        incomeId,
        expeditureId
    }
}

export const Date = (year,month) => {
    return {
        type:DATE,
        year,
        month,
    }
}

export const Btn = (redBtn,blueBtn) => {
    return {
        type:BTN,
        redBtn,
        blueBtn
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

