import React from 'react';
import { Link } from 'react-router-dom';
import SelectBar from '../../components/selectBar';
import * as s from './styles';

const MainPage = () => {

    return(
        <>
            <s.Wrapper>
                <s.BtnWrapper>
                    <Link to={'/'}>
                        <s.Btn value='account'>
                            <i className="fas fa-coins"></i>
                        </s.Btn>
                    </Link>
                    <s.Stick></s.Stick>
                    <Link to={'/calendar'}>
                        <s.Btn value='calendar'>
                            <i className="fas fa-calendar-alt"></i>
                        </s.Btn>
                    </Link>
                </s.BtnWrapper>
            </s.Wrapper>
            <SelectBar/>
        </>
    );
}

export default MainPage;