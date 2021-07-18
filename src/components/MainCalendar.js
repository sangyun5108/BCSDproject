import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
const Wrap = styled.div`
    display : grid;
    grid-template-rows: repeat(6,1fr);
    grid-row-gap: 4px;
    height : 100%;
`
const Week = styled.div`
    display : grid;
    grid-template-columns: repeat(7,1fr);
    grid-column-gap: 4px;
`
const Day = styled.div`
    background : ${day => day.show ? '#f5f5f7':'#FCFCFD'};
    color : ${day => day.show ? 'black': 'gray'};
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    border-radius : 4px;
    height : 100%;
    min-width: 100%;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
`
const Income = styled.div`
    display : ${day => day.day.IN_total > 0 ? 'block' : 'None'};
    color : blue;
    text-align : right;
    min-width: 100%;
    font-size : min(1.8vw, 16px);
`
const Expediture = styled.div`
    display : ${day => day.day.EX_total < 0 ? 'block' : 'None'};
    color : red;
    font-size: 16px;
    text-align : right;
    min-width: 100%;
    font-size : min(1.8vw, 16px);
    font-weight : 600;
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
    }))
    return weekArray
}

function MainCalendar(){
    const list = useSelector((state)=> (state.incomeExpeditureReducer).list)
    const {blueBtn, redBtn} = useSelector((state) => state.showListReducer)
    const {year,month} = useSelector((state => ({
        year : (state.showListReducer).year,
        month : (state.showListReducer).month
    })))
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

    const weekArray = useWeekArray(today, accountList)
    return (
        <Wrap>
            {weekArray.map((week,index) =>
            <Week key={index}>
                {week.map((day,index) =>
                    <Day show = {day.show} key={index}>
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

export default MainCalendar