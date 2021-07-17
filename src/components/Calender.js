import React  from 'react'
import styled from'styled-components'
import MainCalender from './MainCalender'
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
    return (
        <Wrap>
            <Header>
                <DateViewer/>
            </Header>
            <ContentContainer>
                <TotalAmounts/>
                <CalenderWrap>
                    <CalenderHeader/>
                    <MainCalender/>
                </CalenderWrap>
            </ContentContainer>
        </Wrap>

    )
}


export default Calender