import styled from 'styled-components'
export const Header = styled.div`
    display : grid;
    grid-template-columns: repeat(7,1fr);
    grid-row-gap: 6px;
    height : 15%;
`
export const DayOfWeek = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    font-weight : 600;
    font-size : 16px;
    line-height : 20px;
    text-align : center;
`