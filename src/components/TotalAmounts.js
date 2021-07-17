import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import styled from 'styled-components'
import { AllLiST, BlueBtn, ExList, InList, RedBtn } from '../redux/actions'

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

function TotalAmounts({today}){
    const lists = useSelector((state) => state.incomeExpeditureReducer.list)
    const list = useSelector((state) => state.showListReducer.list)
    const {blueBtn, redBtn} = useSelector((state) => state.showListReducer)
    console.log(blueBtn, redBtn)
    console.log(list)
    let newBlueBtn = blueBtn
    let newRedBtn = redBtn
    const dispatch = useDispatch()
    const showIncomes = () => dispatch(InList())
    const showExpeditures = () => dispatch(ExList())
    const showAll = () => dispatch(AllLiST())
    const clickIncomeBtn = () => {
        if(newBlueBtn){
            newBlueBtn = false
            newRedBtn = false
            showAll()
        }else{
            newBlueBtn = true
            newRedBtn = false
            showIncomes()
        }
        dispatch(BlueBtn(newBlueBtn))
        dispatch(RedBtn(newRedBtn))
    }
    const clickExpeditureBtn = () => {
        if(newRedBtn){
            newBlueBtn = false
            newRedBtn = false
            showAll()
        }else{
            newBlueBtn = false
            newRedBtn = true
            showExpeditures()
        }
        dispatch(BlueBtn(newBlueBtn))
        dispatch(RedBtn(newRedBtn))
    }
    let totalIncome = lists.filter(account => 
        account.type === 'INCOME' && 
        account.year === today.getFullYear() &&
        account.month === today.getMonth())
        .map(account => account.amount)
        .reduce((a,b)=>a+b,0)
    let totalExpediture = lists.filter(account => 
        account.type === 'EXPEDITURE' && 
        account.year === today.getFullYear() &&
        account.month === today.getMonth())
        .map(account => account.amount)
        .reduce((a,b)=>a+b,0)
    return (
        <TotalMoney>
            <IncomeButton onClick={() => clickIncomeBtn()} clicked={blueBtn}>+{totalIncome}</IncomeButton>
            <ExpeditureButton onClick={() => clickExpeditureBtn()} clicked={redBtn} >-{Math.abs(totalExpediture)}</ExpeditureButton>
        </TotalMoney>
    )
}

export default TotalAmounts