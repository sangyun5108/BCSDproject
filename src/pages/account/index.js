import React from 'react';
import {useEffect} from 'react';
import ShowList from '../../components/showList';
import { useDispatch} from 'react-redux';
import {init} from '../../store/incomeExpeditureReducer';
import {useNavigate} from 'react-router-dom';
import { getUserData } from '../../utils/getUserData';
import * as s from './styles';

const AccountBook = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/addhistory');
  }

  useEffect(()=>{

    const incomeId = 1;
    const expeditureId = 10000000000;

    try {
      const list = [...getUserData()];
      console.log(list);

      dispatch(init({
        list,
        incomeId,
        expeditureId
      }));
    } catch(err) {
      console.dir(err);
    }
    
  },[dispatch]);

    return (
        <>
            <ShowList/>
            <s.AddHistoryBtn onClick={onClickAdd}>Add History</s.AddHistoryBtn>
        </>     
    );
}

export default AccountBook;