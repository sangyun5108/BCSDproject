import React from 'react';
import styled from 'styled-components';
import transformation from '../customModules/transformation';

const ListWrapper = styled.div`
    width:500px;
    height:9vh;
    border-radius:15px;
    background:#f5f5f5;
    margin-bottom:15px;
`;

const List = styled.li`
    width:100%;
    height:100%;
    list-style:none;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const Label = styled.div`
    font-weight:700;
    margin-left:20px;
    font-size:20px;
`;

const Amount = styled.div`
    color:${props=>props.active>=0?"green":"red"};
    font-weight:700;
    margin-right:20px;
    font-size:20px;
`;

const Datelist = styled.div`
    text-align:center;
    margin-bottom:5px;
    font-size:17px;
    color:grey;
`;


const MakeList = ({type,lists,month,year}) => {
    let newLists;
    let listdate=0;
    if(type==='INCOME'||type==='EXPEDITURE'){
        newLists = lists.filter((list)=>list.type===type&&list.month===month&&Number(list.year)===year)

    }else{
        newLists = lists.filter((list)=>list.month===month&&Number(list.year)===year)
    }

    const checkDate = (date) => {
        if(date!==listdate){
            listdate = date;
            return true;
        } else {
            return false;
        }
    }

    return (
          <>
            {newLists.map((list)=>{
                return(
                    <>
                        <Datelist key={list.id+100}>
                                {checkDate(list.date)?`${list.day}, ${list.date}th`:''}
                        </Datelist>
                        <ListWrapper> 
                            <List key={list.id}>
                                <Label>{list.label}</Label>
                                <Amount active={list.amount}>{list.amount>0?`+${transformation(list.amount)}`:transformation(list.amount)}</Amount>
                            </List>
                        </ListWrapper>
                    </>
                );
            })}
          </>
       );
}//종류에따른 다른 리스트를 return해주는 함수

export default MakeList;