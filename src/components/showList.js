import React,{useState,useContext} from 'react';
import IncomeList from './incomeList';
import ExpeditureList from './expeditureList';
import IncomeExpeditureList from './incomeExpeditureList';
import { connect } from 'react-redux';
import { monthContext } from './monthList';

const ShowList = ({lists}) => {

    const [blueBtn,setBlueBtn] = useState(false);
    const [redBtn,setRedBtn] = useState(false);
    const month = useContext(monthContext);
    
    const clickBlueBtn = () => {
        setBlueBtn(true);
        setRedBtn(false);
        
        if(blueBtn===true){
            setBlueBtn(false);
        }
    }

    const clickRedBtn = () => {
        setRedBtn(true);
        setBlueBtn(false);
        
        if(redBtn===true){
            setRedBtn(false);
        }
    }

    const showRightList = () => {
        if(blueBtn===true){
            return(
                <>
                    <IncomeList/>
                </>
            )
        }else if(redBtn===true){
            return(
                <>
                    <ExpeditureList/>
                </>
            )
        }else if(blueBtn===false && redBtn===false){
            return(
                <>
                    <IncomeExpeditureList/>
                </>
            )
        }
    }

    const sumIncome = () => {

        const newlists = lists.filter((list)=>list.month===month&&list.kind==='income');
        const incomeList = [];
        newlists.forEach((list)=>{
            incomeList.push(Number(list.amount));
        })
        const income = incomeList.reduce((acc,cur)=>{
            return acc+cur;
        },0)

        return income;

    }//월별 수입 합계를 구해주는 함수

    const sumExpediture = () => {

        const newlists = lists.filter((list)=>list.month===month&&list.kind==='expediture');
        const expeditureList = [];
        newlists.forEach((list)=>{
            expeditureList.push(Number(list.amount));
        })
        const expediture = expeditureList.reduce((acc,cur)=>{
            return acc+cur;
        },0)

        return expediture;

    }//월별 지출 합계를 구해주는 함수

    return(
        <> 
            <button onClick={clickBlueBtn}>+{sumIncome()}</button>
            <button onClick={clickRedBtn}>-{sumExpediture()}</button>
            <div>{showRightList()}</div>
        </>
    )
}

const mapStateToProps = ({list}) => {
    return {
        lists:list
    }
}

export default connect(mapStateToProps)(ShowList);