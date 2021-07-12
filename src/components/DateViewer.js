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
    font-size : 2.5rem;
   
`
const Year = styled.div`
    font-size : 0.5rem;
    color : gray;
`
const Monthselector = styled.div`
    width : 33.33333%;
    margin : 3rem;
    color : gray;
    &:hover{
        color : black;
        cursor : pointer;
    }
`
const Now = styled.div`
    width : 33.33333%;
    margin : 3rem;
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
            <Controler>
                <Monthselector onClick={()=>onDecrease()}>
                    <Year>
                        {date.getFullYear()}
                    </Year>
                    {date.getMonth()}
                </Monthselector>
                <Now>
                    <Year>
                        {date.getFullYear()}
                    </Year>
                    {date.getMonth()+1}
                </Now>
                <Monthselector onClick={()=>onIncrease()}>
                    <Year>
                        {date.getFullYear()}
                    </Year>
                    {date.getMonth()+2}
                </Monthselector>
            </Controler> 
        </DateSetContainer>
    )
}

export default DateViewer