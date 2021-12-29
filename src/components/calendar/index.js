import React  from 'react'
import MainCalendar from '../MainCalendar'
import CalendarHeader from '../calendarHeader'
import * as s from './styles';


function Calendar(){
    return (
        <s.CalendarWrap>
            <CalendarHeader/>
            <MainCalendar/>
        </s.CalendarWrap>
    )
}


export default Calendar