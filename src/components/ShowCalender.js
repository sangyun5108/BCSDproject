import React from 'react'
import styled from 'styled-components'
function BuildCalender({date}){
    const Dates = styled.div`
        display : inline-block;
        background : ${day => day.IsMonth ? 'white':'lightgray'};
        border : black 1px solid;
        width : 13.855%;
        height : 50px;
        color : ${day => day.IsMonth ? 'black':'gray'}
    `
    const today = date
    const startDate = new Date(today.getFullYear(), today.getMonth(), 1).getDate()
    //해당 월 시작일
    const startDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay()
    //해당 월 시작 요일
    const beforeDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    //전달 마지막 날
    const afterDay = new Date(today.getFullYear(), today.getMonth() + 1, 1).getDate()
    //다음달 시작 날
    const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
    //해당 월 마지막 날
    
    let dateArray = []
    let weekArray = []

    for (let x = startDay-1 ;x >= 0; x--){
        dateArray.push({
            date : beforeDay - x,
            IsMonth : false
        })
    }//해달 월 시작날까지 전달 날 채우기
    for (let day = startDate;day <= endDate; day++){
        dateArray.push({
            date : day,
            Income : 0,
            OutCome : 0,
            IsMonth : true
        })
    }//해당 월 날짜 채우기
    for (let y = 0;y<=endDate + 7;y += 7){
        weekArray.push(dateArray.slice(y,y+7))
    }//일주일로 나누기
    let nextMonthday = afterDay
    while(weekArray[weekArray.length - 2].length !== 7){
        weekArray[weekArray.length - 2].push({
            date : nextMonthday,
            IsMonth : false
        })
        nextMonthday++
    }//5째주 마저 채우기
    while(weekArray[weekArray.length - 1].length !== 7){
        weekArray[weekArray.length - 1].push({
            date : nextMonthday,
            IsMonth : false
        })
        nextMonthday++
    }//6째주 마저 채우기

    return (
        <div>
            {weekArray.map((week,index) =>
            <div>
                {week.map((day,index) =>
                    <Dates IsMonth = {day.IsMonth}>{day.date}</Dates>)}
            </div>)}
        </div>
    )   
}
function ShowCalender({date}){
    const Container = styled.div`
        background : lightgray;
        border : black 1px solid;
    `
    const DOW = styled.div`
        background : lightgray;
        display : inline-block;
        border : red 1px solid;
        width : 13.855%;
        text-align : center;
        
    `
    const dayArray = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    return (
        <Container>
            {dayArray.map((day,index) => <DOW>{day}</DOW>)}
            <BuildCalender date = {date}/>
        </Container>
    )
}

export default ShowCalender