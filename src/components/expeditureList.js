import React from 'react';
import {connect} from 'react-redux';

const ExpeditureList = ({lists}) => {

    const newlists = lists.filter((list)=>{
        return list.kind==='expediture';
    })

    const mapToList = () => {
        return newlists.map((list,index)=>{
            return <li key={index}>{list.label} {list.amount}</li>
        })
    } 
    return(
        <>
            <h3>ExpeditureList</h3>
            {mapToList()}
        </>
    );
}

const mapStateToProps = ({sumExpediture,list}) => {
    return{
        lists:list
    }
}

export default connect (mapStateToProps)(ExpeditureList);