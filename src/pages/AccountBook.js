import React from 'react';
import ShowList from '../components/showList';
import styled from 'styled-components';
import {useEffect} from 'react';
import { useDispatch} from 'react-redux';
// import {init} from '../redux/actions';
import {init} from '../redux/reducers/incomeExpeditureReducer';
import {useHistory} from 'react-router-dom';
import { checkLocal } from '../utils/checkLocal';
import { getId } from '../utils/getId';

const AddHistoryBtn = styled.button`
  position:fixed;
  bottom:7%;
  width:200px;
  height:40px;
  border-radius:10px;
  outline:none;
  border:none;
  background:#424242;
  color:white;
  font-size:20px;
  font-weight:bold;
  &:hover{
    cursor:pointer;
  }
  box-shadow:0px 0px 10px 5px lightgrey;
`;

const AccountBook = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const onClickAdd = () => {
    history.push('/addHistory');
  }

  useEffect(()=>{
    const getlist = JSON.parse(localStorage.getItem('lists'));
    const list = getlist?getlist:[];
    let incomeId = 0;
    let expeditureId = 100;
    const date = new Date();

    if(checkLocal()){
      incomeId = getId('incomeExpeidture/income',0);
      expeditureId = getId('incomeExpediture/expediture',100);
    }

    dispatch(init({
    list,
    date,
    incomeId,
    expeditureId}));
  },[dispatch]);


    return (
        <>
            <ShowList/>
            <AddHistoryBtn onClick={onClickAdd}>Add History</AddHistoryBtn>
        </>     
    );
}

export default AccountBook;