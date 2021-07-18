import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import transformation from '../utils/transformation';
import useGiveSum from '../hooks/useGiveSum';
import useFilterList from '../hooks/useFilterList';
import { getId } from '../utils/getId';
import {deletelist } from '../redux/reducers/incomeExpeditureReducer';
import { DateSet,Btn,Type } from '../redux/actions';

const Wrapper = styled.div`
    width:100%;
    height:100px;
    margin-top:40px;
    display:flex;
    justify-content:center;
`;

const MWrapper = styled.div`
    width:80%;
    height:100%;
    display:flex;
    align-items:center;
    margin:72px 0px 0px 0;
`;

const MonthWrapper = styled.div`
    display:flex;
    font-size:60px;
    padding-bottom:2px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:33.3333%;
`;

const UlWrapper = styled.ul`
    padding-left:0px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-conten:center;
`;

const Years = styled.div`
    font-size:18px;
    color:#979797;
    font-weight:500;
`;

const Months = styled.div`
    text-align:center;
    font-weight:800;
`;

const Button = styled.button`
    padding:0px;
    outline:none;
    font-size:55px;
    border:none;
    background-color:white;
    color:#979797;
    &:hover{
        cursor:pointer;
        color:black;
    }
`;

const BlueButton = styled.button`
    border:2px solid #166ff3;
    font-size:25px;
    font-weight:800;
    border-radius:15px;
    width:280px;
    height:55px;
    margin-right:15px;
    background:${props=>props.active==='INCOME'?"#166ff3":"white"};
    color:${props=>props.active==='INCOME'?"white":"#166ff3"};
    &:hover{
        cursor:pointer;
    }
`;

const RedButton = styled.button`
    border:2px solid red;
    font-size:25px;
    font-weight:800;
    border-radius:15px;
    width:280px;
    height:55px;
    background:${props=>props.active==='EXPEDITURE'?"#f8123b":"white"};
    color:${props=>props.active==='EXPEDITURE'?"white":"#f8123b"};
    &:hover{
        cursor:pointer;
    }
`;

const ListWrapper = styled.div`
    width:550px;
    padding:0px 10px 0px 10px;
    height:75px;
    border-radius:15px;
    background:#f5f5f5;
    margin-bottom:15px;
    display:flex;
    align-items:center;
    position:relative;
`;

const List = styled.li`
    list-style:none;
    width:95%;
    height:75px;
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
    color:${props=>props.active>=0?"#166ff3":"#f8123b"};
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

const DeleteBtn = styled.button`
    position:absolute;
    width:30px;
    height:30px;
    top:0px;
    right:0px;
    border-radius:50%;
    outline:none;
    text-align:center;
    border:none;
    background:none;
    &:hover{
        cursor:pointer;
    }
`;

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const ShowList = () => {

    let newLists;
    let listdate=0;
    let incomeSum=0;
    let expeditureSum=0;

    const {list:lists} = useSelector((state)=>state.incomeExpeditureReducer);
    const {blueBtn,redBtn} = useSelector((state)=>state.showListReducer);
    const dispatch = useDispatch();
    let {type,month,year} = useSelector((state)=>state.showListReducer);
    let newMonth = month;
    let newRightMonth = newMonth+1===12?0:newMonth+1;
    let newLeftMonth = newMonth-1===-1?11:newMonth-1;
    let newType = type;
    let newYear = year;
    let newBlueBtn = blueBtn;
    let newRedBtn = redBtn;
    const showMonth = (e) => {
        const direction = e.target.parentNode.value;
        if(direction==='right'){
            newMonth+=1
            if(newMonth===12){
                newMonth=0;
                newYear+=1;
            }
        }else{
            newMonth-=1;
            if(newMonth===-1){
                newMonth=11;
                newYear-=1;
            }
        }
        dispatch(DateSet({year:newYear,
            month:newMonth}));
    }

    incomeSum = useGiveSum('income',month,year);
    expeditureSum = useGiveSum('expediture',month,year);

    const clickBtn = (e) => {
        const value = e.target.value;
        if(value==='INCOME'&&newBlueBtn===false){
            newType = 'INCOME';
            newBlueBtn = true;
            newRedBtn = false;
        }else if(value==='EXPEDITURE'&&newRedBtn===false){
           newType = 'EXPEDITURE';
           newRedBtn = true;
           newBlueBtn = false;
        }else if(value==='INCOME'&&newBlueBtn===true){
            newType = 'incomeExpediture';
            newBlueBtn = false;
        }else if(value ==='EXPEDITURE'&&newRedBtn===true){
            newType = 'incomeExpediture';
            newRedBtn = false;
        }
        
        dispatch(Btn({
            redBtn:newRedBtn,
            blueBtn:newBlueBtn}));
        dispatch(Type({kind:newType}));
    }

    newLists = useFilterList(type,month,year);

    const checkDate = (date) => {
        if(date!==listdate){
            listdate = date;
            return true;
        } else {
            return false;
        }
    }

    const deleteList = (id) => {
        const deleteId = id;
        const list = lists
        .filter((list)=>{
            return list.id!==deleteId;
        })
        .sort((a,b)=>{
            return a.id-b.id;
        });
        localStorage.setItem('lists',JSON.stringify(list));
        let incomeId = getId('INCOME',0);
        let expeditureId = getId('EXPEDITURE',100);
        dispatch(deletelist({list,
            incomeId,
            expeditureId
        }));
    }
    
    return(
        <>
            <MWrapper>
                <MonthWrapper>
                    <Button onClick={showMonth} value='left'>
                        <Years>{newMonth===0?year-1:year}</Years>
                        <Months>{MONTHS[newLeftMonth]}</Months>
                    </Button>
                </MonthWrapper>
                <MonthWrapper>
                    <Years>{year}</Years>
                    <Months>{MONTHS[newMonth]}</Months>
                </MonthWrapper>    
                <MonthWrapper>
                    <Button onClick={showMonth} value='right'>
                        <Years>{newMonth===11?year+1:year}</Years>
                        <Months>{MONTHS[newRightMonth]}</Months>
                    </Button>
                </MonthWrapper>   
            </MWrapper>
            <Wrapper>
                <BlueButton active={type} value={'INCOME'} onClick={clickBtn}>+{incomeSum}</BlueButton>
                <RedButton active={type} value={'EXPEDITURE'} onClick={clickBtn}>-{expeditureSum}</RedButton>
            </Wrapper>
            <UlWrapper>
                {newLists.map((list)=>{
                    return(
                        <div key={list.id}>
                                    {checkDate(list.date)?(
                                        <Datelist>
                                            {list.day}, {list.date}th
                                        </Datelist>
                                    ):''}
                            <ListWrapper> 
                                <List>
                                    <Label>{list.label}</Label>
                                    <Amount active={list.amount}>{list.amount>0?`+${transformation(list.amount)}`:transformation(list.amount)}</Amount>
                                    <DeleteBtn onClick={()=>deleteList(list.id)}>X</DeleteBtn>
                                </List>
                            </ListWrapper>
                        </div>
                    );
                })}
            </UlWrapper>
        </>
    )
}

export default ShowList;