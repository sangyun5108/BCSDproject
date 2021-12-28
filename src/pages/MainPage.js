import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SelectBar from '../components/SelectBar';

const Wrapper = styled.div`
    width:100%;
    display:flex;
    height:60px;
    align-items:center;
    justify-content:center;
`;

const BtnWrapper = styled.nav`
    width:150px;
    margin-top:25px;
    display:flex;
    justify-content:space-between;
`;

const Btn = styled.button`
    width:30px;
    padding:0px;
    font-size:30px;
    border:none;
    outline:none;
    background:none;
    &:hover{
        cursor:pointer;
        transform:scale(1.3);
        transition:transform 0.5s linear;
    }
`;

const Stick = styled.div`
    width:2px;
    height:32px;
    background:black;
`;

const MainPage = () => {

    return(
        <>
            <Wrapper>
                <BtnWrapper>
                    <Link to={'/'}>
                        <Btn value='account'>
                            <i className="fas fa-coins"></i>
                        </Btn>
                    </Link>
                    <Stick></Stick>
                    <Link to={'/calendar'}>
                        <Btn value='calendar'>
                            <i className="fas fa-calendar-alt"></i>
                        </Btn>
                    </Link>
                </BtnWrapper>
            </Wrapper>
            <SelectBar/>
        </>
    );
}

export default MainPage;