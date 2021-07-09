import React from 'react'
import styled from 'styled-components'
const Header = styled.div`
    display : flex;
`
const DOW = styled.div`
    background : wight;
    border-bottom : lightgray 1px solid;
    border-left : lightgray 1px solid;
    width : 13.855%;
    flex-grow : 1;
    text-align : center;
`
function CalenderHeader(){
    const dayArray = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    return (
        <Header>
            {dayArray.map((day,index) => <DOW key={index}>{day}</DOW>)}
        </Header>
    )
}
export default CalenderHeader