import React from 'react';
import {connect} from 'react-redux';

const IncomeExpeditureList = ({lists}) => {

    const mapToList = () => {
        return lists.map((list,index)=>{
            if(index>0){
                return(
                    <li key={index}>{list.label} {list.amount}</li>
                );
            }
        })
    }

    return(
        <>  
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