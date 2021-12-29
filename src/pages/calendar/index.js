import React  from 'react'
import MainCalendar from '../../components/mainCalendar'
import CalendarHeader from '../../components/calendarHeader'
import MainPage from '../mainPage';
import * as s from './styles';

function Calendar(){
    return (
        <>
            <MainPage calendar={true}/>
            <s.CalendarWrap>
                <CalendarHeader/>
                <MainCalendar/>
            </s.CalendarWrap>
        </>
    )
}


export default Calendar