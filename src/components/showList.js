import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import MakeList from './makeList';

const sumIncome = (lists,month) => {

    const income = lists
    .filter((list)=>list.month===month&&list.type==='INCOME')
    .map((list)=>{
        return Number(list.amount);
    })
    .reduce((acc,cur)=>{
        return acc+cur;
    },0);

    return income;

}//월별 수입 합계를 구해주는 함수

const sumExpediture = (lists,month) => {

    const expediture = lists
    .filter((list)=>list.month===month&&list.type==='EXPEDITURE')
    .map((list)=>{
        return Number(list.amount);
    })
    .reduce((acc,cur)=>{
        return acc+cur;
    },0)

    return expediture;

}//월별 지출 합계를 구해주는 함수

const ShowList = ({month}) => {

    const [blueBtn,setBlueBtn] = useState(false);
    const [redBtn,setRedBtn] = useState(false);
    const [type,setType] = useState('incomeExpediture');

    const lists = useSelector((state)=>state.list);

    const clickBlueBtn = () => {

        if(blueBtn===true){
            
            setBlueBtn(!blueBtn);
            setType('incomeExpediture');
            return;
        }

        setBlueBtn(true);
        setRedBtn(false);
        setType('INCOME');
    }

    const clickRedBtn = () => {

        if(redBtn===true){
            setRedBtn(!redBtn);
            setType('incomExpediture');
            return;
        }

        setRedBtn(true);
        setBlueBtn(false);
        setType('EXPEDITURE');
    }
    
    return(
        <> 
            <div>
                <button onClick={clickBlueBtn}>+{sumIncome(lists,month)}</button>
                <button onClick={clickRedBtn}>{sumExpediture(lists,month)===0?`-${sumExpediture(lists,month)}`:sumExpediture(lists,month)}</button>
            </div>
            <div><MakeList type={type} lists={lists} month={month}/></div>
        </>
    )
}

export default ShowList;