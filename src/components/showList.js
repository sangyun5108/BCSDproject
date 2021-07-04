import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import MakeList from './makeList';

const ShowList = ({month}) => {

    const [blueBtn,setBlueBtn] = useState(false);
    const [redBtn,setRedBtn] = useState(false);

    const lists = useSelector((state)=>state.list)
    
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
            return (
                <>
                    <MakeList type={'income'} lists={lists} month={month}/>
                </>
            );
        }else if(redBtn===true){
            return (
                <>
                    <MakeList type={'expediture'} lists={lists} month={month}/>
                </>
            );
        }else if(blueBtn===false && redBtn===false){
            return (
                <>
                    <MakeList type={'incomeExpediture'} lists={lists} month={month}/>
                </>
            );
        }
    }//버튼에 따른 필요한 함수 실행

    const sumIncome = () => {

        const newlists = lists.filter((list)=>list.month===month&&list.type==='INCOME');
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

        const newlists = lists.filter((list)=>list.month===month&&list.type==='EXPEDITURE');
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
            <div>
                <button onClick={clickBlueBtn}>+{sumIncome()}</button>
                <button onClick={clickRedBtn}>{sumExpediture()}</button>
            </div>
            <div>{showRightList()}</div>
        </>
    )
}

export default ShowList;