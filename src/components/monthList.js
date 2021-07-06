import React,{useState} from 'react';
import ShowList from './showList';

const MonthList = () => {

    const months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];
    const [month,setMonth] = useState(0);

    const showMonth = (e) => {
        const direction = e.target.innerText;
        if(direction==='Right'){
            setMonth(month+1);
            if(month===11){
                setMonth(0);
            }
        }else{
            setMonth(month-1);
            if(month===0){
                setMonth(11);
            }
        }
    }

    return(
        <>  
            <button onClick={showMonth}>Left</button>
            <span>{months[month]}</span>
            <button onClick={showMonth}>Right</button>
            <ShowList month={month}/>
        </>
    );
}

export default MonthList;