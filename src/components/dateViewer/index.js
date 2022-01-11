import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateSet } from '../../redux/reducers/showListReducer'
import { MONTH } from '../../shared/const';
import * as s from './styles';

function DateViewer(){//날짜 출력
    const {year,month} = useSelector((state => ({
        year : (state.showListReducer).year,
        month : (state.showListReducer).month
    })))
    let date = new Date(year,month)
    const dispatch = useDispatch()
    const onIncrease = () =>{
        date.setMonth(month+1)
        dispatch(DateSet({year : date.getFullYear(), month : date.getMonth()}))
    }
    const onDecrease = () =>{
        date.setMonth(month-1)
        dispatch(DateSet({year : date.getFullYear(), month : date.getMonth()}))
    }
    return(
        <s.DateSetContainer>
            <s.Controler>
                <s.Monthselector onClick={()=>onDecrease()}>
                    <s.Years>
                    {new Date(date.getFullYear(),month-1).getFullYear()}
                    </s.Years>
                    {MONTH[new Date(date.getFullYear(),month-1).getMonth()]}
                </s.Monthselector>
                <s.Now>
                    <s.Years>
                        {date.getFullYear()}
                    </s.Years>
                    {MONTH[month]}
                </s.Now>
                <s.Monthselector onClick={()=>onIncrease()}>
                    <s.Years>
                        {new Date(date.getFullYear(),month+1).getFullYear()}
                    </s.Years>
                    {MONTH[month+1]}
                </s.Monthselector>
            </s.Controler> 
        </s.DateSetContainer>
    )
}

export default DateViewer