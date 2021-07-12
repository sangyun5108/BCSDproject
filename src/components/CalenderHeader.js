import React from 'react'
import styled from 'styled-components'
const Header = styled.div`
    display : grid;
    grid-template-columns: repeat(7,1fr);
    grid-row-gap: .4375rem;
    width: 100%;
    height: 3.4375rem;
`
const DOW = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    font-weight : 600;
    font-size : 0.0625rem;
    line-height : 1.3125rem;
    text-align : center;
    
`
function CalenderHeader(){
    const dayArray = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    return (
        <Header>
            {dayArray.map((day,index) => <DOW key={index}>{day}</DOW>)}
        </Header>
    )
}
export default CalenderHeader