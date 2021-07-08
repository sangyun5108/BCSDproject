import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import MakeList from './makeList';

const sumIncome = (lists,month,year) => {

    const income = lists
    .filter((list)=>list.month===month&&list.type==='INCOME'&&list.year===year)
    .map((list)=>{
        return Number(list.amount);
    })
    .reduce((acc,cur)=>{
        return acc+cur;
    },0);

    return income;

}//월별 수입 합계를 구해주는 함수

const sumExpediture = (lists,month,year) => {

    const expediture = lists
    .filter((list)=>list.month===month&&list.type==='EXPEDITURE'&&list.year===year)
    .map((list)=>{
        return Number(list.amount);
    })
    .reduce((acc,cur)=>{
        return acc+cur;
    },0);

    return expediture;

}//월별 지출 합계를 구해주는 함수

const ShowList = ({month,year}) => {

    const [type,setType] = useState('incomeExpediture');

    const lists = useSelector((state)=>state.list);

    const clickPlusBtn = () => {

        if(type ==='INCOME'){
            setType('incomeExpediture');
            return;
        }
        setType('INCOME');
    }

    const clickMinusBtn = () => {
        
        if(type==='EXPEDITURE'){
            setType('incomeExpediture');
            return;
        }
        setType('EXPEDITURE');
    }
    
    return(
        <> 
            <div>
                <button onClick={clickPlusBtn}>+{sumIncome(lists,month,year)}</button>
                <button onClick={clickMinusBtn}>{sumExpediture(lists,month,year)===0?`-${sumExpediture(lists,month)}`:sumExpediture(lists,month)}</button>
            </div>
            <div><MakeList type={type} lists={lists} month={month} year={year}/></div>
        </>
    )
}

export default ShowList;