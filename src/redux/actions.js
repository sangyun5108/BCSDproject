import {INCOME, EXPEDITURE, INIT, TYPE, MONTH, YEAR, BLUEBTN, REDBTN, INLIST, EXLIST, ALLLIST,DELETE} from './types';
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
export const BlueBtn = (btn) => {
    return {
        type:BLUEBTN,
        btn : btn
    }
}

export const RedBtn = (btn) => {
    return {
        type:REDBTN,
        btn : btn
    }
}

export const InList = () => {
    const incomeList = JSON.parse(localStorage.getItem('lists')).filter(account => account.type === 'INCOME')
    return {
        type : INLIST,
        list : incomeList
    }
}

export const ExList = () => {
    const expeditureList = JSON.parse(localStorage.getItem('lists')).filter(account => account.type === 'EXPEDITURE')
    return {
        type : EXLIST,
        list : expeditureList
    }
}

export const AllLiST = () => {
    const allists = JSON.parse(localStorage.getItem('lists'))
    return {
        type : ALLLIST,
        list : allists
    }
}