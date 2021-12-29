import React from 'react'
import * as s from './styles';

function CalendarHeader(){
    const dayArray = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    return (
        <s.Header>
            {dayArray.map((day,index) => <s.DayOfWeek key={index}>{day}</s.DayOfWeek>)}
        </s.Header>
    )
}
export default CalendarHeader