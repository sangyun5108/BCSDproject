// import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import styled from 'styled-components'
// import { BlueBtn, ExList, InList, RedBtn } from '../redux/actions'

// const TotalMoney = styled.div`
//     width : 100%;
//     display : flex;
//     font-size: min(3vw, 24px);
//     font-weight: 600;
//     justify-content : center;

// `
// const IncomeButton = styled.div`
//     display : flex;
//     justify-content : center;
//     align-items: center;
//     width : 25%;
//     height : 50px;
//     max-width : 250px;
//     cursor: pointer;
//     margin-right: 10.5px;
//     border: 2px solid #166ff3;
//     border-radius: 9px;
//     color: ${props => props.isClicked ?'white':'#166ff3'};
//     background : ${props => props.isClicked ?'#166ff3':'white'};
// `
// const ExpeditureButton = styled.div`
//     display : flex;
//     justify-content : center;
//     align-items: center;
//     width : 25%;
//     height : 50px;
//     max-width : 250px;
//     cursor: pointer;
//     margin-left: 10.5px;
//     border: 2px solid #f8123b;
//     border-radius: 9px;
//     color: ${props => props.isClicked ?'white':'#f8123b'};
//     background : ${props => props.isClicked ?'#f8123b':'white'};
// `

// function TotalAmounts({today}){
//     const lists = useSelector((state) => state.incomeExpeditureReducer.list)
//     const list = useSelector((state) => state.showListReducer.list)
//     let {blueBtn, redBtn} = useSelector((state) => ({
//         blueBtn : state.showListReducer.blueBtn,
//         redBtn : state.showListReducer.redBtn
//     }))
//     console.log(blueBtn, redBtn)
//     console.log(list)

//     const dispatch = useDispatch()
//     const showIncomes = () => dispatch(InList())
//     const showExpeditures = () => dispatch(ExList())
//     const clickIncomeBtn = () => {
//         if(blueBtn){
//             blueBtn = false
//             redBtn = false
//         }else{
//             blueBtn = true
//             redBtn = false
//             showIncomes()
//         }
//         dispatch(BlueBtn(blueBtn))
//         dispatch(RedBtn(redBtn))
//     }
//     const clickExpeditureBtn = () => {
//         if(redBtn){
//             blueBtn = false
//             redBtn = false
//         }else{
//             blueBtn = false
//             redBtn = true
//             showExpeditures()
//         }
//         dispatch(BlueBtn(blueBtn))
//         dispatch(RedBtn(redBtn))
//     }
//     let totalIncome = lists.filter(account => 
//         account.type === 'INCOME' && 
//         account.year === today.getFullYear() &&
//         account.month === today.getMonth())
//         .map(account => account.amount)
//         .reduce((a,b)=>a+b,0)
//     let totalExpediture = lists.filter(account => 
//         account.type === 'EXPEDITURE' && 
//         account.year === today.getFullYear() &&
//         account.month === today.getMonth())
//         .map(account => account.amount)
//         .reduce((a,b)=>a+b,0)
//     return (
//         <TotalMoney>
//             <IncomeButton onClick={() => clickIncomeBtn()}>+{totalIncome}</IncomeButton>
//             <ExpeditureButton onClick={() => clickExpeditureBtn()} >-{Math.abs(totalExpediture)}</ExpeditureButton>
//         </TotalMoney>
//     )
// }

// export default TotalAmounts