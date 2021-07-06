import React from 'react'
import styled from 'styled-components'
const Week = styled.div`
    display : flex;
`
const Day = styled.div`
    background : ${day => day.IsMonth ? 'white':'lightgray'};
    border : black 1px solid;
    width : 13.855%;
    flex-grow : 1;
    height : 50px;
    color : ${day => day.IsMonth ? 'black':'gray'}
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

function MainCalender({date}){
    const today = date
    const startDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay()
    //해당 월 시작 요일
    const beforeDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    //전달 마지막 날
    const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
    //해당 월 마지막 날
    
    let lastArray = []
    let thisArray = []
    let nextArray = []
    const weekArray = []

    lastArray = Array.from({length : startDay},(v,i) => ({
        date : beforeDay - startDay + 1 + i,
        IsMonth : false
    }))

    thisArray = Array.from({length : endDate},(v,i) => ({
        date : i + 1,
        Income : 0,
        Expediture : 0,
        IsMonth : true
    }))

    let moneyArray = JSON.parse(localStorage.getItem('lists'))
    if(moneyArray){
        moneyArray.filter(money => money.year === today.getFullYear() && money.month === today.getMonth()).forEach(money => {
            if(money.type === 'INCOME'){
                thisArray[money.date - 1].Income += money.amount
            }else if(money.type === 'EXPEDITURE'){
                thisArray[money.date - 1].Expediture += money.amount
            }
        })
    }
    console.log(thisArray)

    nextArray = Array.from({length : 42 - (lastArray.length + thisArray.length)},(v,i) => ({
        date : i + 1,
        IsMonth : false
    }))
    const totalArray = [
        ...lastArray,
        ...thisArray,
        ...nextArray
    ]

    for (let y = 0;y<=endDate + 7;y += 7){
        weekArray.push(totalArray.slice(y,y+7))
    }
    

    return (
        <div>
            {weekArray.map((week,index) =>
            <Week key={index}>
                {week.map((day,index) =>
                    <Day IsMonth = {day.IsMonth} key={index} >
                        <Dates>{day.date}</Dates>
                        <Income amount = {day.Income}>{day.Income}</Income>
                        <Expediture amount = {day.Expediture}>{day.Expediture}</Expediture>
                    </Day>)}
            </Week>)}
        </div>
    )
}

export default MainCalender