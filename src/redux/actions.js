import {INCOME, EXPEDITURE, INIT, TYPE, MONTH, YEAR,SHOWIN,SHOWEX} from './types';

let incomeId=0;
let expeditureId=100;

const getIncomeId = () => {
    const income = JSON.parse(localStorage.getItem('lists'))
    .filter((list)=>list.type==='INCOME');
    
    if(income.length!==0){
        incomeId = ++income[income.length-1].id;
    }
    return;
} //localStorage income id값을 받아오는 함수

const getExpeditureId = () => {
    const expediture = JSON.parse(localStorage.getItem('lists'))
    .filter((list)=>list.type==='EXPEDITURE')
   if(expediture.length!==0) {
       expeditureId = ++expediture[expediture.length-1].id;
   }
   return;
}//localStorage expediture id값을 받아오는 함수

const checkLocal  = () => {
    if(localStorage.getItem('lists')){
        getIncomeId();
        getExpeditureId();
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
export const showIn = () => ({type : SHOWIN})
export const showEx = () => ({type : SHOWEX})
