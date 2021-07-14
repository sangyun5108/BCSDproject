import React,{useState} from 'react'
import styled from'styled-components'
import MainCalender from './MainCalender'
import DateViewer from './DateViewer'
import CalenderHeader from './CalenderHeader'
import TotalAmounts from './TotalAmounts'
const Wrap = styled.div`
    display : flex;
    flex-direction : column;
    width : 100%
    align-items : center;
    overflow-x : hidden;
    min-height : 100vh;
`
const Header = styled.div`
    display : flex;
    width : 100%
    overflow-x : hidden;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    font-size: 100%;
    font: inherit;
`
const ContentContainer = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    width : 100%;
`
const CalenderWrap = styled.div`
    padding-bottom: 1.5rem;
    margin-top : 2.0625rem;
    padding-left : 0.5rem;
    padding-right : 0.5rem;
    display : flex;
    flex-direction : column;
    border-radius: 0.875rem;
    box-shadow : 0 0.3125rem 3.125rem rgb(0 0 0 / 10%);
    max-width : 500px;
    width : 100%;
`
function Calender(){
    const today = new Date()
    const [date,setDate] = useState(today)
    return (
        <Wrap>
            <Header>
                <DateViewer date = {date} setDate = {setDate}/>
                <TotalAmounts today = {date}/>
            </Header>
            <ContentContainer>
                <CalenderWrap>
                    <CalenderHeader/>
                    <MainCalender today = {date}/>
                </CalenderWrap>
            </ContentContainer>
        </Wrap>

    )
}


export default Calender