import React from 'react';
import {useDispatch} from 'react-redux';
import {useRef, useEffect} from 'react';
import {income} from '../redux/actions';
import store from '../redux/store';

const date = new Date();
const nowyear = date.getFullYear();
const nowmonth = date.getMonth()<10?`0${date.getMonth()+1}`:`${date.getMonth()}`;
const nowdate = date.getDate()<10?`0${date.getDate()}`:`${date.getDate()}`;

const Income = () => {

    const yearRef = useRef(null);
    const monthRef = useRef(null);
    const dateRef = useRef(null);
    const amountRef = useRef(null);
    const labelRef = useRef(null);

    const incomeDispatch = useDispatch();

    const checkYearType = () => {
        const value = Number(yearRef.current.value);
        if(isNaN(value)){
            yearRef.current.value = nowyear;
        }else{
            yearRef.current.value = value;
        }
    }//연도가 올바르게 입력되었는지 체크해주는 함수

    const checkMonthType = () => {
        let value = Number(monthRef.current.value);
        if(isNaN(value)){
            monthRef.current.value = nowmonth;
        }else{
            value = value<10?`0${value}`:value;
            monthRef.current.value = value;
        }
    }//month가 올바르게 입력되었는지 체크해주는 함수

    const checkDateType = () => {
        let value = Number(dateRef.current.value);
        if(isNaN(value)){
            dateRef.current.value = nowdate;
        }else{
            value = value<10?`0${value}`:value;
            dateRef.current.value = value;
        }
    }//date가 올바르게 입력되었는지 체크하는 함수

    const checkAmountType = () => {
        const value = amountRef.current.value;
        if(isNaN(Number(value))){
            amountRef.current.value = '';
            amountRef.current.focus();
        }else{
            amountRef.current.value = value;
        }
    }

    const getLabel = () => {
        const value = labelRef.current.value;
        labelRef.current.value = value;
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        const monthIndex = Number(monthRef.current.value)-1;
        incomeDispatch(income(amountRef.current.value,labelRef.current.value,yearRef.current.value,monthIndex,Number(dateRef.current.value)));
        localStorage.setItem('lists',JSON.stringify(store.getState().list));
    }
    
    useEffect(()=>{
        yearRef.current.value = nowyear;
        monthRef.current.value = nowmonth;
        dateRef.current.value = nowdate;
    },[]) //input태그 안에 기본값

    return(
        <>
            <form onSubmit={onSubmit}>
                <div>income</div>
                <input ref={yearRef} onBlur={checkYearType}></input>
                <input ref={monthRef} onBlur={checkMonthType}></input>
                <input ref={dateRef} onBlur={checkDateType}></input>
                <div><input ref={labelRef} onBlur={getLabel} placeholder="Label"></input></div>
                <div><input ref={amountRef} onBlur={checkAmountType} placeholder="Amount"></input></div>
                <button type="submit">Done</button>
            </form>
        </>
    )
}

export default Income;