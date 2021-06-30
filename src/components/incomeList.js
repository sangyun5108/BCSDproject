import React from 'react';
import {connect} from 'react-redux';

const IncomeList = ({sum,lists}) => {

    const newlists = lists.filter((list)=>{
        return list.kind==='income';
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
            <h3>Income List</h3>
            {mapToList()}
        </>
    );
}

const mapStateToProps = ({sumIncome,list}) => {
    return {
        lists:list,
        sum:sumIncome
    }
}

export default connect(mapStateToProps)(IncomeList);