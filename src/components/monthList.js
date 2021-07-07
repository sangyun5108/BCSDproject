import React,{useState} from 'react';
import ShowList from './showList';

const months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];

const MonthList = () => {
    const [month,setMonth] = useState(0);

    const showMonth = (e) => {
        const direction = e.target.value;
        if(direction==='right'){
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
            <div>
                <button onClick={showMonth} value='left'>Left</button>
                <span>{months[month]}</span>
                <button onClick={showMonth} value='right'>Right</button>
            </div>
            <ShowList month={month}/>
        </>
    );
}

export default MonthList;