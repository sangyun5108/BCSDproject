import React,{useState} from 'react'
import styled from'styled-components'
import MainCalender from './MainCalender'
import DateViewer from './DateViewer'
import CalenderHeader from './CalenderHeader'
const TotalContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display : flex;
    flex-direction : column;
    justify-content : center;
    display:table-row;
    border : black solid 1px;
`
const CalenderContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border : black solid 1px;
`
const View = styled.div`
    
    position: relative;
    width: 75%;
    &:before{
        content: "";
        display: block;
        padding-top: 100%;
    }
`
function Calender(){
    const today = new Date()
    const [date,setDate] = useState(today)
    return (
        <View>
            <TotalContainer>
                <CalenderContainer>
                    <DateViewer
                        date = {date}
                        setDate = {setDate}
                    />
                    <CalenderHeader/>
                    <MainCalender today = {date}/>
                </CalenderContainer>   
            </TotalContainer>
        </View>

    )
}


export default Calender