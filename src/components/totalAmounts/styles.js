import styled from "styled-components"

export const TotalMoney = styled.div`
    width : 100%;
    display : flex;
    font-size: min(3vw, 24px);
    font-weight: 600;
    justify-content : center;

`
export const IncomeButton = styled.div`
    display : flex;
    justify-content : center;
    align-items: center;
    width : 25%;
    height : 50px;
    max-width : 250px;
    cursor: pointer;
    margin-right: 10.5px;
    border: 2px solid #166ff3;
    border-radius: 9px;
    color: ${clicked => clicked.clicked ?'white':'#166ff3'};
    background : ${clicked => clicked.clicked ?'#166ff3':'white'};
`
export const ExpeditureButton = styled.div`
    display : flex;
    justify-content : center;
    align-items: center;
    width : 25%;
    height : 50px;
    max-width : 250px;
    cursor: pointer;
    margin-left: 10.5px;
    border: 2px solid #f8123b;
    border-radius: 9px;
    color: ${clicked => clicked.clicked ? 'white':'#f8123b'};
    background : ${clicked => clicked.clicked ?'#f8123b':'white'};
`
