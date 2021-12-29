import React,{useEffect, useRef, useState} from 'react'
import * as s from './styles';
import {useSelector} from 'react-redux'
import transformation from '../../utils/transformation'

const useMonthArray = (today, lists) => {
    let thisMonth = new Date(today.getFullYear(), today.getMonth(),1)
    let dayOfFirstDate = thisMonth.getDay()
    let startDate = new Date(thisMonth)
    let startDateTime = startDate.getTime()
    startDate.setMonth(startDate.getMonth()+1)
    let endDateTime = startDate.getTime()
    if(dayOfFirstDate !== 0){
        thisMonth.setDate(-dayOfFirstDate)
    }else{
        thisMonth.setDate(thisMonth.getDate()-1)
    }
    const weekArray = Array.from({length : 42}, ()=> {
        thisMonth.setDate(thisMonth.getDate()+1)
        return (thisMonth.getTime() >= startDateTime && thisMonth.getTime() < endDateTime)?
        {
            date : thisMonth.getDate(),
            IN_total : lists.filter(account => 
                    account.type === 'income' && 
                    account.date === thisMonth.getDate())
                    .map(account => account.amount)
                    .reduce((a,b)=>a+b,0),
            EX_total : lists.filter(account => 
                account.type === 'expediture' &&
                account.date === thisMonth.getDate())
                .map(account => account.amount)
                .reduce((a,b)=>a+b,0),
            show : true,
        }:
        {
            date : thisMonth.getDate(),
            IN_total : 0,
            EX_total : 0,
            show : false
        }
    })
    return weekArray
}

function MainCalendar(){
    const list = useSelector((state)=> (state.incomeExpeditureReducer).list)
    const {blueBtn, redBtn, year, month} = useSelector((state) => state.showListReducer)
    const [size, setWidth] = useState(500)
    const target = useRef()
    const setWindowSize = () => {
        if(target.current){
            setWidth(target.current.offsetWidth)
        }
    }
    useEffect(() => {
        window.addEventListener('resize',setWindowSize)
    },[])
    let today = new Date(year,month)
    let accountList = []
    if(blueBtn && !redBtn){
        accountList = list.filter(account => account.type === 'income' &&
            account.year === today.getFullYear() &&
            account.month === today.getMonth())
    }else if (!blueBtn && redBtn){
        accountList = list.filter(account => account.type === 'expediture' &&
            account.year === today.getFullYear() &&
            account.month === today.getMonth())
    }else{
        accountList = list.filter(account => account.year === today.getFullYear() &&
            account.month === today.getMonth())
    }
    const weekArray = useMonthArray(today, accountList)
    return (
        <s.Wrap>
            {weekArray.map((day,index) =>
                <s.Day show = {day.show} key={index} ref={target}>
                    <s.Dates>
                        {day.date}
                    </s.Dates>
                    <s.Money>
                        <s.Income day = {day}>{ String(day.IN_total).length*10 <= size? '+' + transformation(day.IN_total):'$'}</s.Income>
                        <s.Expediture day = {day}>{String(day.EX_total).length*10 <= size? transformation(day.EX_total) : '$'}</s.Expediture>
                    </s.Money>
                </s.Day>)}
        </s.Wrap>
    )
}

export default MainCalendar