import React,{useState,useEffect} from 'react';
import ShowList from './showList';

const MonthList = () => {

    const months = ['Jan','Feb','Mar','Apr','Jun','July','Aug','Sep','Oct','Nov','Dec'];
    const [month,setMonth] = useState('Jan');

    const showMonth = (e) => {
        const direction = e.target.innerText;
        let index = months.findIndex((check)=>check===month);
        if(direction==='Right'){ 
            if(index===months.length-1){
                index=-1;
            }
            setMonth(months[index+1]);
        }else{
            if(direction==='Left'){
                console.log('Left');
                if(index===0){
                    index=months.length;
                }
            }
            setMonth(months[index-1]);
        }
    }

    return(
        <>
            <button onClick={showMonth}>Left</button>
            <span>{month}</span>
            <button onClick={showMonth}>Right</button>
            <div><ShowList month={month}/></div>
        </>
    );
}

export default MonthList;