import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import styled from'styled-components'
import DateViewer from './DateViewer'
import CalenderHeader from './CalenderHeader'
import TotalAmounts from './TotalAmounts'
const Wrap = styled.div`
    display : flex;
    flex-direction : column;
    width : 100vw;
    height : 100vh;
    align-items : center;
`
const Header = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    font-size: 100%;
    width : 100%;
    max-width : 960px;
`
const ContentContainer = styled.div`
    width ; 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`
const CalenderWrap = styled.div`
    padding-bottom: 36px;
    margin-top : 49px;
    padding-left : 12px;
    padding-right : 12px;
    display : flex;
    flex-direction : column;
    width : 90vw;
    height : 60vw;
    max-width : 960px;
    max-height : 640px;
    border-radius: 14px;
    box-shadow : 0 5px 50px rgb(0 0 0 / 10%);
`
function Calender(){
    const {year,month} = useSelector((state => ({
        year : (state.showListReducer).year,
        month : (state.showListReducer).month
    })))
    const today = new Date(year, month)    
    const [date,setDate] = useState(today)
    return (
        <Wrap>
            <Header>
                <DateViewer date = {date} setDate = {setDate}/>
            </Header>
            <ContentContainer>
                <TotalAmounts today = {date}/>
                <CalenderWrap>
                    <CalenderHeader/>
                    {/* <MainCalender today = {date}/> */}
                </CalenderWrap>
            </ContentContainer>
        </Wrap>

    )
}


export default Calender