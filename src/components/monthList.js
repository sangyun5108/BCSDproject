import React,{useState} from 'react';
import ShowList from './ShowList';
import styled from 'styled-components';

const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-size : 50px;
    margin-top:20px;
`;

const MonthWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
`;

const Year = styled.div`
    font-size:1rem;
    color:#979797;
    font-weight:500;
`;

const Month = styled.span`
    width:500px;
    text-align:center;
    font-weight:700
`;

const Button = styled.button`
    font-size:50px;
    height:60px;
    outline:none;
    border:none;
    background-color:white;
`;

const months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];

const MonthList = () => {
    const [month,setMonth] = useState(0);
    const [year,setYear] = useState(2021);
    
    const showMonth = (e) => {
        const direction = e.target.className;
        if(direction==='fas fa-angle-right'){
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
            <Wrapper>
                <Year>{year}</Year>
                <MonthWrapper>
                    <Button onClick={showMonth} value='left'>
                        <i className="fas fa-angle-left"></i>
                    </Button>
                    <Month>{months[month]}</Month>
                    <Button onClick={showMonth} value='right'>
                        <i className="fas fa-angle-right"></i>
                    </Button>
                </MonthWrapper>
            </Wrapper>
            <ShowList year={year} month={month}/>
        </>
    );
}

export default MonthList;