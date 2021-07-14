import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import store from '../redux/store'
const Wrap = styled.div`
    display : grid;
    grid-template-columns: repeat(1,1fr);
    grid-row-gap: .25rem;
`
const Week = styled.div`
    display : grid;
    grid-template-columns: repeat(7,1fr);
    grid-column-gap: .25rem;
    width: 100%;
    height: 85%;
`
const Day = styled.div`
    background : ${day => day.show ? '#f5f5f7':'#FCFCFD'};
    color : ${day => day.show ? 'black': 'gray'};
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    border-radius : 0.225rem;
    width: 100%;
    height: 100%;
    font-weight: 600;
    font-size: .0875rem;
    line-height: 1rem;
    padding-left : 0.1rem;
`
const Income = styled.div`
    color : blue;
    font-size: .0575rem;
    visibility : ${day => day.day.IN_total > 0 ? 'visible' : 'collapse'};
    text-align : right;
`
const Expediture = styled.div`
    color : red;
    font-size: .0575rem;
    visibility : ${day => day.day.EX_total < 0 ? 'visible' : 'collapse'};
    text-align : right;
    `
const useWeekArray = (today, lists) => {
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
                    account.date === thisMonth.getDate())
                    .map(account => account.amount)
                    .reduce((a,b)=>a+b,0),
            EX_total : lists.filter(account => 
                account.type === 'EXPEDITURE' && 
                account.year === thisMonth.getFullYear() &&
                account.month === thisMonth.getMonth() &&
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
    }))
    return weekArray
}

function MainCalender(){
    const lists = useSelector((state)=> (state.IE).accountList)
    const {year,month} = useSelector((state => ({
        year : (state.SH).year,
        month : (state.SH).month
    })))
    console.log(year, month)
    const today = new Date(year, month)
    let weekArray = useWeekArray(today, lists)
    return (
        <Wrap>
            {weekArray.map((week,index) =>
            <Week key={index}>
                {week.map((day,index) =>
                    <Day show = {day.show} key={index} >
                        <div>{day.date}</div>
                        <div>
                            <Income day = {day}>+{day.IN_total}</Income>
                            <Expediture day = {day}>{day.EX_total}</Expediture>
                        </div>
                    </Day>)}
            </Week>)}
        </Wrap>
    )
}

export default MainCalender