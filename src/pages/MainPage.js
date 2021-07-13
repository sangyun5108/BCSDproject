import React from 'react';
import AccountBook from './AccountBook';
import { Route,Switch,useHistory } from 'react-router';
import styled from 'styled-components';
import AddHistory from '../components/AddHistory';

const Wrapper = styled.div`
    width:100%;
    display:flex;
    height:60px;
    align-items:center;
    justify-content:center;
`;

const BtnWrapper = styled.div`
    width:150px;
    display:flex;
    justify-content:space-between;
`;

const Btn = styled.button`
    width:50px;
    padding:0px;
    font-size:30px;
    border:none;
    outline:none;
    background:none;
    &:hover{
        cursor:pointer;
        transform:scale(1.3);
    }
`;

const Stick = styled.div`
    width:2px;
    height:32px;
    background:black;
`;

const MainPage = () => {

    const history = useHistory();

    const onClickBtn = (e) => {
        const value = e.target.parentNode.value;
        if(value==='account'){
            history.push('/');
        }else{
            history.push('/calendar');
        }
    }

    return(
        <>
            <Wrapper>
                <BtnWrapper>
                    <Btn onClick={onClickBtn} value='account'>
                        <i className="fas fa-coins"></i>
                    </Btn>
                    <Stick></Stick>
                    <Btn onClick={onClickBtn} value='calendar'>
                        <i className="fas fa-calendar-alt"></i>
                    </Btn>
                </BtnWrapper>
            </Wrapper>
            <Switch>
                <Route exact path='/'>
                    <AccountBook/>
                </Route>
                <Route exact path='/addHistory'>
                    <AddHistory/>
                </Route>
                <Route path='/calendar'>
                    <h1>Calender</h1>
                </Route>
            </Switch>
        </>
    );
}

export default MainPage;