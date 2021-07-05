import React,{useState} from 'react'
import ShowCalender from './ShowCalender'
function ShowDate({date, setDate}){//날짜 출력
    const month = date.getMonth()  
    const onIncrease = () =>{
        setDate(new Date(date.getFullYear(),month + 1,date.getDate()))
    }
    const onDecrease = () =>{
        setDate(new Date(date.getFullYear(),month - 1,date.getDate()))
    }
    return(
        <>
            <div>
                오늘은 {date.getFullYear()}/{date.getMonth()+1}
            </div>
            <button onClick={()=>onDecrease()}>&lt;</button>{date.getMonth()+1}<button onClick={()=>onIncrease()}>&gt;</button>
        </>
    )
}


function Calender(){
    const today = new Date()
    const [date,setDate] = useState(today)
    return (
        <>
            <ShowDate
                date = {date}
                setDate = {setDate}
            />
            <ShowCalender date = {date}/>
        </>
    )
}


export default Calender