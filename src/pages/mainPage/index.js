import React from 'react';
import { Link} from 'react-router-dom';
import SelectBar from '../../components/selectBar';
import AccountBook from '../account';
import * as s from './styles';

const MainPage = ({hideAccount}) => {

    return(
        <>
            <s.Wrapper>
                <s.BtnWrapper>
                    <Link to={'/'}>
                        <s.Btn value='account'>
                            <i className="fas fa-coins"></i>
                        </s.Btn>
                    </Link>
                    <s.Divide></s.Divide>
                    <Link to={'/calendar'}>
                        <s.Btn value='calendar'>
                            <i className="fas fa-calendar-alt"></i>
                        </s.Btn>
                    </Link>
                    <s.Divide></s.Divide>
                    <Link to={'/chart'}>
                        <s.Btn value='chart'>
                            <i class="fas fa-chart-pie"></i>
                        </s.Btn>
                    </Link>
                </s.BtnWrapper>
            </s.Wrapper>
            <SelectBar/>
            {!hideAccount&&<AccountBook/>}
        </>
    );
}

export default MainPage;