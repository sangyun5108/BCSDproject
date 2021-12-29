import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Btn, Type } from '../../redux/reducers/showListReducer'
import useFilterList from '../../hooks/useFilterList'
import * as s from './styles';

function TotalAmounts(){
    const {blueBtn, redBtn} = useSelector((state) => state.showListReducer)
    const {year,month} = useSelector((state => ({
        year : (state.showListReducer).year,
        month : (state.showListReducer).month
    })))
    let newBlueBtn = blueBtn
    let newRedBtn = redBtn
    const dispatch = useDispatch()
    const clickIncomeBtn = () => {
        if(newBlueBtn){
            newBlueBtn = false
            newRedBtn = false
            dispatch(Type({kind:'incomeExpediture'}))
        }else{
            newBlueBtn = true
            newRedBtn = false
            dispatch(Type({kind:'income'}))
        }
        dispatch(Btn({redBtn:newRedBtn,
        blueBtn:newBlueBtn}))
        
    }
    const clickExpeditureBtn = () => {
        if(newRedBtn){
            newBlueBtn = false
            newRedBtn = false
            dispatch(Type({kind:'incomeExpediture'}))
        }else{
            newBlueBtn = false
            newRedBtn = true
            dispatch(Type({kind:'expediture'}))
        }
        dispatch(Btn({redBtn:newRedBtn,
        blueBtn:newBlueBtn}))
    }
    let totalIncome = useFilterList('income',month,year).reduce((a,b)=>a+b.amount,0)
    let totalExpediture = useFilterList('expediture',month,year).reduce((a,b)=>a+b.amount,0)
    return (
        <s.TotalMoney>
            <s.IncomeButton onClick={() => clickIncomeBtn()} clicked={blueBtn}>+{totalIncome}</s.IncomeButton>
            <s.ExpeditureButton onClick={() => clickExpeditureBtn()} clicked={redBtn} >-{Math.abs(totalExpediture)}</s.ExpeditureButton>
        </s.TotalMoney>
    )
}

export default TotalAmounts