import React from 'react'
import styled from 'styled-components'
const Controler = styled.div`
    display : flex;
    justify-content : center;
`
const DateSetContainer = styled.div`
    width : 100%;
    background : white;
    text-align : center;
    font-weight : 600;
    font-size : 60px;
`
const Year = styled.div`
    font-size : 12px;
    color : gray;
`
const Monthselector = styled.div`
    width : 33.33333%;
    margin : 72px 0;
    color : gray;
    &:hover{
        color : black;
        cursor : pointer;
    }
`
const Now = styled.div`
    width : 33.33333%;
    margin: 72px 0;
`
const monthList = [
    'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan'
]

function DateViewer({date, setDate}){//날짜 출력
    const month = date.getMonth()
    const onIncrease = () =>{
        setDate(new Date(date.getFullYear(),month + 1,date.getDate()))
    }
    const onDecrease = () =>{
        setDate(new Date(date.getFullYear(),month - 1,date.getDate()))
    }
    return(
        <DateSetContainer>
            <Controler>
                <Monthselector onClick={()=>onDecrease()}>
                    <Year>
                        {new Date(date.getFullYear(),month-1).getFullYear()}
                    </Year>
                    {monthList[new Date(date.getFullYear(),month-1).getMonth()]}
                </Monthselector>
                <Now>
                    <Year>
                        {date.getFullYear()}
                    </Year>
                    {monthList[month]}
                </Now>
                <Monthselector onClick={()=>onIncrease()}>
                    <Year>
                        {new Date(date.getFullYear(),month+1).getFullYear()}
                    </Year>
                    {monthList[month+1]}
                </Monthselector>
            </Controler> 
        </DateSetContainer>
    )
}

export default DateViewer