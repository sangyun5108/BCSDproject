import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Btn, Type } from '../redux/reducers/showListReducer_toolkit'
import useFilterList from '../hooks/useFilterList'

const TotalMoney = styled.div`
    width : 100%;
    display : flex;
    font-size: min(3vw, 24px);
    font-weight: 600;
    justify-content : center;

`
const IncomeButton = styled.div`
    display : flex;
    justify-content : center;
    align-items: center;
    width : 25%;
    height : 50px;
    max-width : 250px;
    cursor: pointer;
    margin-right: 10.5px;
    border: 2px solid #166ff3;
    border-radius: 9px;
    color: ${clicked => clicked.clicked ?'white':'#166ff3'};
    background : ${clicked => clicked.clicked ?'#166ff3':'white'};
`
const ExpeditureButton = styled.div`
    display : flex;
    justify-content : center;
    align-items: center;
    width : 25%;
    height : 50px;
    max-width : 250px;
    cursor: pointer;
    margin-left: 10.5px;
    border: 2px solid #f8123b;
    border-radius: 9px;
    color: ${clicked => clicked.clicked ? 'white':'#f8123b'};
    background : ${clicked => clicked.clicked ?'#f8123b':'white'};
`

function TotalAmounts(){
    const {blueBtn, redBtn} = useSelector((state) => state.showListReducer)
    const {year,month} = useSelector((state => ({
        year : (state.showListReducer).year,
        month : (state.showListReducer).month
    })))
    console.log(blueBtn,redBtn)
    let newBlueBtn = blueBtn
    let newRedBtn = redBtn
    const dispatch = useDispatch()
    const clickIncomeBtn = () => {
        if(newBlueBtn){
            newBlueBtn = false
            newRedBtn = false
            dispatch(Type('incomeExpediture'))
        }else{
            newBlueBtn = true
            newRedBtn = false
            dispatch(Type('INCOME'))
        }
        dispatch(Btn({blueBtn : newBlueBtn,redBtn : newRedBtn}))
        
    }
    const clickExpeditureBtn = () => {
        if(newRedBtn){
            newBlueBtn = false
            newRedBtn = false
            dispatch(Type('incomeExpediture'))
        }else{
            newBlueBtn = false
            newRedBtn = true
            dispatch(Type('EXPEDITURE'))
        }
        dispatch(Btn({blueBtn : newBlueBtn,redBtn : newRedBtn}))
    }
    let totalIncome = useFilterList('INCOME',month,year).reduce((a,b)=>a+b.amount,0)
    let totalExpediture = useFilterList('EXPEDITURE',month,year).reduce((a,b)=>a+b.amount,0)
    return (
        <TotalMoney>
            <IncomeButton onClick={() => clickIncomeBtn()} clicked={blueBtn}>+{totalIncome}</IncomeButton>
            <ExpeditureButton onClick={() => clickExpeditureBtn()} clicked={redBtn} >-{Math.abs(totalExpediture)}</ExpeditureButton>
        </TotalMoney>
    )
}

export default TotalAmounts