import React,{useContext} from 'react';
import {connect} from 'react-redux';
import {monthContext} from './monthList';

const ExpeditureList = ({lists}) => {

    const month = useContext(monthContext);

    const newlists = lists.filter((list)=>{
        return list.kind==='expediture' && list.month===month;
    })

    const mapToList = () => {
        return newlists.map((list,index)=>{
            return <li key={index}>{list.label} {list.amount}</li>
        })
    } 
    return(
        <>
            <h3>{month}</h3>
            <h3>ExpeditureList</h3>
            {mapToList()}
        </>
    );
}

const mapStateToProps = ({list}) => {
    return{
        lists:list
    }
}

export default connect (mapStateToProps)(ExpeditureList);