import React,{useState} from 'react';
import { connect } from 'react-redux';

const ShowList = ({lists,month}) => {

    const [blueBtn,setBlueBtn] = useState(false);
    const [redBtn,setRedBtn] = useState(false);
    
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

    const makeList = (type) => {
        let newLists;
        if(type==='income'||type==='expediture'){
            newLists = lists.filter((list)=>list.kind===type&&list.month===month)
        }else{
            newLists = lists.filter((list)=>list.month===month)
        }
        return (
              <>
                <h2>{month}</h2>
                <h3>{type}</h3>
                {newLists.map((list,index)=>{
                    return(
                        <li key={index}>{list.label} {list.amount}</li>
                    )
                })}
              </>
           );
    }//종류에따른 다른 리스트를 return해주는 함수

    const showRightList = () => {
        if(blueBtn===true){
            return makeList('income')
        }else if(redBtn===true){
            return makeList('expediture');
        }else if(blueBtn===false && redBtn===false){
            return makeList('incomeExpediture');
        }
    }//버튼에 따른 필요한 함수 실행

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
            <div>
                <button onClick={clickBlueBtn}>+{sumIncome()}</button>
                <button onClick={clickRedBtn}>-{sumExpediture()}</button>
            </div>
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