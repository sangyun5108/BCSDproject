import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import useGiveSum from '../../hooks/useGiveSum';
import { DateSet,Btn,Type } from '../../redux/reducers/showListReducer';
import * as s from './styles';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const SelectBar = () => {
    const {blueBtn,redBtn} = useSelector((state)=>state.showListReducer);
    let {type,month,year} = useSelector((state)=>state.showListReducer);
    const dispatch = useDispatch();

    let incomeSum=0;
    let expeditureSum=0;
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
        if(value==='income'&&newBlueBtn===false){
            newType = 'income';
            newBlueBtn = true;
            newRedBtn = false;
        }else if(value==='expediture'&&newRedBtn===false){
            newType = 'expediture';
            newRedBtn = true;
            newBlueBtn = false;
        }else if(value==='income'&&newBlueBtn===true){
            newType = 'incomeExpediture';
            newBlueBtn = false;
        }else if(value ==='expediture'&&newRedBtn===true){
            newType = 'incomeExpediture';
            newRedBtn = false;
        }
        
        dispatch(Btn({
            redBtn:newRedBtn,
            blueBtn:newBlueBtn}));
        dispatch(Type({kind:newType}));
    }

    return (
        <>
            <s.MWrapper>
                <s.MonthWrapper>
                    <s.Button onClick={showMonth} value='left'>
                        <s.Years>{newMonth===0?year-1:year}</s.Years>
                        <s.Months>{MONTHS[newLeftMonth]}</s.Months>
                    </s.Button>
                </s.MonthWrapper>
                <s.MonthWrapper>
                    <s.Years>{year}</s.Years>
                    <s.Months>{MONTHS[newMonth]}</s.Months>
                </s.MonthWrapper>    
                <s.MonthWrapper>
                    <s.Button onClick={showMonth} value='right'>
                        <s.Years>{newMonth===11?year+1:year}</s.Years>
                        <s.Months>{MONTHS[newRightMonth]}</s.Months>
                    </s.Button>
                </s.MonthWrapper>   
            </s.MWrapper>
            <s.Wrapper>
                <s.BlueButton active={type} value={'income'} onClick={(e)=>clickBtn(e)}>+{incomeSum}</s.BlueButton>
                <s.RedButton active={type} value={'expediture'} onClick={(e)=>clickBtn(e)}>-{expeditureSum}</s.RedButton>
            </s.Wrapper>
        </>
    )
}

export default SelectBar;