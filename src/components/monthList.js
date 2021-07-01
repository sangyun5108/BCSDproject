import React,{useRef} from 'react';
const MonthList = () => {

    const months = ['Jan','Feb','Mar','Apr','Jun','July','Aug','Sep','Oct','Nov','Dec'];

    const monthRef = useRef(null);

    const showMonth = (e) => {
        const direction = e.target.innerText;
        let index = months.findIndex((month)=>month===monthRef.current.innerText);
        if(direction==='Right'){ 
            if(index===months.length-1){
                index=-1;
            }
            monthRef.current.innerText = months[index+1];
        }else{
            if(direction==='Left'){
                if(index===0){
                    index=months.length;
                }
            }
            monthRef.current.innerText = months[index-1];
        }
    }

    return(
        <>
            <button onClick={showMonth}>Left</button>
            <span ref={monthRef}>Jan</span>
            <button onClick={showMonth}>Right</button>
        </>
    );
}

export default MonthList;