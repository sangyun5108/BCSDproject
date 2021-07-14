import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import transformation from '../utils/transformation';
import {useGiveSum} from '../hooks/useGiveSum';
import {Type,Month,Year} from '../redux/actions';

const Wrapper = styled.div`
    width:100%;
    height:20vh;
    margin-top:40px;
    display:flex;
    justify-content:center;
    overflow:hidden;
`;

const MWrapper = styled.div`
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

const Years = styled.div`
    font-size:1rem;
    color:#979797;
    font-weight:500;
`;

const Months = styled.span`
    width:500px;
    text-align:center;
    font-weight:700
`;

const Button = styled.button`
    font-size:50px;
    padding:0px;
    outline:none;
    border:none;
    background-color:white;
    &:hover{
        cursor:pointer;
    }
`;

const BlueButton = styled.button`
    border:2px solid green;
    font-size:25px;
    font-weight:800;
    border-radius:12px;
    width:250px;
    height:50px;
    margin-right:15px;
    background:${props=>props.active==='INCOME'?"green":"white"};
    color:${props=>props.active==='INCOME'?"white":"green"};
    &:hover{
        cursor:pointer;
    }
`;

const RedButton = styled.button`
    border:2px solid red;
    font-size:25px;
    font-weight:800;
    border-radius:12px;
    width:250px;
    height:50px;
    background:${props=>props.active==='EXPEDITURE'?"red":"white"};
    color:${props=>props.active==='EXPEDITURE'?"white":"red"};
    &:hover{
        cursor:pointer;
    }
`;

const ListWrapper = styled.div`
    width:500px;
    height:75px;
    border-radius:15px;
    background:#f5f5f5;
    margin-bottom:15px;
    display:flex;
    align-items:center;
`;

const List = styled.li`
    width:500px;
    height:50px;
    list-style:none;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const Label = styled.div`
    font-weight:700;
    margin-left:20px;
    font-size:20px;
`;

const Amount = styled.div`
    color:${props=>props.active>=0?"green":"red"};
    font-weight:700;
    margin-right:20px;
    font-size:20px;
`;

const Datelist = styled.div`
    text-align:center;
    margin-bottom:5px;
    font-size:17px;
    color:grey;
`;

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];

const ShowList = () => {

    let newLists;
    let listdate=0;

    const {list:lists} = useSelector((state)=>state.incomeExpeditureReducer);
    const dispatch = useDispatch();

    let {type,month,year} = useSelector((state)=>state.showListReducer);

    let incomeSum = 0;
    let expeditureSum = 0;
    
    const showMonth = (e) => {
        const direction = e.target.parentNode.value;
        if(direction==='right'){
            month+=1;
            if(month===12){
                month=0;
                year+=1;
            }
        }else{
                month-=1;
            if(month===-1){
                month=11;
                year-=1;
            }
        }
        dispatch(Month(month));
        dispatch(Year(year));
    }

    incomeSum = useGiveSum('INCOME',month,year);
    expeditureSum = useGiveSum('EXPEDITURE',month,year);

    const clickBtn = (e) => {
        const value = e.target.value;

        if(type==='INCOME'||type==='EXPEDITURE'){
            type = 'incomeExpediture';
        }else{
            type = value;
        }
        dispatch(Type(type));
    }

    if(type==='INCOME'||type==='EXPEDITURE'){
        newLists = lists.filter((list)=>list.type===type&&list.month===month&&Number(list.year)===year)

    }else{
        newLists = lists.filter((list)=>list.month===month&&Number(list.year)===year)
    }

    newLists.sort((a,b)=>{
        return a.date-b.date;
    })

    const checkDate = (date) => {
        if(date!==listdate){
            listdate = date;
            return true;
        } else {
            return false;
        }
    }
    
    return(
        <>
            <MWrapper>
                <Years>{year}</Years>
                <MonthWrapper>
                    <Button onClick={showMonth} value='left'>
                        <i className="fas fa-angle-left"></i>
                    </Button>
                    <Months>{MONTHS[month]}</Months>
                    <Button onClick={showMonth} value='right'>
                        <i className="fas fa-angle-right"></i>
                    </Button>
                </MonthWrapper>
            </MWrapper>
            <Wrapper>
                <BlueButton active={type} value={'INCOME'} onClick={clickBtn}>+{incomeSum}</BlueButton>
                <RedButton active={type} value={'EXPEDITURE'} onClick={clickBtn}>{expeditureSum}</RedButton>
            </Wrapper>
            {newLists.map((list)=>{
                return(
                    <div key={list.id}>
                        <Datelist>
                                {checkDate(list.date)?`${list.day}, ${list.date}th`:''}
                        </Datelist>
                        <ListWrapper> 
                            <List>
                                <Label>{list.label}</Label>
                                <Amount active={list.amount}>{list.amount>0?`+${transformation(list.amount)}`:transformation(list.amount)}</Amount>
                            </List>
                        </ListWrapper>
                    </div>
                );
            })}
        </>
    )
}

export default ShowList;