import React from 'react';
import {useState} from 'react';
import Income from './income';
import Expediture from './expediture';

const AddHistory = () => {
    const [list,setList]= useState(true);

    const onClickIncome = (e) => {
        e.preventDefault();
        setList(true);
    }

    const onClickExpediture = (e) => {
        e.preventDefault();
        setList(false);
    }

    return (
        <>
            <button onClick={onClickIncome}>income</button>
            <button onClick={onClickExpediture}>expediture</button>
            {list?<Income/>:<Expediture/>}
        </>
    )
}

export default AddHistory;