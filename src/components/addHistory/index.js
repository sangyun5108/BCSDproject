import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRef, useState} from 'react';
import { income,expediture, editlist } from '../../store/incomeExpeditureReducer';
import MainPage from '../../pages/mainPage';
import { useNavigate,useLocation } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import store from '../../store';
import * as s  from './styles';
import {nowyear,nowmonth,nowdate,WEEK,MONTH} from '../../shared/const';

const AddHistory = () => {

    const {state:editList} = useLocation();
    const [type,setType] = useState(true); //income,Expediture 선택
    const [moneyType,setMoneyType] = useState(editList?editList.moneyType:'');
    const [closeBtn,setCloseBtn] = useState(false);
    const yearRef = useRef(null);
    const monthRef = useRef(null);
    const dateRef = useRef(null);
    const amountRef = useRef(null);
    const labelRef = useRef(null);
    let {incomeId,expeditureId} = useSelector((state)=>state.incomeExpeditureReducer);

    const [inputYear,onChangeYear,setInputYear] = useInput(editList?editList.year:nowyear);
    const [inputMonth,onChangeMonth,setInputMonth] = useInput(editList?editList.month+1:`${nowmonth<0?`0${nowmonth}`:nowmonth}`);
    const [inputDate,onChangeDate,setInputDate] = useInput(nowdate<0?`0${nowdate}`:nowdate);
    const [inputAmount,onChangeAmount,setInputAmount] = useInput(editList?editList.amount:'');
    const [inputLabel,onChangeLabel] = useInput(editList?editList.label:'');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickIncome = (e) => {
        setType(true);
    }

    const onClickExpediture = (e) => {
        setType(false);
    }

    const checkYearType = () => {
        const value = Number(yearRef.current.value);
        if(isNaN(value)||value<2000){
            setInputYear(nowyear);
        }else{
            setInputYear(value);
        }
        
    }//연도가 올바르게 입력되었는지 체크해주는 함수

    const checkMonthType = () => {
        let value = Number(monthRef.current.value);
        if(isNaN(value)||value>12||value<=0){
            setInputMonth(nowmonth);
        }else {
            value = value<10?`0${value}`:value;
            setInputMonth(value);
        }
    }//month가 올바르게 입력되었는지 체크해주는 함수

    const checkDateType = () => {
        let value = Number(dateRef.current.value);
        if(isNaN(value)||value>MONTH[Number(monthRef.current.value)-1]||value<=0){
            setInputDate(nowdate);
        }else{
            value = value<10?`0${value}`:value;
            setInputDate(value);
        }
    }//date가 올바르게 입력되었는지 체크하는 함수

    const checkAmountType = () => {
        const value = amountRef.current.value;
        if(isNaN(Number(value))){
            setInputAmount('');
            return;
        }else{
            setInputAmount(value);
        }
    }

    const onClickMoneyType = (e) => {
        setMoneyType(e.target.innerText);
    }


    const onClickCloseBtn = () => {
        setCloseBtn(true);
        setTimeout(()=>{
            navigate('/');
        },450);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(moneyType===''){
            alert('유형체크를 해주세요'); 
            return;
        }
        onClickCloseBtn();
        const monthIndex = Number(monthRef.current.value)-1;
        const dayOfWeek = WEEK[new Date(`${yearRef.current.value}-${monthRef.current.value}-${dateRef.current.value}`).getDay()];

        if(editList){
            const {incomeExpeditureReducer:{list:lists}} = store.getState();
            const {id} = editList;

            let editlists = lists.map((list)=>{
                if(list.id === id){
                    
                    const editList = {
                        amount : type?parseInt(inputAmount):-1*parseInt(inputAmount),
                        date : inputDate,
                        day : dayOfWeek,
                        label : inputLabel,
                        moneyType : moneyType,
                        month : inputMonth-1,
                        type : type?'income':'expediture',
                        year : inputYear,
                        id : list.id
                    }
                    return editList;
                }else {
                    return list;
                }
            });

            dispatch(editlist({list:editlists}));
        }
        else if(type){
            dispatch(income({
                amount:amountRef.current.value,
                label:labelRef.current.value,
                year:Number(yearRef.current.value),
                month:monthIndex,
                date:Number(dateRef.current.value),
                day:dayOfWeek,
                id:incomeId++,
                moneyType:moneyType,
            }));
        }else{
                dispatch(expediture({
                    amount:amountRef.current.value,
                    label:labelRef.current.value,
                    year:Number(yearRef.current.value),
                    month:monthIndex,
                    date:Number(dateRef.current.value),
                    day:dayOfWeek,
                    id:expeditureId++,
                    moneyType:moneyType,
                }));
        }
        localStorage.setItem('lists',JSON.stringify(store.getState().incomeExpeditureReducer.list));
    }

    return(
        <>  
            <MainPage/>
            <s.Wrapper active={closeBtn}>
                    <s.BtnWrapper>
                        <s.IncomeBtn active={type} onClick={onClickIncome}>Income</s.IncomeBtn>
                        <s.ExpeditureBtn active={type} onClick={onClickExpediture}>Expediture</s.ExpeditureBtn>
                    </s.BtnWrapper>
                        <s.Xbutton onClick={onClickCloseBtn}>X</s.Xbutton>
                    <form onSubmit={onSubmit}>
                        <s.InputDayWrapper>
                            <s.InputYear ref={yearRef} onChange={(e)=>onChangeYear(e)} value={inputYear} maxLength="4" onBlur={checkYearType}></s.InputYear>
                            <s.InputDay ref={monthRef} onChange={(e)=>onChangeMonth(e)} value={inputMonth} maxLength="2" onBlur={checkMonthType}></s.InputDay>
                            <s.InputDay ref={dateRef} onChange={(e)=>onChangeDate(e)} value={inputDate} maxLength="2" onBlur={checkDateType}></s.InputDay>
                        </s.InputDayWrapper>
                        <s.InputMoneyTypeWrapper>
                            <s.InputCashTypeBtn active={moneyType} onClick={onClickMoneyType}>
                                <s.InputMoneyTypeText>{type?'월급':'현금'}</s.InputMoneyTypeText>
                            </s.InputCashTypeBtn>
                            <s.InputCardTypeBtn active={moneyType} onClick={onClickMoneyType}>
                                <s.InputMoneyTypeText>{type?'용돈':'카드'}</s.InputMoneyTypeText>
                            </s.InputCardTypeBtn>
                        </s.InputMoneyTypeWrapper>
                        <s.InputLabelAmountWrapper>
                            <s.InputLabel ref={labelRef} onChange={(e)=>onChangeLabel(e)} value={inputLabel} maxLength="10" placeholder="Label" required></s.InputLabel>
                            <s.InputAmount ref={amountRef} onChange={(e)=>onChangeAmount(e)} value={inputAmount} maxLength="10" onBlur={checkAmountType} placeholder="Amount" required></s.InputAmount>
                            <s.DoneButton active={type} value='submit' type="submit">Done</s.DoneButton>
                        </s.InputLabelAmountWrapper>
                    </form>
            </s.Wrapper>
        </>
    );
}

export default AddHistory;