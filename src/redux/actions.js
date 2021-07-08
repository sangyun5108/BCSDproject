import {INCOME, EXPEDITURE, INIT} from './types';

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
    .filter((list)=>list.type==='EXPEDITURE');
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

checkLocal();

export const income = (amount,label,year,month,date) => {
    return {
        type:INCOME,
        amount,
        label,
        year,
        month,
        date,
        id:incomeId++
    }
}

export const expediture = (amount,label,year,month,date) => {
    return {
        type:EXPEDITURE,
        amount,
        label,
        year,
        month,
        date,
        id:expeditureId++
    }
}

export const init = ()=>{
    const getlist = JSON.parse(localStorage.getItem('lists'));
    const list = getlist?getlist:[];

    return {
        type:INIT,
        list
    }
}