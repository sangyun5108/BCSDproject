import React,{useState} from 'react';
import IncomeList from './incomeList';
import ExpeditureList from './expeditureList';
import IncomeExpeditureList from './incomeExpeditureList';
import { connect } from 'react-redux';

const ShowList = ({sumIncome,sumExpediture,month}) => {

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

    return(
        <>  {console.log(month)}
            <button onClick={clickBlueBtn}>+{sumIncome}</button>
            <button onClick={clickRedBtn}>{sumExpediture===0?`-${sumExpediture}`:`${sumExpediture}`}</button>
            <div>{showRightList()}</div>
        </>
    )
}

const mapStateToProps = ({sumIncome, sumExpediture}) => {
    return {
        sumIncome,
        sumExpediture
    }
}

export default connect(mapStateToProps)(ShowList);