import React,{useState,createContext} from 'react';
import ShowList from './showList';

export const monthContext = createContext('Hello');

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
                if(index===0){
                    index=months.length;
                }
            }
            setMonth(months[index-1]);
        }
    }

    return(
        <>  
            {console.log(monthContext)}
            <button onClick={showMonth}>Left</button>
            <span>{month}</span>
            <button onClick={showMonth}>Right</button>
            <monthContext.Provider value={month}>
                <div><ShowList/></div>
            </monthContext.Provider>
        </>
    );
}

export default MonthList;