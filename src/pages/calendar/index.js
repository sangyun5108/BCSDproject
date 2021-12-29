import React  from 'react'
import MainCalendar from '../../components/mainCalendar'
import CalendarHeader from '../../components/calendarHeader'
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