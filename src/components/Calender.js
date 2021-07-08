import React,{useState} from 'react'
import styled from'styled-components'
import MainCalender from './MainCalender'
import DateViewer from './DateViewer'
import CalenderHeader from './CalenderHeader'
const TotalContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    background : green;
`
const CalenderContainer = styled.div`
    background : blue;
`
function Calender(){
    const today = new Date()
    const [date,setDate] = useState(today)
    return (
        <TotalContainer>
            <DateViewer
                date = {date}
                setDate = {setDate}
            />
            <CalenderContainer>
                <CalenderHeader/>
                <MainCalender today = {date}/>
            </CalenderContainer>   
        </TotalContainer>
    )
}


export default Calender