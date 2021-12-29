import styled from "styled-components"

export const Wrap = styled.div`
    display : grid;
    grid-template-columns: repeat(7,6fr);
    grid-column-gap: 6px;
    grid-row-gap: 6px;
    height : 85%;
`
export const Day = styled.div`
    background : ${day => day.show ? '#f5f5f7':'#FCFCFD'};
    color : ${day => day.show ? 'black': 'gray'};
    display : flex;
    justify-content : space-between;
    flex-direction : column;
    border-radius : 4px;
    min-width: 100%;
    height : 8.5vw;
    max-height : 90px;
    line-height: 10px;
    font-weight: 600;
`   
export const Dates = styled.div`
    margin : 4px;
    font-size : min(1.8vw, 16px);
`
export const Money = styled.div`
    margin : 4px;
    display : flex;
    flex-direction : column;
`
export const Income = styled.div`
    display : ${day => day.day.IN_total > 0 ? 'block' : 'None'};
    color : blue;
    text-align : right;
    height : min(1.8vw, 16px);
    font-size : min(1.5vw, 16px);
`
export const Expediture = styled.div`
    display : ${day => day.day.EX_total < 0 ? 'block' : 'None'};
    color : red;
    text-align : right;
    height : min(1.8vw, 16px);
    font-size : min(1.5vw, 16px);
`