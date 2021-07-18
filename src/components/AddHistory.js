import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRef, useState} from 'react';
import {income,expediture} from '../redux/reducers/incomeExpeditureReducer_toolkit';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import store from '../redux/store';

const Wrapper = styled.div`
    border-bottom:0px;
    position:fixed;
    bottom:0;
    width:600px;
    height:94vh;
    background-color:white;
    z-index:0;
    border-radius:25px 25px 0px 0px;
    display:flex;
    flex-direction:column;
    align-items:center;
    box-shadow:0px 0px 20px grey;
`;

const BtnWrapper = styled.div`  
    width:100%;
    height:6vh;
    display:flex;
    justify-content:center;
    margin-top:100px;
`;

const IncomeBtn = styled.button`
    width:210px;
    height:50px;
    margin-right:5%;
    text-align:center;
    font-size:25px;
    font-weight:bold;
    border-radius:10px;
    border:none;
    background:${props => props.active===true?'#424242':''};
    color:${props => props.active===true?'white':''};

`;

const ExpeditureBtn = styled.button`
    width:210px;
    height:50px;
    text-align:center;
    font-size:25px;
    font-weight:bold;
    border-radius:10px;
    border:none;
    background:${props => props.active===false?'#424242':''};
    color:${props => props.active===false?'white':''};
`;

const InputDayWrapper = styled.div`
    margin-top:10%;
    display:flex;
    justify-content:center;
`;

const InputYear = styled.input`
    border:none;
    text-align:center;
    width:70px;
    outline:none;
    font-size:25px;
    font-weight:650;
    &:focus{
        color:#78909c;
    }
    padding:0;
`;

const InputDay = styled.input`
    border:none;
    text-align:center;
    width:40px;
    outline:none;
    font-size:25px;
    font-weight:650;
    &:focus{
        color:#78909c;
    }
    padding:0;
`;

const InputLabel = styled.input`
    width:450px;
    height:65px;
    border-radius:12px;
    outline:none;
    border:none;
    background-color:#f5f5f5;
    margin-bottom:25px;
    font-size:25px;
    padding-left:25px;
`
const InputAmount = styled.input`
    width:450px;
    height:65px;
    border-radius:12px;
    outline:none;
    border:none;
    background-color:#f5f5f5;
    margin-bottom:20px;
    font-size:25px;
    padding-left:25px;
`;

const InputLabelAmountWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    margin-top:7%;
`;

const DoneButton = styled.button`
    width:85%;
    height:8vh;
    border-radius:10px;
    outline:none;
    position:absolute;
    bottom:0;
    margin-bottom:10%;
    border:none;
    background-color:${props=>props.active?'#166ff3':'#f8123b'};
    color:white;
    font-size:30px;
    font-weight:700;
    &:hover{
        cursor:pointer;
    }
`;

const Xbutton = styled.button`
  position:absolute;
  top:2%;
  right:3%;
  z-index:1;
  width:30px;
  height:30px;
  text-align:center;
  border-radius:50%;
  font-size:15px;
  background-color:#424242;
  outline:none;
  border:none;
  color:white;
  font-weight:700;
  &:hover{
    cursor:pointer;
  }
`;

const date = new Date();
const nowyear = date.getFullYear();
const nowmonth = date.getMonth()<10?`0${date.getMonth()+1}`:`${date.getMonth()}`;
const nowdate = date.getDate()<10?`0${date.getDate()}`:`${date.getDate()}`;
const WEEK = ['SUN','MON','TUE','WEN','THU','FRI','SAT'];

const AddHistory = () => {

    const [type,setType] = useState(true); //income,Expediture 선택
    const [close,setClose] = useState(false);
    const yearRef = useRef(null);
    const monthRef = useRef(null);
    const dateRef = useRef(null);
    const amountRef = useRef(null);
    const labelRef = useRef(null);
    let {incomeId,expeditureId} = useSelector((state)=>state.incomeExpeditureReducer);

    const history = useHistory();
    const dispatch = useDispatch();

    const onClickIncome = (e) => {
        setType(true);
    }

    const onClickExpediture = (e) => {
        setType(false);
    }

    const checkYearType = () => {
        const value = Number(yearRef.current.value);
        if(isNaN(value)){
            yearRef.current.value = nowyear;
        }else{
            yearRef.current.value = value;
        }
    }//연도가 올바르게 입력되었는지 체크해주는 함수

    const checkMonthType = () => {
        let value = Number(monthRef.current.value);
        if(isNaN(value)){
            monthRef.current.value = nowmonth;
        }else{
            value = value<10?`0${value}`:value;
            monthRef.current.value = value;
        }
    }//month가 올바르게 입력되었는지 체크해주는 함수

    const checkDateType = () => {
        let value = Number(dateRef.current.value);
        if(isNaN(value)){
            dateRef.current.value = nowdate;
        }else{
            value = value<10?`0${value}`:value;
            dateRef.current.value = value;
        }
    }//date가 올바르게 입력되었는지 체크하는 함수

    const checkAmountType = () => {
        const value = amountRef.current.value;
        if(isNaN(Number(value))){
            amountRef.current.value = '';
            amountRef.current.focus();
        }else{
            amountRef.current.value = value;
        }
    }

    const getLabel = () => {
        const value = labelRef.current.value;
        labelRef.current.value = value;
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        history.push('/');
        const monthIndex = Number(monthRef.current.value)-1;
        const dayOfWeek = WEEK[new Date(`${yearRef.current.value}-${monthRef.current.value}-${dateRef.current.value}`).getDay()];

        if(type===true){
            dispatch(income({
                amount:amountRef.current.value,
                label:labelRef.current.value,
                year:Number(yearRef.current.value),
                month:monthIndex,
                date:Number(dateRef.current.value),
                day:dayOfWeek,
                id:incomeId++}));
        }else{
            dispatch(expediture({
                amount:amountRef.current.value,
                label:labelRef.current.value,
                year:Number(yearRef.current.value),
                month:monthIndex,
                date:Number(dateRef.current.value),
                day:dayOfWeek,
                id:expeditureId++}));
        }
        localStorage.setItem('lists',JSON.stringify(store.getState().incomeExpeditureReducer.list));
    }

    const onClickXbutton = (e) => {
        setClose(!close);
        history.push('/');
    }

    return(
        <>   
            {console.log(store.getState())}
            <Wrapper>
                    <BtnWrapper>
                        <IncomeBtn active={type} onClick={onClickIncome}>Income</IncomeBtn>
                        <ExpeditureBtn active={type} onClick={onClickExpediture}>Expediture</ExpeditureBtn>
                    </BtnWrapper>
                        <Xbutton onClick={onClickXbutton}>X</Xbutton>
                    <form onSubmit={onSubmit}>
                        <InputDayWrapper>
                            <InputYear ref={yearRef} defaultValue={nowyear} maxLength="4" onBlur={checkYearType}></InputYear>
                            <InputDay ref={monthRef} defaultValue={nowmonth} maxLength="2" onBlur={checkMonthType}></InputDay>
                            <InputDay ref={dateRef} defaultValue={nowdate} maxLength="2" onBlur={checkDateType}></InputDay>
                        </InputDayWrapper>
                        <InputLabelAmountWrapper>
                            <InputLabel ref={labelRef} onBlur={getLabel} placeholder="Label" required></InputLabel>
                            <InputAmount ref={amountRef} onBlur={checkAmountType} placeholder="Amount" required></InputAmount>
                            <DoneButton active={type} type="submit">Done</DoneButton>
                        </InputLabelAmountWrapper>
                    </form>
            </Wrapper>
        </>
    );
}

export default AddHistory;