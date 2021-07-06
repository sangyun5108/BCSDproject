import React from 'react';
import {useDispatch} from 'react-redux';
import { useState } from 'react';
import {expediture} from '../redux/actions';
import store from '../redux/store';


const Expediture = () => {

    const date = new Date();
    const nowyear = date.getFullYear();
    const nowmonth = date.getMonth()<10?`0${date.getMonth()+1}`:`${date.getMonth()}`;
    const nowdate = date.getDate()<10?`0${date.getDate()}`:`${date.getDate()}`;

    const[amount,setAmount] = useState(0);
    const[label,setLabel] = useState('');
    const[inputYear,setInputYear] = useState(nowyear);
    const[inputMonth,setInputMonth] = useState(nowmonth);
    const[inputDate,setInputDate] = useState(nowdate);

    const expeditureDispatch = useDispatch();

    const changeYear = (e) => {
        setInputYear(e.target.value);
    }//연도 입력시 inputyear state 변경시켜주는 함수

    const changeMonth = (e) => {
        setInputMonth(e.target.value);
    }//월 입력시 inputmonth state 변경시켜주는 함수

    const changeDate = (e) => {
        setInputDate(e.target.value);
    }//날짜 입력시 inputDate state 변경시켜주는 함수

    const changeAmount = (e) => {
        setAmount(e.target.value);
    }

    const changeLabel = (e) => {
        setLabel(e.target.value);
    }

    const checkYearType = (e) => {
        const value = Number(e.target.value);
        if(isNaN(value)){
            setInputYear(nowyear);
        }
    }//연도가 올바르게 입력되었는지 체크해주는 함수

    const checkMonthType = (e) => {
        let value = Number(e.target.value);
        if(isNaN(value)){
            setInputMonth(nowmonth);
        }else{
            value = value<10?`0${value}`:value;
            setInputMonth(value);
        }
    }//month가 올바르게 입력되었는지 체크해주는 함수

    const checkDateType = (e) => {
        let value = Number(e.target.value);
        if(isNaN(value)){
            setInputDate(nowdate);
        }else{
            value = value<10?`0${value}`:value;
            setInputDate(value);
        }
    }//date가 올바르게 입력되었는지 체크하는 함수

    const clickDone = (e) =>{
        e.preventDefault();
        const monthIndex = Number(inputMonth)-1;
        expeditureDispatch(expediture(amount,label,inputYear,monthIndex,inputDate));
        localStorage.setItem('lists',JSON.stringify(store.getState().list));
    }

    return(
        <>  
            <form>
                <div>expediture</div>
                <input onChange={changeYear} onBlur={checkYearType} value={inputYear}></input>
                <input onChange={changeMonth} onBlur={checkMonthType} value={inputMonth}></input>
                <input onChange={changeDate} onBlur={checkDateType} value={inputDate}></input>
                <div><input placeholder="Label" onChange={changeLabel}></input></div>
                <div><input placeholder="Amount" onChange={changeAmount}></input></div>
                <button onClick={clickDone}>Done</button>
            </form>
        </>
    )
}

export default Expediture;