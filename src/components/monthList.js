import React,{useState} from 'react';
import ShowList from './showList';

const months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];

const MonthList = () => {
    const [month,setMonth] = useState(0);
    const [year,setYear] = useState(2021);
    
    const showMonth = (e) => {
        const direction = e.target.value;
        if(direction==='right'){
            setMonth(month+1);
            if(month===11){
                setMonth(0);
                setYear(year+1);
            }
        }else{
            setMonth(month-1);
            if(month===0){
                setMonth(11);
                setYear(year-1);
            }
        }
    }

    return(
        <>  
            <div>
                <div>{year}</div>
                <button onClick={showMonth} value='left'>Left</button>
                <span>{months[month]}</span>
                <button onClick={showMonth} value='right'>Right</button>
            </div>
            <ShowList year={year} month={month}/>
        </>
    );
}

export default MonthList;