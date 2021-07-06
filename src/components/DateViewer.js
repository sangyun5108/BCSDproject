import React from 'react'
import styled from 'styled-components'
const Controler = styled.div`
    display : flex;
    justify-content : center;
`
const DateSetContainer = styled.div`
    background : red;
    text-align:center;
`
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
            <div>
                {date.getFullYear()}/{date.getMonth()+1}
            </div>
            <Controler>
                <button onClick={()=>onDecrease()}>&lt;</button>{date.getMonth()+1}<button onClick={()=>onIncrease()}>&gt;</button>
            </Controler> 
        </DateSetContainer>
    )
}

export default DateViewer