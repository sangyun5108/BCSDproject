import React from 'react';
import {connect} from 'react-redux';
import { useState } from 'react';
import {expediture} from '../redux/actions';

const Expediture = ({expediture}) => {

    const[amount,setAmount] = useState(0);
    const[label,setLabel] = useState('');
    const kind = "expediture";
    const month = "July";

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
        expediture(amount,label,kind,month);
    }

    return(
        <>
            <form>
                <div>expediture</div>
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
        expediture: (amount,label,kind,month) => dispatch(expediture(amount,label,kind,month))
    }
}

export default connect(null,mapDispatchToProps)(Expediture);