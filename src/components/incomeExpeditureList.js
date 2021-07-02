import React,{useContext} from 'react';
import {connect} from 'react-redux';
import {monthContext} from './monthList';

const IncomeExpeditureList = ({lists}) => {

    const month = useContext(monthContext);

    const newlists = lists.filter((list)=>list.month===month)
    console.log(newlists);
    const mapToList = () => {
        return newlists.map((list,index)=>{
                return(
                    <li key={index}>{list.label} {list.amount}</li>
                );
        })
    }

    return(
        <>  
            <h3>{month}</h3>
            <h3>income and expediture List</h3>
            {mapToList()}
        </>
    );
}

const mapStateToProps = ({list}) => {
    return {
        lists:list
    }
}

export default connect(mapStateToProps)(IncomeExpeditureList);