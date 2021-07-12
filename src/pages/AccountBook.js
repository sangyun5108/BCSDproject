import React from 'react';
import AddHistory from '../components/AddHistory';
import ShowList from '../components/ShowList';
import styled from 'styled-components';
import {useEffect} from 'react';
import { useDispatch} from 'react-redux';
import {init} from '../redux/actions';
import {Route, Switch, useHistory} from 'react-router-dom';

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
    dispatch(init());
  },[dispatch]);


    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <ShowList/>
                    <AddHistoryBtn onClick={onClickAdd}>Add History</AddHistoryBtn>
                </Route>
                <Route path='/addHistory'>
                    <AddHistory/>
                </Route>
            </Switch>
        </>     
    );
}

export default AccountBook;