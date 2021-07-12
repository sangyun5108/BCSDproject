import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

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
    color: #166ff3;
    background : white;
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
    color: #f8123b;
    background : white;
`

function TotalAmounts({today}){
    const lists = useSelector((state)=>state.list);
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
            <IncomeButton>+{totalIncome}</IncomeButton>
            <ExpeditureButton>-{Math.abs(totalExpediture)}</ExpeditureButton>
        </TotalMoney>
    )
}

export default TotalAmounts