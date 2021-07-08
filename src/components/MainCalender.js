import React from 'react'
import styled from 'styled-components'
const Week = styled.div`
    display : flex;
`
const Day = styled.div`
    background : ${day => day.date !== -1 ? 'white':'lightgray'};
    border : black 1px solid;
    width : 13.855%;
    flex-grow : 1;
    height : 50px;
    color : ${day => day.date !== -1 ? 'black': 'gray'}
`
const Dates = styled.div`
    font-size : 10px;
`
const Income = styled.div`
    color : red;
    font-size : 5px;
    text-align : right;
    visibility : ${day => day.amount > 0 ? 'visible' : 'collapse'};
`
const Expediture = styled.div`
    color : blue;
    font-size : 5px;
    text-align : right;
    visibility : ${day => day.amount < 0 ? 'visible' : 'collapse'};
`

function MainCalender({today}){
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
            IN_id : [],
            EX_id : []
        }:
        {
            date : -1
        }
    }))

    return (
        <div>
            {weekArray.map((week,index) =>
            <Week key={index}>
                {week.map((day,index) =>
                    <Day date = {day.date} key={index} >
                        <Dates>{day.date}</Dates>
                        <Income amount = {day.Income}>{day.Income}</Income>
                        <Expediture amount = {day.Expediture}>{day.Expediture}</Expediture>
                    </Day>)}
            </Week>)}
        </div>
    )
}

export default MainCalender