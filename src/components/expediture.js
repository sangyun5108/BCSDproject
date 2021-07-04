import React from 'react';
import {useDispatch} from 'react-redux';
import { useState } from 'react';
import {expediture} from '../redux/actions';

let id = 1000;

const Expediture = () => {

    const date = new Date();
    const nowyear = date.getFullYear();
    const nowmonth = date.getMonth()<10?`0${date.getMonth()+1}`:`${date.getMonth()}`;
    const nowdate = date.getDate()<10?`0${date.getDate()}`:`${date.getDate()}`;
    const months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];

    const[amount,setAmount] = useState(0);
    const[label,setLabel] = useState('');
    const[inputYear,setInputYear] = useState(nowyear);
    const[inputMonth,setInputMonth] = useState(nowmonth);
    const[inputDate,setInputDate] = useState(nowdate);

    const expeditureDispatch = useDispatch();

    const KIND = 'expediture';

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

    const clickDone = (e) =>{
        e.preventDefault();
        const exchangeMonth = months[Number(inputMonth)-1];
        expeditureDispatch(expediture(amount,label,KIND,inputYear,exchangeMonth,inputDate,id));
        id++;
    }

    return(
        <>
            <form>
                <div>expediture</div>
                <input onChange={changeYear} value={inputYear}></input>
                <input onChange={changeMonth} value={inputMonth}></input>
                <input onChange={changeDate} value={inputDate}></input>
                <div><input placeholder="Label" onChange={changeLabel}></input></div>
                <div><input placeholder="Amount" onChange={changeAmount}></input></div>
                <button onClick={clickDone}>Done</button>
            </form>
        </>
    )
}

export default Expediture;