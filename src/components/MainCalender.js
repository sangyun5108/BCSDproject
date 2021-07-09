import React from 'react'
import styled from 'styled-components'
import {useSelector } from 'react-redux'

const Week = styled.div`
    display : flex;
`
const Day = styled.div`
    background : ${day => day.show ? 'white':'lightgray'};
    border-left : lightgray 1px solid;
    border-bottom : lightgray 1px solid;
    text-align :right;
    width : 13.855%;
    flex-grow : 1;
    height : 50px;
    color : ${day => day.show ? 'black': 'gray'};
    
    
`
const Dates = styled.div`
    font-size : 10px;
`
const Income = styled.div`
    color : red;
    font-size : 5px;
    visibility : ${day => day.amount > 0 ? 'visible' : 'collapse'};
`
const Expediture = styled.div`
    color : blue;
    font-size : 5px;
    visibility : ${day => day.amount < 0 ? 'visible' : 'collapse'};
`


function MainCalender({today}){
    const lists = useSelector((state)=>state.list);
    console.log(lists)
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
    const weekArray = Array.from({length : 6}, () => Array.from({length : 7},() => {
        thisMonth.setDate(thisMonth.getDate()+1)
        return (thisMonth.getTime() >= startDateTime && thisMonth.getTime() < endDateTime)?
        {
            date : thisMonth.getDate(),
            IN_total : lists.filter(account => 
                    account.type === 'INCOME' && 
                    account.year === thisMonth.getFullYear() &&
                    account.month === thisMonth.getMonth() &&
                    account.date === thisMonth.getDate()
                    ).map(account => account.amount).reduce((a,b)=>a+b,0),
            EX_total : lists.filter(account => 
                account.type === 'EXPEDITURE' && 
                account.year === thisMonth.getFullYear() &&
                account.month === thisMonth.getMonth() &&
                account.date === thisMonth.getDate()
            ).map(account => account.amount).reduce((a,b)=>a+b,0),
            show : true
        }:
        {
            date : thisMonth.getDate(),
            show : false

        }
    }))
    console.log(weekArray)
    return (
        <div>
            {weekArray.map((week,index) =>
            <Week key={index}>
                {week.map((day,index) =>
                    <Day show = {day.show} key={index} >
                        <Dates>{day.date}</Dates>
                        <Income amount = {day.IN_total}>{day.IN_total}</Income>
                        <Expediture amount = {day.EX_total}>{day.EX_total}</Expediture>
                    </Day>)}
            </Week>)}
        </div>
    )
}

export default MainCalender