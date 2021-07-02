import React,{useContext} from 'react';
import {connect} from 'react-redux';
import { monthContext } from './monthList';

const IncomeList = ({lists}) => {

    const month = useContext(monthContext);
    const newlists = lists.filter((list)=>{
        return list.kind==='income'&&list.month===month;
    })

    const mapToList = () => {
        return newlists.map((list,index)=>{
            
                return(
                    <li key={index}>{list.label} {list.amount}</li>
                )
        })
    }

    return(
        <>  
            <h3>{month}</h3>
            <h3>Income List</h3>
            {mapToList()}
        </>
    );
}

const mapStateToProps = ({list}) => {
    return {
        lists:list
    }
}

export default connect(mapStateToProps)(IncomeList);