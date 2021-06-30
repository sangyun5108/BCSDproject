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

    const showList = () => {
        const income = (
            <>
                <Income/>
            </>
        );

        const expediture = (
            <>
                <Expediture/>
            </>
        );

        return list?income:expediture;
    }

    return (
        <>
            <button onClick={onClickIncome}>income</button>
            <button onClick={onClickExpediture}>expediture</button>
            {showList()}
        </>
    )
}

export default AddHistory;