import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import styled from 'styled-components'
import { showEx, showIn } from '../redux/actions'

const TotalMoney = styled.div`
    display : flex;
    font-size: 1rem;
    font-weight: 600;
`
const IncomeButton = styled.div`
    display : flex;
    justify-content : center;
    align-items: center;
    width : 150px;
    height: 2rem;
    cursor: pointer;
    margin-right: .4375rem;
    border: .125rem solid #166ff3;
    border-radius: .5375rem;
    color: ${props => props.isClicked ?'white':'#166ff3'};
    background : ${props => props.isClicked ?'#166ff3':'white'};
`
const ExpeditureButton = styled.div`
    display : flex;
    justify-content : center;
    align-items: center;
    width : 150px;
    height: 2rem;
    cursor: pointer;
    margin-left: .4375rem;
    border: .125rem solid #f8123b;
    border-radius: .5375rem;
    color: ${props => props.isClicked ?'white':'#f8123b'};
    background : ${props => props.isClicked ?'#f8123b':'white'};
`


function TotalAmounts({today}){
    const {lists,inClicked, exClicked} = useSelector((state)=>({
        lists : state.list,
        inClicked : state.inClicked,
        exClicked : state.exClicked
    }));
    const dispatch = useDispatch()
    const showIncomes = () => dispatch(showIn())
    const showExpeditures = () => dispatch(showEx())
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
            <IncomeButton onClick={showIncomes} isClicked = {inClicked}>+{totalIncome}</IncomeButton>
            <ExpeditureButton onClick={showExpeditures} isClicked = {exClicked}>-{Math.abs(totalExpediture)}</ExpeditureButton>
        </TotalMoney>
    )
}

export default TotalAmounts