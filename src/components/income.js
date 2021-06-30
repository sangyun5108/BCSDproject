import React from 'react';
import {connect} from 'react-redux';
import { useState } from 'react';
import {income,} from '../redux/actions';
import store from '../redux/store';

const Income = ({income}) => {

    const[amount,setAmount] = useState(0);
    const[label,setLabel] = useState('');
    const kind = 'income';

    const showDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth()<10?`0${date.getMonth()+1}`:`${date.getMonth()}`;
        const nowdate = date.getDate()<10?`0${date.getDate()+1}`:`${date.getDate()}`;
        return `${year}.${month}.${nowdate}`;
    }

    const changeAmount = (e) => {
        setAmount(e.target.value);
    }

    const changeLabel = (e) => {
        setLabel(e.target.value);
    }

    const clickDone = (e) =>{
        e.preventDefault();
        income(amount,label,kind);
        console.log(store.getState())
    }

    return(
        <>
            <form>
                <div>income</div>
                <div>{showDate()}</div>
                <div><input placeholder="Label" onChange={changeLabel}></input></div>
                <div><input placeholder="Amount" onChange={changeAmount}></input></div>
                <button onClick={clickDone}>Done</button>
            </form>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        income: (amount,label,kind) => dispatch(income(amount,label,kind))
    }
}

export default connect(null,mapDispatchToProps)(Income);