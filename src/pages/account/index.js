import React from 'react';
import {useEffect} from 'react';
import ShowList from '../../components/showList';
import { useDispatch} from 'react-redux';
import {init} from '../../store/incomeExpeditureReducer';
import {useNavigate} from 'react-router-dom';
import { checkLocal } from '../../utils/checkLocal';
import { getId } from '../../utils/getId';
import * as s from './styles';

const AccountBook = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/addhistory');
  }

  useEffect(()=>{
    let incomeId = 0;
    let expeditureId = 0;
  
    try {
      const getlist = JSON.parse(localStorage.getItem('lists'));
      const list = getlist?getlist:[];
      if(checkLocal()){
        incomeId = getId('income',0);
        expeditureId = getId('expediture',100);
      }
      dispatch(init({
        list,
        incomeId,
        expeditureId}));
    } catch(err) {
      localStorage.clear();
    }
    
  });


    return (
        <>
            <ShowList/>
            <s.AddHistoryBtn onClick={onClickAdd}>Add History</s.AddHistoryBtn>
        </>     
    );
}

export default AccountBook;