import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import MakeList from './MakeList';
import styled from 'styled-components';

const sumIncome = (lists,month,year) => {

    const income = lists
    .filter((list)=>list.month===month&&list.type==='INCOME'&&Number(list.year)===year)
    .map((list)=>{
        return Number(list.amount);
    })
    .reduce((acc,cur)=>{
        return acc+cur;
    },0);
    return income;

}//월별 수입 합계를 구해주는 함수

const sumExpediture = (lists,month,year) => {

    const expediture = lists
    .filter((list)=>list.month===month&&list.type==='EXPEDITURE'&&Number(list.year)===year)
    .map((list)=>{
        return Number(list.amount);
    })
    .reduce((acc,cur)=>{
        return acc+cur;
    },0);

    console.log(expediture);
    return -1*expediture;

}//월별 지출 합계를 구해주는 함수

const ShowList = ({month,year}) => {

    const [type,setType] = useState('incomeExpediture');

    const lists = useSelector((state)=>state.list);

    const clickPlusBtn = () => {

        if(type ==='INCOME'){
            setType('incomeExpediture');
            return;
        }
        setType('INCOME');
    }

    const clickMinusBtn = () => {
        
        if(type==='EXPEDITURE'){
            setType('incomeExpediture');
            return;
        }
        setType('EXPEDITURE');
    }
    
    return(
        <> 
            <Wrapper>
                <BlueButton active={type} onClick={clickPlusBtn}>+{sumIncome(lists,month,year)}</BlueButton>
                <RedButton active={type} onClick={clickMinusBtn}>-{sumExpediture(lists,month,year)}</RedButton>
            </Wrapper>
            <div><MakeList type={type} lists={lists} month={month} year={year}/></div>
        </>
    )
}

const Wrapper = styled.div`
    width:100%;
    height:20vh;
    margin-top:40px;
    display:flex;
    justify-content:center;
`;

const BlueButton = styled.button`
    border:2px solid green;
    font-size:25px;
    font-weight:800;
    border-radius:12px;
    width:20%;
    height:6vh;
    margin-right:15px;
    background:${props=>props.active==='INCOME'?"green":"white"};
    color:${props=>props.active==='INCOME'?"white":"green"};
`;

const RedButton = styled.button`
    border:2px solid red;
    font-size:25px;
    font-weight:800;
    border-radius:12px;
    width:20%;
    height:6vh;
    background:${props=>props.active==='EXPEDITURE'?"red":"white"};
    color:${props=>props.active==='EXPEDITURE'?"white":"red"};
`;

export default ShowList;