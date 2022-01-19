import React from 'react';
import {useEffect} from 'react';
import ShowList from '../../components/showList';
import { useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import * as s from './styles';
import { getUserData } from '../../utils/getUserData';
import { init } from '../../store/incomeExpeditureReducer';
import store from '../../store';

const AccountBook = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/addhistory');
  }

  useEffect(()=>{
   
    let data = [];

    (async function(){
      try{
        data = await getUserData();
        console.log(data);
        dispatch(init,{list:data});
        console.log(store.getState());
      }catch(e){
        console.log(e);
      }
    })();

  },[dispatch]);

    return (
        <>
            <ShowList/>
            <s.AddHistoryBtn onClick={onClickAdd}>Add History</s.AddHistoryBtn>
        </>     
    );
}

export default AccountBook;